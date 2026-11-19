import React from "react";
import Link from "next/link";
import type { Post } from "@/lib/schema";
import { formatDate } from "@/lib/schema";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const { slug, frontmatter, readingTime } = post;

  return (
    <article className="group py-6 first:pt-0">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-ink-subtle tabular-nums">
        <time dateTime={new Date(frontmatter.pubDate).toISOString()}>
          {formatDate(frontmatter.pubDate)}
        </time>
        <span aria-hidden="true">·</span>
        <span>{readingTime}</span>
      </div>

      <h3 className="mt-2 text-lg sm:text-xl font-semibold tracking-tight text-ink">
        <Link
          href={`/blog/${slug}`}
          className="hover:text-accent transition-colors"
        >
          {frontmatter.title}
        </Link>
      </h3>

      <p className="mt-2.5 text-[15.5px] leading-[1.7] text-ink-muted">
        {frontmatter.description}
      </p>

      {frontmatter.tags.length > 0 && (
        <div className="mt-3.5 flex flex-wrap gap-2 text-xs">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-accent-soft px-2 py-0.5 font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
