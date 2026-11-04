import React from "react";
import Link from "next/link";
import { Rss, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <img
            src={siteConfig.author.avatar}
            alt={siteConfig.author.name}
            width={34}
            height={34}
            className="h-8 w-8 rounded-full object-cover ring-2 ring-indigo-500/30"
          />
          <span>{siteConfig.shortName}</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Resume &amp; Home
          </Link>
          <Link
            href="/blog"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            About
          </Link>
          <a
            href={siteConfig.author.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-500 transition-colors"
          >
            <FileText className="h-3.5 w-3.5 text-indigo-500" />
            PDF
          </a>
          <Link
            href="/rss.xml"
            aria-label="RSS Feed"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-orange-500 transition-colors"
          >
            <Rss className="h-4 w-4" />
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
