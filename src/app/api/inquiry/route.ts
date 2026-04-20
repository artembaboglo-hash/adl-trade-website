import { NextRequest, NextResponse } from "next/server";
import { createInquiryTransport, getMailFromAddress, getMailToAddress } from "@/lib/inquiry-mail";
import { isInquiryRateLimited } from "@/lib/inquiry-rate-limit";
import { isInquiryFormSource } from "@/lib/inquiry-types";
import { locales } from "@/lib/i18n";
import { isEmailValid } from "@/lib/validation";

export const runtime = "nodejs";

const MAX_VALUE_LEN = 4000;
const MAX_MESSAGE_LEN = 12000;

function clientIp(request: NextRequest): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip")?.trim() ?? "unknown";
}

function isAllowedOrigin(request: NextRequest): boolean {
  if (process.env.NODE_ENV !== "production") return true;
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const { hostname } = new URL(origin);
    if (hostname === "localhost" || hostname === "127.0.0.1") return true;
    if (hostname === "adltrade.com" || hostname === "www.adltrade.com") return true;
    const allowlist =
      process.env.SMTP_ALLOWED_ORIGIN_HOSTS?.split(",")
        .map((s) => s.trim())
        .filter(Boolean) ?? [];
    return allowlist.includes(hostname);
  } catch {
    return false;
  }
}

function sanitizeField(key: string, value: unknown): string | null {
  if (typeof value !== "string") return null;
  const max = key.toLowerCase().includes("message") ? MAX_MESSAGE_LEN : MAX_VALUE_LEN;
  return value.slice(0, max);
}

const SOURCE_LABEL: Record<string, string> = {
  contacts: "Contacts",
  suppliers: "Suppliers",
  buyers: "Buyers",
  career: "Career"
};

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: "forbidden" }, { status: 403 });
    }

    const ip = clientIp(request);
    if (isInquiryRateLimited(ip)) {
      return NextResponse.json({ error: "rate_limit" }, { status: 429 });
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "invalid_json" }, { status: 400 });
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "invalid_body" }, { status: 400 });
    }

    const b = body as Record<string, unknown>;
    const hp = typeof b.hp === "string" ? b.hp : "";
    if (hp.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const source = b.source;
    const locale = b.locale;
    const fields = b.fields;

    if (!isInquiryFormSource(source)) {
      return NextResponse.json({ error: "invalid_source" }, { status: 400 });
    }
    if (typeof locale !== "string" || !(locales as readonly string[]).includes(locale)) {
      return NextResponse.json({ error: "invalid_locale" }, { status: 400 });
    }
    if (!fields || typeof fields !== "object" || Array.isArray(fields)) {
      return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
    }

    const clean: Record<string, string> = {};
    for (const [k, v] of Object.entries(fields as Record<string, unknown>)) {
      if (typeof k !== "string" || k.length > 80) continue;
      const s = sanitizeField(k, v);
      if (s !== null && s.length > 0) clean[k] = s;
    }
    if (Object.keys(clean).length === 0) {
      return NextResponse.json({ error: "empty_fields" }, { status: 400 });
    }

    const transport = createInquiryTransport();
    if (!transport) {
      console.error("[api/inquiry] Missing SMTP env (SMTP_HOST, SMTP_USER, SMTP_PASS)");
      return NextResponse.json({ error: "mail_not_configured" }, { status: 503 });
    }

    const sourceLabel = SOURCE_LABEL[source] ?? source;
    const subjectLine =
      clean.subject ??
      clean.companyName ??
      clean.company ??
      clean.fullName ??
      clean.name ??
      "Website form";

    const textBody =
      `Form: ${source} (${sourceLabel})\n` +
      `Locale: ${locale}\n` +
      `IP: ${ip}\n\n` +
      Object.entries(clean)
        .map(([k, v]) => `${k}: ${v.replace(/\r\n/g, "\n")}`)
        .join("\n");

    const replyTo = clean.email && isEmailValid(clean.email) ? clean.email : undefined;

    await transport.sendMail({
      from: getMailFromAddress(),
      to: getMailToAddress(),
      replyTo,
      subject: `[ADL Trade] ${sourceLabel} — ${subjectLine}`.slice(0, 240),
      text: textBody
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (cause) {
    console.error("[api/inquiry]", cause);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
