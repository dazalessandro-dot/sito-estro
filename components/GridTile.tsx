import Link from "next/link";

import { PlaceholderWorld } from "@/components/PlaceholderWorld";
import type { StudioSection } from "@/data/sections";

type GridTileProps = {
  section: StudioSection;
};

export function GridTile({ section }: GridTileProps) {
  const label = section.tileTitle;

  return (
    <Link
      href={`/${section.slug}`}
      aria-label={section.title}
      className="group relative block aspect-square min-w-0 overflow-hidden rounded-[1.3rem] border border-[rgba(98,79,61,0.16)] bg-[rgba(255,249,241,0.8)] p-2 shadow-[0_1px_0_rgba(255,255,255,0.5),0_18px_40px_rgba(103,76,54,0.08)] transition-transform duration-150 ease-out hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(110,84,58,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page-bg)]"
    >
      <PlaceholderWorld variant={section.visualVariant} title={section.visualNote} />
      <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-[0.95rem] bg-[linear-gradient(180deg,rgba(43,34,28,0)_0%,rgba(43,34,28,0.1)_38%,rgba(43,34,28,0.72)_100%)] p-3 pt-8">
        <span className="block translate-y-0 font-sans text-[0.68rem] font-medium uppercase tracking-[0.12em] text-[rgba(249,244,236,0.9)] opacity-100 transition duration-150 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          {label || " "}
        </span>
      </div>
    </Link>
  );
}
