import Link from "next/link";

import { PlaceholderWorld } from "@/components/PlaceholderWorld";
import type { StudioSection } from "@/data/sections";

type SectionPageTemplateProps = {
  section: StudioSection;
};

export function SectionPageTemplate({ section }: SectionPageTemplateProps) {
  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden bg-[var(--page-bg)] text-[var(--ink)]">
      <div className="absolute inset-0">
        <PlaceholderWorld variant={section.visualVariant} title="" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,11,0.18)_0%,rgba(18,14,11,0.06)_28%,rgba(18,14,11,0.42)_100%)]" />

      <div className="relative z-10 flex h-full flex-col justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-7">
        <div className="flex items-center justify-between font-mono text-[0.64rem] uppercase tracking-[0.22em] text-[rgba(248,243,232,0.78)]">
          <Link
            href="/"
            className="transition-colors duration-150 hover:text-[rgba(248,243,232,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(255,248,236,0.62)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Home
          </Link>
          <span>{section.slug}</span>
        </div>

        <div className="max-w-[32rem] space-y-3 text-[rgba(248,243,232,0.95)]">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[rgba(248,243,232,0.68)]">
            {section.visualNote}
          </p>
          <h1 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.9] tracking-[-0.06em]">
            {section.title}
          </h1>
          <p className="max-w-[24rem] text-sm leading-6 text-[rgba(248,243,232,0.78)] md:text-base md:leading-7">
            {section.intro}
          </p>
        </div>

        <div className="flex items-end justify-between gap-4 text-[rgba(248,243,232,0.78)]">
          <p className="max-w-[20rem] text-xs uppercase tracking-[0.16em] md:text-sm">
            Placeholder section. Real content can replace this block later.
          </p>
          <p className="hidden font-mono text-[0.58rem] uppercase tracking-[0.22em] md:block">
            ESTRO
          </p>
        </div>
      </div>
    </main>
  );
}
