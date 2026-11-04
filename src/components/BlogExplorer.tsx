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
      {/* Search and Tag Filter Controls */}
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 p-4 sm:p-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search articles by title, topic, or keyword..."
            aria-label="Search articles"
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 pl-10 pr-10 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCurrentPage(1);
              }}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => handleTagSelect(null)}
            className={`rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
              selectedTag === null
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
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
              className={`rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                selectedTag === tag
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              #{tag} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Results list */}
      {paginatedPosts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center">
          <p className="text-base font-medium text-slate-700 dark:text-slate-300">
            No matching articles found.
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Try clearing your search query or selecting a different tag.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {paginatedPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Pagination when posts exceed pageSize (10) */}
      {totalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-6"
        >
          <button
            type="button"
            disabled={safePage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Page <strong>{safePage}</strong> of <strong>{totalPages}</strong>
          </span>
          <button
            type="button"
            disabled={safePage >= totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
