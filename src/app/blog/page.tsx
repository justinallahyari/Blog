import React from "react";
import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import { BlogExplorer } from "@/components/BlogExplorer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes and write-ups on hybrid cloud administration, identity and access management (IAM), endpoint operations, and DoD CMMC Level 2 compliance.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog — ${siteConfig.shortName}`,
    description:
      "Notes and write-ups on hybrid cloud administration, identity and access management (IAM), endpoint operations, and DoD CMMC Level 2 compliance.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <div className="space-y-10">
      <header className="space-y-2.5 border-b border-line pb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Writing
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
          Blog
        </h1>
        <p className="text-[15.5px] leading-[1.7] text-ink-muted">
          Practical notes on hybrid cloud administration, identity and access
          management, endpoint operations, and compliance.
        </p>
      </header>

      <BlogExplorer posts={posts} allTags={allTags} pageSize={10} />
    </div>
  );
}
