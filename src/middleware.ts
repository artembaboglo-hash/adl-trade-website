import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, localeCookieName, resolveLocale, withLocalePath } from "@/lib/i18n";

/** Public / static files: skip locale redirects (middleware runs before public file handling). */
const STATIC_EXT =
  /\.(?:ico|png|jpe?g|gif|webp|svg|avif|woff2?|ttf|eot|otf|pdf|txt|xml|json|webmanifest|map|mp4|webm|mp3|zip)$/i;

function isLocalHost(host: string) {
  return (
    host === "localhost" ||
    host.startsWith("localhost:") ||
    host.startsWith("127.0.0.1")
  );
}

/** What the edge/proxy says about the original client↔edge connection (Railway, CDNs, etc.). */
function isPublicHttpRequest(request: NextRequest): boolean {
  const xf = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim().toLowerCase();
  if (xf === "https") return false;
  if (xf === "http") return true;

  const forwarded = request.headers.get("forwarded");
  if (forwarded) {
    const m = forwarded.match(/proto=(https?)/i);
    const p = m?.[1]?.toLowerCase();
    if (p === "https") return false;
    if (p === "http") return true;
  }

  if (request.headers.get("x-forwarded-ssl") === "on") return false;

  if (request.nextUrl.protocol === "https:") return false;
  if (request.nextUrl.protocol === "http:") return true;

  return false;
}

export function middleware(request: NextRequest) {
  try {
    const host = request.headers.get("host") ?? "";
    /** Force HTTPS: Chrome shows «Не защищено» when the document URL is still `http://`. */
    if (process.env.NODE_ENV === "production" && !isLocalHost(host) && isPublicHttpRequest(request)) {
      const url = request.nextUrl.clone();
      url.protocol = "https:";
      return NextResponse.redirect(url, 308);
    }

    const { pathname, search } = request.nextUrl;

    /** Never locale-prefix Next internals, devtools, or static assets (CSS/JS/fonts). */
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/__nextjs") ||
      pathname.startsWith("/api") ||
      STATIC_EXT.test(pathname)
    ) {
      return NextResponse.next();
    }

    /** Always send `/` to the primary locale (ro). Cookie does not override the home URL. */
    if (pathname === "/") {
      const target = withLocalePath(defaultLocale, "/");
      const url = new URL(`${target}${search}`, request.url);
      return NextResponse.redirect(url);
    }

    const segments = pathname.split("/").filter((s) => s.length > 0);
    const rawSegment = segments[0];
    const resolved = rawSegment ? resolveLocale(rawSegment) : undefined;

    if (resolved) {
      if (rawSegment !== resolved) {
        const rest = segments.slice(1).join("/");
        const path = rest ? `/${resolved}/${rest}` : `/${resolved}`;
        const url = new URL(`${path}${search}`, request.url);
        return NextResponse.redirect(url);
      }
      const response = NextResponse.next();
      response.cookies.set(localeCookieName, resolved);
      return response;
    }

    const cookieLocale = request.cookies.get(localeCookieName)?.value;
    const locale = cookieLocale ? resolveLocale(cookieLocale) ?? defaultLocale : defaultLocale;
    const target = withLocalePath(locale, pathname);
    const url = new URL(`${target}${search}`, request.url);
    return NextResponse.redirect(url);
  } catch (cause) {
    console.error("[middleware]", cause);
    return NextResponse.next();
  }
}

export const config = {
  /** Exclude all of `/_next/*` (chunks, CSS, HMR, RSC), not only `/static` and `/image`. */
  matcher: ["/((?!_next/|_vercel|api/|favicon\\.ico|icon\\.ico|robots\\.txt|sitemap\\.xml).*)"]
};
