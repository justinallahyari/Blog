import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight, RefreshCw } from "lucide-react";
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

  const { title, description, pubDate, updatedDate, heroImage, tags } =
    post.frontmatter;
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
      images: heroImage ? [{ url: heroImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: heroImage ? [heroImage] : undefined,
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

      {/* Back link */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all articles
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-5 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-indigo-500" />
            <time dateTime={post.frontmatter.pubDate.toISOString()}>
              Published {formatDate(post.frontmatter.pubDate)}
            </time>
          </span>

          {post.frontmatter.updatedDate && (
            <>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                <RefreshCw className="h-3.5 w-3.5" />
                <time dateTime={post.frontmatter.updatedDate.toISOString()}>
                  Updated {formatDate(post.frontmatter.updatedDate)}
                </time>
              </span>
            </>
          )}

          <span>•</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-indigo-500" />
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {post.frontmatter.title}
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          {post.frontmatter.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {post.frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {post.frontmatter.heroImage && (
          <div className="pt-4">
            <img
              src={post.frontmatter.heroImage}
              alt={post.frontmatter.title}
              width={800}
              height={420}
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 object-cover shadow-sm"
            />
          </div>
        )}
      </header>

      {/* Main Content + Sticky Sidebar TOC */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Mobile inline TOC */}
        <div className="lg:hidden">
          <TOC items={post.toc} />
        </div>

        {/* Prose Content */}
        <div
          className="prose prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-img:rounded-xl lg:col-span-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Desktop Sticky TOC */}
        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-24">
            <TOC items={post.toc} />
          </div>
        </aside>
      </div>

      {/* Prev / Next Navigation */}
      <nav
        aria-label="Post navigation"
        className="grid grid-cols-1 gap-4 border-t border-slate-200 dark:border-slate-800 pt-10 sm:grid-cols-2"
      >
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:border-indigo-500/60 transition-colors"
          >
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Older Article
            </span>
            <span className="mt-2 font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {prevPost.frontmatter.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 p-5 text-right hover:border-indigo-500/60 transition-colors"
          >
            <span className="inline-flex items-center justify-end gap-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Newer Article
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <span className="mt-2 font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {nextPost.frontmatter.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  );
}
