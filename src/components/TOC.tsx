import React from "react";
import { List } from "lucide-react";
import type { TocItem } from "@/lib/schema";

interface TOCProps {
  items: TocItem[];
}

export function TOC({ items }: TOCProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 p-5"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
        <List className="h-4 w-4 text-indigo-500" />
        <span>On this page</span>
      </div>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? "pl-4" : ""}
          >
            <a
              href={`#${item.id}`}
              className="block text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors leading-snug"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
