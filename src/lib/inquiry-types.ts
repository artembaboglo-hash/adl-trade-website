export const INQUIRY_FORM_SOURCES = ["contacts", "suppliers", "buyers", "career"] as const;
export type InquiryFormSource = (typeof INQUIRY_FORM_SOURCES)[number];

export function isInquiryFormSource(value: unknown): value is InquiryFormSource {
  return typeof value === "string" && (INQUIRY_FORM_SOURCES as readonly string[]).includes(value);
}
