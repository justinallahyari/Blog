import React from "react";
import type { Metadata } from "next";
import { Download } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.author.name} — ${siteConfig.author.headline}.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About — ${siteConfig.shortName}`,
    description: `Background, experience, certifications, and contact information for ${siteConfig.author.name}.`,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-2.5 border-b border-line pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Background
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
          About
        </h1>
        <p className="text-base text-ink-muted">{siteConfig.author.headline}</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-accent">
          Summary
        </h2>
        <p className="text-[16px] leading-[1.75] text-ink-muted">
          {siteConfig.author.summary}
        </p>
      </section>

      <section className="space-y-6 border-t border-line pt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-accent">
          Experience
        </h2>
        <div className="space-y-9">
          {siteConfig.experience.map((job) => (
            <div key={`${job.role}-${job.period}`} className="space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {job.role}
                  </h3>
                  <p className="text-sm font-medium text-ink-subtle">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="text-xs font-medium text-ink-subtle tabular-nums">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-3 text-[15px] leading-[1.7] text-ink-muted">
                {job.highlights.map((item) => (
                  <li key={item.label} className="pl-3.5 border-l-2 border-line">
                    <span className="font-semibold text-ink">
                      {item.label}:
                    </span>{" "}
                    {item.detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
        <div className="space-y-3.5">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-accent">
            Certifications
          </h2>
          <ul className="space-y-3 text-[15px]">
            {siteConfig.certifications.map((cert) => (
              <li key={cert.name}>
                <p className="font-semibold text-ink">{cert.name}</p>
                <p className="text-xs text-ink-subtle tabular-nums mt-0.5">
                  {cert.issuer} ({cert.status}) · {cert.date}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3.5">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-accent">
            Education
          </h2>
          {siteConfig.education.map((edu) => (
            <div key={edu.institution} className="space-y-1.5 text-[15px]">
              <p className="font-semibold text-ink">{edu.degree}</p>
              <p className="text-xs text-ink-subtle">
                {edu.institution} · {edu.location}
              </p>
              <p className="pt-1 text-[15px] leading-[1.7] text-ink-muted">
                <span className="font-semibold text-ink">
                  {edu.detailLabel}:
                </span>{" "}
                {edu.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line pt-8 space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-accent">
          Contact
        </h2>
        <p className="text-[15.5px] leading-[1.75] text-ink-muted">
          Based in {siteConfig.author.location}. Reach out directly by email at{" "}
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-hover hover:decoration-accent-hover transition-colors"
          >
            {siteConfig.author.email}
          </a>{" "}
          or by phone at{" "}
          <a
            href={`tel:${siteConfig.author.phone}`}
            className="font-medium text-ink hover:text-accent transition-colors"
          >
            {siteConfig.author.phone}
          </a>
          .
        </p>
        <div>
          <a
            href={siteConfig.author.resumeUrl}
            download={siteConfig.author.resumeFilename}
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-white dark:text-[#0B1324] hover:bg-accent-hover transition-colors"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}
