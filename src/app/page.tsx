import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-16">
      {/* Grounded Introduction */}
      <section className="space-y-5">
        <div className="space-y-2.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            {siteConfig.author.location}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            {siteConfig.author.name}
          </h1>
          <p className="text-base sm:text-lg font-medium text-ink-muted">
            {siteConfig.author.headline}
          </p>
        </div>

        <p className="text-[16px] leading-[1.75] text-ink-muted">
          {siteConfig.author.summary}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-1 text-sm text-ink-subtle">
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-hover hover:decoration-accent-hover transition-colors"
          >
            {siteConfig.author.email}
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={`tel:${siteConfig.author.phone}`}
            className="text-ink-muted hover:text-accent transition-colors"
          >
            {siteConfig.author.phone}
          </a>
        </div>
      </section>

      {/* Writing / Blog Posts */}
      <section
        aria-labelledby="writing-heading"
        className="border-t border-line pt-10 space-y-6"
      >
        <div className="flex items-baseline justify-between">
          <h2
            id="writing-heading"
            className="text-xs font-semibold uppercase tracking-wider text-accent"
          >
            Writing
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-hover hover:decoration-accent-hover transition-colors"
          >
            All posts
          </Link>
        </div>

        <div className="divide-y divide-line">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Technical Skills — strictly from resume */}
      <section
        aria-labelledby="skills-heading"
        className="border-t border-line pt-10 space-y-6"
      >
        <h2
          id="skills-heading"
          className="text-xs font-semibold uppercase tracking-wider text-accent"
        >
          Technical Skills
        </h2>

        <dl className="space-y-6">
          {siteConfig.skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-1.5 sm:grid-cols-12 sm:gap-5"
            >
              <dt className="sm:col-span-4 text-[15px] font-semibold text-ink">
                {group.category}
              </dt>
              <dd className="sm:col-span-8 text-[15px] leading-[1.75] text-ink-muted">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Professional Experience */}
      <section
        aria-labelledby="experience-heading"
        className="border-t border-line pt-10 space-y-8"
      >
        <h2
          id="experience-heading"
          className="text-xs font-semibold uppercase tracking-wider text-accent"
        >
          Experience
        </h2>

        <div className="space-y-10">
          {siteConfig.experience.map((job) => (
            <div key={`${job.role}-${job.period}`} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {job.role}
                  </h3>
                  <p className="text-sm font-medium text-ink-subtle">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="text-xs font-medium text-ink-subtle tabular-nums shrink-0">
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

      {/* Technical Projects, Certifications & Education */}
      <section
        aria-labelledby="credentials-heading"
        className="border-t border-line pt-10 space-y-10"
      >
        <h2 id="credentials-heading" className="sr-only">
          Projects, Certifications, and Education
        </h2>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
            Technical Projects
          </h3>
          {siteConfig.projects.map((project) => (
            <div key={project.title} className="space-y-1.5">
              <p className="text-[15.5px] font-semibold text-ink">
                {project.title}{" "}
                <span className="font-normal text-ink-subtle">
                  · {project.role}
                </span>
              </p>
              <p className="text-[15px] leading-[1.75] text-ink-muted">
                {project.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Certifications
            </h3>
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
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Education
            </h3>
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
        </div>
      </section>
    </div>
  );
}
