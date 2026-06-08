import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/config";
import { CATEGORIAS } from "@/data/categorias";
import { getPosts } from "@/lib/blog";

// Necesario para `output: "export"`: fuerza render estático del archivo.
export const dynamic = "force-static";

const abs = (path = "/") =>
  `${SITE_URL.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();
  const posts = getPosts();

  const estaticas: MetadataRoute.Sitemap = [
    {
      url: abs("/"),
      lastModified: ahora,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: abs("/blog"),
      lastModified: ahora,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: abs("/aviso-afiliados"),
      lastModified: ahora,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // /buscar deliberadamente fuera del sitemap (es noindex).
  ];

  const categorias: MetadataRoute.Sitemap = CATEGORIAS.map((c) => ({
    url: abs(`/${c.slug}`),
    lastModified: ahora,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const articulos: MetadataRoute.Sitemap = posts.map((p) => ({
    url: abs(`/blog/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: p.stub ? "monthly" : "yearly",
    priority: p.stub ? 0.4 : 0.7,
  }));

  return [...estaticas, ...categorias, ...articulos];
}
