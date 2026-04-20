const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 10;
const timestampsByIp = new Map<string, number[]>();

/** Simple sliding-window limiter (per server instance). */
export function isInquiryRateLimited(ip: string): boolean {
  const now = Date.now();
  const prev = timestampsByIp.get(ip) ?? [];
  const windowed = prev.filter((t) => now - t < WINDOW_MS);
  if (windowed.length >= MAX_REQUESTS) {
    timestampsByIp.set(ip, windowed);
    return true;
  }
  windowed.push(now);
  timestampsByIp.set(ip, windowed);
  if (timestampsByIp.size > 5000) {
    for (const [key, stamps] of timestampsByIp) {
      if (stamps.every((t) => now - t >= WINDOW_MS)) timestampsByIp.delete(key);
    }
  }
  return false;
}
