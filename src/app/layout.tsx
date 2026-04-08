import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
      <body className="relative min-h-screen text-body">
        <AmbientBackdrop />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
