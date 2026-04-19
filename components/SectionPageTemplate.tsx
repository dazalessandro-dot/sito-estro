import Link from "next/link";

import { PlaceholderWorld } from "@/components/PlaceholderWorld";
import type { StudioSection } from "@/data/sections";

type SectionPageTemplateProps = {
  section: StudioSection;
};

export function SectionPageTemplate({ section }: SectionPageTemplateProps) {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] px-5 py-5 text-[var(--ink)] md:px-8 md:py-7">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-6xl flex-col gap-8 rounded-[2rem] border border-[rgba(105,82,61,0.14)] bg-[rgba(255,249,241,0.68)] p-5 shadow-[0_24px_80px_rgba(104,76,52,0.08)] backdrop-blur md:min-h-[calc(100vh-3.5rem)] md:p-7">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[var(--muted)] transition-colors duration-150 hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(110,84,58,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(255,249,241,0.8)]"
          >
            Back Home
          </Link>
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--muted)]">
            {section.slug}
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] lg:items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                {section.subtitle}
              </p>
              <h1 className="font-serif text-[clamp(2.8rem,8vw,6rem)] leading-[0.94] tracking-[-0.04em] text-[var(--ink)]">
                {section.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                {section.intro}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="rounded-[1.4rem] border border-[rgba(106,84,62,0.12)] bg-[rgba(255,252,247,0.62)] p-5 text-[0.96rem] leading-7 text-[var(--muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="aspect-[4/4.8] overflow-hidden rounded-[1.7rem] border border-[rgba(106,84,62,0.14)] bg-[rgba(255,250,244,0.8)] p-3 shadow-[0_18px_44px_rgba(106,82,60,0.08)]">
              <PlaceholderWorld
                variant={section.visualVariant}
                title={section.visualNote}
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.25rem] border border-[rgba(106,84,62,0.12)] bg-[rgba(255,252,247,0.62)] p-4">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Placeholder Block
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  This area can later host imagery, captions, project metadata, or a compact list of links.
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-[rgba(106,84,62,0.12)] bg-[rgba(255,252,247,0.62)] p-4">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                  Flexible Module
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Keep this block as a replaceable placeholder for credits, notes, dates, or callouts.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
