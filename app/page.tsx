import { GridTile } from "@/components/GridTile";
import { studioSections } from "@/data/sections";

export default function Home() {
  return (
    <main className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[var(--page-bg)] p-3 sm:p-4 md:p-5">
      <div
        className="border border-[rgba(70,55,42,0.28)] bg-[rgba(245,236,215,0.95)] p-2 shadow-[0_26px_90px_rgba(93,69,48,0.12)] md:p-3"
        style={{
          width: "min(calc(100vw - 1.5rem), calc((100dvh - 1.5rem) * 1.42))",
        }}
      >
        <div className="grid aspect-[1.42/1] grid-cols-3 grid-rows-3 gap-[6px] md:gap-[8px]">
          {studioSections.map((section) => (
            <GridTile key={section.id} section={section} />
          ))}
        </div>
      </div>
    </main>
  );
}
