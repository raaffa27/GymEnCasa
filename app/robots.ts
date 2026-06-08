import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/config";

// Necesario para `output: "export"`: fuerza render estático del archivo.
export const dynamic = "force-static";

const abs = (path = "/") =>
  `${SITE_URL.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /buscar es noindex (útil al usuario, no aporta SEO).
        // /api/* reservado por si en futuro se añade endpoint server-only.
        disallow: ["/buscar", "/api/"],
      },
    ],
    sitemap: abs("/sitemap.xml"),
    host: SITE_URL,
  };
}
