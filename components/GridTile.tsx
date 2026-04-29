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
      className="group relative block h-full min-w-0 overflow-hidden bg-[#efe3cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(110,84,58,0.55)] focus-visible:ring-inset"
    >
      <PlaceholderWorld variant={section.visualVariant} title={section.visualNote} />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[rgba(20,16,13,0.34)] transition-opacity duration-150 md:opacity-0 md:group-hover:opacity-100">
        <span className="px-4 text-center font-serif text-[clamp(1.35rem,2.8vw,2.6rem)] leading-none tracking-[-0.05em] text-[rgba(247,241,230,0.96)]">
          {label}
        </span>
      </div>
    </Link>
  );
}
