import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export function createInquiryTransport(): Transporter | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = process.env.SMTP_SECURE !== "false";

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass }
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
