"use client";

import { useEffect } from "react";

/**
 * Last-resort upgrade when the document URL is still `http://` (Chrome: «Не защищено»).
 * Middleware should handle this; this catches edge cases where proxy headers are missing.
 */
export function ForceHttps() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const { protocol, hostname, host, pathname, search, hash } = window.location;
    if (protocol !== "http:") return;
    if (hostname === "localhost" || hostname.startsWith("127.")) return;
    window.location.replace(`https://${host}${pathname}${search}${hash}`);
  }, []);

  return null;
}
