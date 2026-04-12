import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, localeCookieName, resolveLocale, withLocalePath } from "@/lib/i18n";

/** Public / static files: skip locale redirects (middleware runs before public file handling). */
const STATIC_EXT =
  /\.(?:ico|png|jpe?g|gif|webp|svg|avif|woff2?|ttf|eot|otf|pdf|txt|xml|json|webmanifest|map|mp4|webm|mp3|zip)$/i;

export function middleware(request: NextRequest) {
  try {
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

    if (pathname === "/") {
      const cookieLocale = request.cookies.get(localeCookieName)?.value;
      const locale = cookieLocale ? resolveLocale(cookieLocale) ?? defaultLocale : defaultLocale;
      const target = withLocalePath(locale, "/");
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
