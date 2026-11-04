import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, FileText, Briefcase, Award, GraduationCap, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.author.name} — Help Desk Technician at Toray Advanced Composites and Management Information Systems student at San José State University.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About | ${siteConfig.shortName}`,
    description: `About ${siteConfig.author.name} — background, experience, education, and contact information.`,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      {/* Profile Header */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
        <img
          src={siteConfig.author.avatar}
          alt={siteConfig.author.name}
          width={104}
          height={104}
          className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl object-cover ring-4 ring-indigo-500/20 shadow-md"
        />
        <div className="space-y-2.5">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {siteConfig.author.name}
          </h1>
          <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
            {siteConfig.author.role}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-indigo-500" />
              {siteConfig.author.location}
            </span>
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="inline-flex items-center gap-1 hover:text-indigo-500 transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-indigo-500" />
              {siteConfig.author.email}
            </a>
            <a
              href={`tel:${siteConfig.author.phone}`}
              className="inline-flex items-center gap-1 hover:text-indigo-500 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-indigo-500" />
              {siteConfig.author.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Profile
        </h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          I&apos;m currently balancing full-time Business Management studies (Management Information Systems) at <strong>San José State University</strong> with a role as a <strong>Help Desk Technician at Toray Advanced Composites</strong>. In this role, I get hands-on with technical support and introduce new technologies to keep enterprise environments running smoothly and efficiently.
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Alongside that, I&apos;ve worked on IT projects ranging from small to medium deployments. This involves keeping track of tasks and deadlines, staying in touch with stakeholders and vendors, developing and architecting different parts, and working with team members for final integration and user training.
        </p>
        <div className="pt-2">
          <Link
            href="/blog/hello-im-justin-allahyari"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Read my full introduction blog post
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-indigo-500" />
          Experience Timeline
        </h2>
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-8 pl-6">
          {siteConfig.experience.map((item) => (
            <div key={item.period} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-indigo-600 bg-white dark:bg-slate-950" />
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {item.period} · {item.location}
              </span>
              <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                {item.role} ·{" "}
                <span className="font-medium text-slate-600 dark:text-slate-400">
                  {item.company}
                </span>
              </h3>
              <div className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {item.sections.map((s) => (
                  <div key={s.heading}>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {s.heading}:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      {s.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-indigo-500" />
            Education
          </h2>
          {siteConfig.education.map((edu) => (
            <div key={edu.institution} className="text-sm space-y-0.5">
              <p className="font-bold text-slate-900 dark:text-white">
                {edu.institution}
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-xs">
                {edu.degree}
              </p>
              <p className="text-xs text-indigo-600 dark:text-indigo-400">
                {edu.period}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="h-4 w-4 text-indigo-500" />
            Certifications
          </h2>
          {siteConfig.certificates.map((cert) => (
            <div key={cert.name} className="text-sm space-y-0.5">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {cert.name} ↗
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {cert.issuer} · Issued {cert.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Callout */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 p-6 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Feel free to reach out via email or phone, or download a copy of my resume:
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${siteConfig.author.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
          >
            <Mail className="h-4 w-4" />
            Email Justin
          </a>
          <a
            href={`tel:${siteConfig.author.phone}`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-500 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.author.phone}
          </a>
          <a
            href={siteConfig.author.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-500 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Download Resume PDF
          </a>
        </div>
      </section>
    </div>
  );
}
