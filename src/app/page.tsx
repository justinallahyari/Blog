import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Award,
  Sparkles,
  Wrench,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-20">
      {/* Modern Hero Section Modeled After Justin's Resume */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-gradient-to-br from-slate-50 via-white to-indigo-50/50 dark:from-slate-900/90 dark:via-slate-950 dark:to-indigo-950/30 p-8 sm:p-12 shadow-sm">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-5 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{siteConfig.author.subtitle}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {siteConfig.author.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                {siteConfig.author.role}
              </p>
            </div>

            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {siteConfig.author.bio}
            </p>

            {/* Contact Info Pills from Resume */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 px-3 py-1.5 font-medium">
                <MapPin className="h-4 w-4 text-indigo-500" />
                {siteConfig.author.location}
              </span>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 px-3 py-1.5 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-indigo-500" />
                {siteConfig.author.email}
              </a>
              <a
                href={`tel:${siteConfig.author.phone}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 px-3 py-1.5 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-indigo-500" />
                {siteConfig.author.phone}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={siteConfig.author.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                <FileText className="h-4 w-4" />
                View Full Resume (PDF)
              </a>
              <Link
                href="/blog/hello-im-justin-allahyari"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-500 transition-colors"
              >
                Read My Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Resume Portrait */}
          <div className="shrink-0 self-center md:self-auto">
            <div className="relative rounded-3xl p-1.5 bg-gradient-to-tr from-indigo-500 via-cyan-500 to-emerald-400 shadow-xl">
              <img
                src={siteConfig.author.avatar}
                alt={siteConfig.author.name}
                width={176}
                height={176}
                className="h-36 w-36 sm:h-44 sm:w-44 rounded-2xl object-cover bg-slate-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Post Section */}
      <section aria-labelledby="featured-post-heading" className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Sparkles className="h-4 w-4" />
            </span>
            <h2
              id="featured-post-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Featured Post
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View blog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} featured />
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section aria-labelledby="experience-heading" className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Briefcase className="h-5 w-5" />
          </span>
          <div>
            <h2
              id="experience-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Work Experience
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Enterprise IT support, systems architecture, and DoD compliance
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {siteConfig.experience.map((job) => (
            <div
              key={`${job.role}-${job.period}`}
              className="rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/50 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {job.company} ·{" "}
                    <span className="font-normal text-slate-500 dark:text-slate-400">
                      {job.location}
                    </span>
                  </p>
                </div>
                <span className="inline-flex items-center self-start sm:self-center rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {job.period}
                </span>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {job.sections.map((sec) => (
                  <div
                    key={sec.heading}
                    className="rounded-xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/70 p-4 space-y-2.5"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {sec.heading}
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {sec.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Projects Section */}
      <section aria-labelledby="projects-heading" className="space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <FolderGit2 className="h-5 w-5" />
          </span>
          <div>
            <h2
              id="projects-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Projects &amp; System Deployments
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              End-to-end cloud tenant migrations, SSO rollouts, and database architecture
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-slate-900/50 p-6 shadow-sm hover:border-indigo-500/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {project.role}
                  </span>
                  <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                    {project.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {project.summary}
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {project.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/70">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications Grid */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Education (7 cols) */}
        <section
          aria-labelledby="education-heading"
          className="lg:col-span-7 space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h2
              id="education-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Education
            </h2>
          </div>

          <div className="space-y-4">
            {siteConfig.education.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                    {edu.institution}
                  </span>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                {edu.bullets.length > 0 && (
                  <ul className="space-y-1.5 pt-1 text-sm text-slate-600 dark:text-slate-300">
                    {edu.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications (5 cols) */}
        <section
          aria-labelledby="certifications-heading"
          className="lg:col-span-5 space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Award className="h-5 w-5" />
            </span>
            <h2
              id="certifications-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Certificates
            </h2>
          </div>

          <div className="space-y-4">
            {siteConfig.certificates.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 hover:border-indigo-500 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    {cert.issuer}
                  </span>
                  <span>Issued {cert.date}</span>
                </div>
                <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-between gap-2">
                  <span>{cert.name}</span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-indigo-500" />
                </h3>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Click to verify official Credly badge →
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Skills & Strengths Section */}
      <section aria-labelledby="skills-heading" className="space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Wrench className="h-5 w-5" />
          </span>
          <div>
            <h2
              id="skills-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Skills &amp; Core Strengths
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Technical capabilities and leadership competencies
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Technical &amp; Enterprise Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4">
              Core Strengths
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.strengths.map((str) => (
                <span
                  key={str}
                  className="rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300"
                >
                  {str}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
