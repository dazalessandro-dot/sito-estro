import { GridTile } from "@/components/GridTile";
import { studioSections } from "@/data/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--page-bg)] px-4 py-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[1220px] border border-[rgba(70,55,42,0.28)] bg-[rgba(245,236,215,0.95)] p-2 shadow-[0_26px_90px_rgba(93,69,48,0.12)] md:p-3">
        <div className="grid grid-cols-3 gap-[6px] md:gap-[8px]">
          {studioSections.map((section) => (
            <GridTile key={section.id} section={section} />
          ))}
        </div>
      </div>
    </main>
  );
}
