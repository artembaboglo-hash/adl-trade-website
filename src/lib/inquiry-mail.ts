import dns from "node:dns";
import net from "node:net";
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

const dnsLookup = dns.promises.lookup;

export type InquiryMailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

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

async function createSmtpTransport(): Promise<Transporter | null> {
  const hostEnv = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!hostEnv || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = process.env.SMTP_SECURE !== "false";
  const connectionTimeout = Number(process.env.SMTP_CONNECTION_TIMEOUT_MS ?? "20000");
  const greetingTimeout = Number(process.env.SMTP_GREETING_TIMEOUT_MS ?? "20000");
  const socketTimeout = Number(process.env.SMTP_SOCKET_TIMEOUT_MS ?? "20000");
  const { host, servername } = await smtpSocketTarget(hostEnv);

  return nodemailer.createTransport({
    host,
    port,
    secure,
    connectionTimeout,
    greetingTimeout,
    socketTimeout,
    auth: { user, pass },
    ...(servername ? { servername } : {})
  });
}

export function isInquiryMailConfigured(): boolean {
  if (process.env.RESEND_API_KEY?.trim()) return true;
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  return Boolean(host && user && pass);
}

async function sendViaResend(input: InquiryMailInput, apiKey: string): Promise<void> {
  const from = getMailFromAddress();
  const to = getMailToAddress();
  const body: Record<string, unknown> = {
    from,
    to: [to],
    subject: input.subject,
    text: input.text
  };
  if (input.replyTo) body.reply_to = input.replyTo;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend HTTP ${res.status}${detail ? `: ${detail.slice(0, 500)}` : ""}`);
  }
}

/**
 * Sends inquiry mail. Prefer `RESEND_API_KEY` when set (HTTPS; works on Railway Hobby where
 * outbound SMTP is blocked). Otherwise uses SMTP with IPv4-friendly resolution.
 */
export async function sendInquiryMail(input: InquiryMailInput): Promise<void> {
  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (resendKey) {
    await sendViaResend(input, resendKey);
    return;
  }

  const transport = await createSmtpTransport();
  if (!transport) {
    throw new Error("mail_not_configured");
  }

  await transport.sendMail({
    from: getMailFromAddress(),
    to: getMailToAddress(),
    replyTo: input.replyTo,
    subject: input.subject,
    text: input.text
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
