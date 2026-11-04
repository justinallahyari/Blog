import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Rss, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 py-12 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left space-y-1.5">
          <p className="text-base font-bold text-slate-900 dark:text-slate-100">
            {siteConfig.author.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-indigo-500" />
              {siteConfig.author.location}
            </span>
            <span>•</span>
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Mail className="h-3.5 w-3.5 text-indigo-500" />
              {siteConfig.author.email}
            </a>
            <span>•</span>
            <a
              href={`tel:${siteConfig.author.phone}`}
              className="inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Phone className="h-3.5 w-3.5 text-indigo-500" />
              {siteConfig.author.phone}
            </a>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.author.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-500 transition-colors"
          >
            <FileText className="h-3.5 w-3.5 text-indigo-500" />
            Resume PDF
          </a>
          <Link
            href={siteConfig.author.rss}
            aria-label="RSS Feed"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400 transition-colors"
          >
            <Rss className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
