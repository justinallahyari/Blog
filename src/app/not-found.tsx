import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-16 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
        404
      </p>
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="text-[15.5px] text-ink-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-hover hover:decoration-accent-hover transition-colors"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
