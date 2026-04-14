import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const origin = siteConfig.url.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"]
      }
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: new URL(siteConfig.url).host
  };
}
