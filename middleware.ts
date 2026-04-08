import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isValidLocale, localeCookieName, withLocalePath } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const cookieLocale = request.cookies.get(localeCookieName)?.value;
    const locale = cookieLocale && isValidLocale(cookieLocale) ? cookieLocale : defaultLocale;
    const target = withLocalePath(locale, "/");
    const url = new URL(`${target}${search}`, request.url);
    return NextResponse.redirect(url);
  }

  const segments = pathname.split("/");
  const localeInPath = segments[1];

  if (isValidLocale(localeInPath)) {
    const response = NextResponse.next();
    response.cookies.set(localeCookieName, localeInPath);
    return response;
  }

  const cookieLocale = request.cookies.get(localeCookieName)?.value;
  const locale = cookieLocale && isValidLocale(cookieLocale) ? cookieLocale : defaultLocale;
  const target = withLocalePath(locale, pathname);
  const url = new URL(`${target}${search}`, request.url);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
