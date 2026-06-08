import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getSlugs } from "@/lib/blog";
import { jsonLd, articleLd, breadcrumbLd } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function ArticuloPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 lg:px-8 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(articleLd(post))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbLd([
            { name: "Inicio", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]),
        )}
      />

      <Link
        href="/blog"
        className="text-sm text-ink-mute hover:text-flame-300"
      >
        ← Volver al blog
      </Link>

      <header className="mt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-flame-300 mb-3">
          {new Date(post.date).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
          {post.author ? ` · ${post.author}` : ""}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink tracking-tightest leading-[1.05]">
          {post.title}
        </h1>
        <p className="mt-5 text-lg text-ink-mute leading-relaxed max-w-2xl">
          {post.description}
        </p>
        {post.stub && (
          <p className="mt-6 inline-block rounded-full border border-bg-line bg-bg-card px-4 py-1.5 text-xs font-mono text-ink-dim">
            Borrador en preparación
          </p>
        )}
      </header>

      <div className="prose-fitness mt-12">
        <MDXRemote source={post.body} />
      </div>
    </article>
  );
}
