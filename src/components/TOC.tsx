import React from "react";
import type { TocItem } from "@/lib/schema";

interface TOCProps {
  items: TocItem[];
}

export function TOC({ items }: TOCProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="border-l-2 border-accent/40 pl-4 py-1"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
        Contents
      </p>
      <ul className="mt-2.5 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
            <a
              href={`#${item.id}`}
              className="text-ink-muted hover:text-accent transition-colors leading-snug"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
