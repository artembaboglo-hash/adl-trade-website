export type InquiryAttachment = { filename: string; content: Buffer };

const DEFAULT_MAX_FILES = 5;
/** Per file (binary). Default 25 MiB. */
const DEFAULT_MAX_PER_FILE = 25 * 1024 * 1024;
/** Combined attachments (binary). Default 50 MiB (e.g. two 25 MiB files). Lower via env if using Resend (~40 MB encoded per email). */
const DEFAULT_MAX_TOTAL = 50 * 1024 * 1024;

function envInt(key: string, fallback: number): number {
  const v = process.env[key]?.trim();
  if (!v) return fallback;
  const n = Number(v);
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : fallback;
}

function envBytes(key: string, fallback: number): number {
  const v = process.env[key]?.trim();
  if (!v) return fallback;
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
}

/** Safe filename for email headers; strips path and control characters. */
export function safeAttachmentFilename(name: string): string {
  const base = name
    .replace(/^.*[/\\]/, "")
    .replace(/[\x00-\x1f\x7f]/g, "_")
    .replace(/["`$]/g, "_")
    .trim()
    .slice(0, 120);
  return base || "attachment";
}

function isFileLike(v: FormDataEntryValue): v is File {
  return typeof File !== "undefined" && v instanceof File;
}

/**
 * Reads and validates uploaded files from multipart form data.
 */
export async function collectAttachments(
  entries: FormDataEntryValue[]
): Promise<{ ok: true; attachments: InquiryAttachment[] } | { ok: false; code: string }> {
  const maxCount = envInt("INQUIRY_MAX_FILES", DEFAULT_MAX_FILES);
  const maxPer = envBytes("INQUIRY_MAX_ATTACHMENT_BYTES", DEFAULT_MAX_PER_FILE);
  const maxTotal = envBytes("INQUIRY_MAX_TOTAL_ATTACHMENT_BYTES", DEFAULT_MAX_TOTAL);

  const files = entries.filter(isFileLike);
  if (files.length > maxCount) {
    return { ok: false, code: "too_many_attachments" };
  }

  const out: InquiryAttachment[] = [];
  let total = 0;

  for (const file of files) {
    if (file.size === 0) continue;
    if (file.size > maxPer) {
      return { ok: false, code: "attachment_too_large" };
    }
    if (total + file.size > maxTotal) {
      return { ok: false, code: "attachments_too_large" };
    }
    const buf = Buffer.from(await file.arrayBuffer());
    total += buf.length;
    out.push({ filename: safeAttachmentFilename(file.name), content: buf });
  }

  return { ok: true, attachments: out };
}
