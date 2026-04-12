import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "relative min-h-screen text-body")}>
        <AmbientBackdrop />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
