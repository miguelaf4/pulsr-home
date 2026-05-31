import type { MetadataRoute } from "next";

const SITE_URL = "https://pulsr.live";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/home",
          "/contacto",
          "/propuestas/",
          "/test-page",
          "/marcas",
          "/hosts",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
