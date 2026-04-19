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
      className="group relative block aspect-[1.14/1] min-w-0 overflow-hidden rounded-[0.18rem] border border-[rgba(59,46,35,0.55)] bg-[#efe3cc] shadow-[0_1px_0_rgba(255,255,255,0.45)] transition-[transform,filter] duration-150 ease-out hover:-translate-y-[1px] hover:brightness-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(110,84,58,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page-bg)]"
    >
      <PlaceholderWorld variant={section.visualVariant} title={section.visualNote} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(21,16,13,0)_0%,rgba(21,16,13,0.12)_46%,rgba(21,16,13,0.78)_100%)] px-3 pb-2 pt-7">
        <span className="block translate-y-0 font-sans text-[0.58rem] font-medium uppercase tracking-[0.16em] text-[rgba(250,245,236,0.94)] opacity-100 transition duration-150 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          {label || " "}
        </span>
      </div>
    </Link>
  );
}
