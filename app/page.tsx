import { GridTile } from "@/components/GridTile";
import { studioSections } from "@/data/sections";

export default function Home() {
  return (
    <main className="h-[100dvh] w-screen overflow-hidden bg-[var(--page-bg)]">
      <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-[2px] bg-[rgba(59,46,35,0.72)] sm:gap-[3px]">
        {studioSections.map((section) => (
          <GridTile key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
}
