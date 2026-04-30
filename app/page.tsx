import Image from "next/image";
import Link from "next/link";

import { studioSections } from "@/data/sections";

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden bg-[#f4ecd7] text-[var(--ink)]">
      <Image
        src="/landing-six-panels.png"
        alt="ESTRO six-panel landing illustration"
        fill
        priority
        sizes="100vw"
        className="object-fill"
      />

      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
        {studioSections.map((section) => (
          <Link
            key={section.id}
            href={`/${section.slug}`}
            aria-label={section.title}
            className="group relative block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(90,63,41,0.55)] focus-visible:ring-inset"
          >
            <div className="absolute inset-0 transition-colors duration-150 md:group-hover:bg-[rgba(18,14,11,0.22)]" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <span className="rounded-full bg-[rgba(245,239,228,0.82)] px-4 py-2 text-center font-serif text-[clamp(1.05rem,2.2vw,2.2rem)] leading-none tracking-[-0.04em] text-[rgba(38,28,20,0.96)] opacity-100 shadow-[0_8px_22px_rgba(40,28,18,0.12)] transition duration-150 md:scale-[0.98] md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100">
                {section.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
