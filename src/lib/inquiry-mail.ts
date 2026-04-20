import dns from "node:dns";
import net from "node:net";
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

const dnsLookup = dns.promises.lookup;

/**
 * Railway (and similar) often has no working IPv6 egress. Hostinger SMTP may resolve to
 * IPv6 first; nodemailer can also pick a random A/AAAA record. Force IPv4 for the socket
 * and keep the original hostname as `servername` for TLS SNI / certificate checks.
 */
async function smtpSocketTarget(hostname: string): Promise<{ host: string; servername?: string }> {
  const h = hostname.trim();
  if (!h) return { host: h };
  if (net.isIP(h)) return { host: h };
  if (process.env.SMTP_USE_HOSTNAME === "true") {
    return { host: h };
  }
  try {
    const { address } = await dnsLookup(h, { family: 4 });
    return { host: address, servername: h };
  } catch {
    return { host: h };
  }
}

export async function createInquiryTransport(): Promise<Transporter | null> {
  const hostEnv = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!hostEnv || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = process.env.SMTP_SECURE !== "false";
  const { host, servername } = await smtpSocketTarget(hostEnv);

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    ...(servername ? { servername } : {})
  });
}

export function getMailFromAddress(): string {
  const from = process.env.MAIL_FROM?.trim();
  if (from) return from;
  const user = process.env.SMTP_USER?.trim();
  return user ?? "noreply@localhost";
}

export function getMailToAddress(): string {
  const to = process.env.MAIL_TO?.trim();
  if (to) return to;
  const user = process.env.SMTP_USER?.trim();
  return user ?? "noreply@localhost";
}
