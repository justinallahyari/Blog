import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import { TOC } from "@/components/TOC";
import { CodeBlockEnhancer } from "@/components/CodeBlockEnhancer";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }

  const { title, description, pubDate, updatedDate, tags } = post.frontmatter;
  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title,
    description,
    keywords: tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      publishedTime: pubDate.toISOString(),
      modifiedTime: (updatedDate ?? pubDate).toISOString(),
      tags,
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const post = allPosts[currentIndex];
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <article className="space-y-10">
      <CodeBlockEnhancer />

      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-subtle hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          All posts
        </Link>
      </div>

      <header className="space-y-4 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-ink-subtle tabular-nums">
          <time dateTime={post.frontmatter.pubDate.toISOString()}>
            {formatDate(post.frontmatter.pubDate)}
          </time>
          {post.frontmatter.updatedDate && (
            <>
              <span aria-hidden="true">·</span>
              <span>
                Updated{" "}
                <time dateTime={post.frontmatter.updatedDate.toISOString()}>
                  {formatDate(post.frontmatter.updatedDate)}
                </time>
              </span>
            </>
          )}
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink leading-snug">
          {post.frontmatter.title}
        </h1>

        <p className="text-base sm:text-[17px] leading-[1.7] text-ink-muted">
          {post.frontmatter.description}
        </p>

        {post.frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1 text-xs">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-accent-soft px-2 py-0.5 font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {post.toc.length > 1 && <TOC items={post.toc} />}

      <div
        className="prose prose-headings:font-semibold prose-headings:tracking-tight max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      {(prevPost || nextPost) && (
        <nav
          aria-label="Post navigation"
          className="grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-2"
        >
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className="group space-y-1">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-subtle">
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Older post
              </span>
              <p className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                {prevPost.frontmatter.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group space-y-1 sm:text-right"
            >
              <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-subtle sm:justify-end">
                Newer post
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                {nextPost.frontmatter.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}
    </article>
  );
}
