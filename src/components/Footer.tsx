import React from "react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-5 py-8 text-sm text-ink-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-medium text-ink">
            {siteConfig.author.name}
          </span>
          <span aria-hidden="true">·</span>
          <span>{siteConfig.author.location}</span>
          <span aria-hidden="true">·</span>
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="text-ink-muted underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent transition-colors"
          >
            {siteConfig.author.email}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.author.resumeUrl}
            download={siteConfig.author.resumeFilename}
            className="text-ink-muted underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent transition-colors"
          >
            Resume (PDF)
          </a>
          <a
            href={siteConfig.author.rssUrl}
            className="text-ink-muted underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent transition-colors"
          >
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
}
