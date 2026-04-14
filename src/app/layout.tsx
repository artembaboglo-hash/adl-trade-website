import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { cn } from "@/lib/utils";

function safeMetadataBase(): URL {
  /** Keep a concrete URL in dev: omitting metadataBase caused intermittent 500s on some routes (Next metadata resolution). */
  if (process.env.NODE_ENV === "development") {
    return new URL("http://localhost:3000");
  }
  try {
    return new URL(siteConfig.url);
  } catch {
    return new URL("http://localhost:3000");
  }
}

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: safeMetadataBase(),
  title: {
    default: "ADL Trade | Corporate Distribution Partner",
    template: "%s | ADL Trade"
  },
  description: siteConfig.description,
  openGraph: {
    title: "ADL Trade",
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website"
  }
};

/** Runs before paint so Chrome does not show a long HTTP “Not secure” flash for HTTP bookmarks. */
const PRODUCTION_FORCE_HTTPS_SCRIPT =
  '(function(){var h=location.hostname;if(h==="localhost"||h.indexOf("127.")===0)return;if(location.protocol!=="http:")return;location.replace("https://"+location.host+location.pathname+location.search+location.hash);})();';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body className={cn(inter.className, "relative min-h-screen text-body")}>
        {process.env.NODE_ENV === "production" ? (
          <Script id="force-https" strategy="beforeInteractive">
            {PRODUCTION_FORCE_HTTPS_SCRIPT}
          </Script>
        ) : null}
        <AmbientBackdrop />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
