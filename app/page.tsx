import { GridTile } from "@/components/GridTile";
import { studioSections } from "@/data/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--page-bg)] px-4 py-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[1100px] rounded-[1.9rem] border border-[rgba(102,80,60,0.16)] bg-[rgba(251,245,236,0.74)] p-3 shadow-[0_30px_90px_rgba(104,76,52,0.08)] backdrop-blur md:p-4">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {studioSections.map((section) => (
            <GridTile key={section.id} section={section} />
          ))}
        </div>
      </div>
    </main>
  );
}
