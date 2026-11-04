import React from "react";
import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import { BlogExplorer } from "@/components/BlogExplorer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "All articles on distributed systems, web architecture, Rust, TypeScript, and performance engineering.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog | ${siteConfig.shortName}`,
    description:
      "All articles on distributed systems, web architecture, Rust, TypeScript, and performance engineering.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <div className="space-y-8">
      <header className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          All Articles
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
          Reverse-chronological archive of deep dives, tutorials, and architectural notes. Filter by topic or search below.
        </p>
      </header>

      <BlogExplorer posts={posts} allTags={allTags} pageSize={10} />
    </div>
  );
}
