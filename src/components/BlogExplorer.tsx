"use client";

import React, { useMemo, useState } from "react";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Post } from "@/lib/schema";
import { PostCard } from "./PostCard";

interface BlogExplorerProps {
  posts: Post[];
  allTags: { tag: string; count: number }[];
  pageSize?: number;
}

export function BlogExplorer({
  posts,
  allTags,
  pageSize = 10,
}: BlogExplorerProps) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag =
        !selectedTag || post.frontmatter.tags.includes(selectedTag);
      const q = query.trim().toLowerCase();
      if (!q) return matchesTag;

      const matchesTitle = post.frontmatter.title.toLowerCase().includes(q);
      const matchesDesc = post.frontmatter.description.toLowerCase().includes(q);
      const matchesTags = post.frontmatter.tags.some((t) =>
        t.toLowerCase().includes(q)
      );
      return matchesTag && (matchesTitle || matchesDesc || matchesTags);
    });
  }, [posts, query, selectedTag]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize
  );

  const handleTagSelect = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {posts.length > 1 && (
        <div className="space-y-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              type="search"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search posts..."
              aria-label="Search posts"
              className="w-full rounded-md border border-line bg-surface pl-9 pr-9 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCurrentPage(1);
                }}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => handleTagSelect(null)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                selectedTag === null
                  ? "bg-accent text-white dark:text-[#0B1324]"
                  : "border border-line text-ink-muted hover:border-accent hover:text-accent"
              }`}
            >
              All ({posts.length})
            </button>
            {allTags.map(({ tag, count }) => (
              <button
                key={tag}
                type="button"
                onClick={() =>
                  handleTagSelect(selectedTag === tag ? null : tag)
                }
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-accent text-white dark:text-[#0B1324]"
                    : "border border-line text-ink-muted hover:border-accent hover:text-accent"
                }`}
              >
                {tag} ({count})
              </button>
            ))}
          </div>
        </div>
      )}

      {paginatedPosts.length === 0 ? (
        <div className="border-t border-line py-10 text-sm text-ink-subtle">
          No matching posts found.
        </div>
      ) : (
        <div className="divide-y divide-line">
          {paginatedPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="flex items-center justify-between border-t border-line pt-6"
        >
          <button
            type="button"
            disabled={safePage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="inline-flex items-center gap-1 rounded-md border border-line px-3 py-1.5 text-sm text-ink-muted disabled:opacity-40 hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <span className="text-xs text-ink-subtle tabular-nums">
            Page {safePage} of {totalPages}
          </span>
          <button
            type="button"
            disabled={safePage >= totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="inline-flex items-center gap-1 rounded-md border border-line px-3 py-1.5 text-sm text-ink-muted disabled:opacity-40 hover:border-accent hover:text-accent"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
