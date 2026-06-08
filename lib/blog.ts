import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO YYYY-MM-DD
  author?: string;
  cover?: string;
  tags?: string[];
  /** Marcado como "stub": página existe pero el contenido aún no está. */
  stub?: boolean;
};

export type Post = PostFrontmatter & {
  slug: string;
  /** Cuerpo raw MDX (todavía sin parsear). */
  body: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function leerTodos(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const archivos = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts: Post[] = archivos.map((file) => {
    const fullPath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx?$/, "");
    return { slug, body: content, ...(data as PostFrontmatter) };
  });

  // Más reciente primero
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Listado completo, ya ordenado por fecha desc. */
export function getPosts(): Post[] {
  return leerTodos();
}

/** Solo los completos (excluye stubs). Para la home. */
export function getPostsPublicados(): Post[] {
  return leerTodos().filter((p) => !p.stub);
}

export function getPost(slug: string): Post | undefined {
  return leerTodos().find((p) => p.slug === slug);
}

export function getSlugs(): string[] {
  return leerTodos().map((p) => p.slug);
}
