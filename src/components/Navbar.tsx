import React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-5 sm:px-6">
        <Link
          href="/"
          className="text-sm sm:text-base font-semibold tracking-tight text-ink hover:text-accent transition-colors"
        >
          {siteConfig.shortName}
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 sm:gap-2"
        >
          <Link
            href="/blog"
            className="rounded-md px-2.5 py-1.5 text-sm font-medium text-ink-muted hover:text-accent transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="rounded-md px-2.5 py-1.5 text-sm font-medium text-ink-muted hover:text-accent transition-colors"
          >
            About
          </Link>
          <ThemeToggle />
          <a
            href={siteConfig.author.resumeUrl}
            download={siteConfig.author.resumeFilename}
            className="ml-1 inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs sm:text-sm font-medium text-white dark:text-[#0B1324] hover:bg-accent-hover transition-colors"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Resume</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
