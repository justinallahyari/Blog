import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/schema";
import { formatDate } from "@/lib/schema";

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const { slug, frontmatter, readingTime } = post;

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/60 p-6 transition-all hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-md ${
        featured ? "ring-1 ring-indigo-500/10" : ""
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={new Date(frontmatter.pubDate).toISOString()}>
              {formatDate(frontmatter.pubDate)}
            </time>
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {readingTime}
          </span>
        </div>

        <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          <Link href={`/blog/${slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {frontmatter.title}
          </Link>
        </h3>

        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {frontmatter.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/70">
        <div className="flex flex-wrap gap-1.5">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">
          Read
          <ArrowUpRight className="ml-0.5 h-3.5 w-3.5" />
        </span>
      </div>
    </article>
  );
}
