type PlaceholderWorldProps = {
  variant: number;
  title: string;
};

type ScenePalette = {
  ceiling: string;
  leftWall: string;
  backWall: string;
  rightWall: string;
  floor: string;
};

const palettes: ScenePalette[] = [
  {
    ceiling: "#e57c45",
    leftWall: "#9a7d60",
    backWall: "#ddd0bc",
    rightWall: "#2d8fd2",
    floor: "#d8cdb9",
  },
  {
    ceiling: "#f0d6a5",
    leftWall: "#8fd76d",
    backWall: "#b4936f",
    rightWall: "#d2b28e",
    floor: "#d9c9b6",
  },
  {
    ceiling: "#4e443e",
    leftWall: "#a7df73",
    backWall: "#8bd8ef",
    rightWall: "#8ad760",
    floor: "#d8cfbe",
  },
  {
    ceiling: "#f2cf4b",
    leftWall: "#65554c",
    backWall: "#705f55",
    rightWall: "#f2d89d",
    floor: "#d4c4af",
  },
  {
    ceiling: "#9fe2ef",
    leftWall: "#e7d2b8",
    backWall: "#8dd77e",
    rightWall: "#9fe2ef",
    floor: "#efe2ce",
  },
  {
    ceiling: "#e5844f",
    leftWall: "#5d5149",
    backWall: "#2f95d2",
    rightWall: "#8b6f54",
    floor: "#d8cbb8",
  },
  {
    ceiling: "#e9864e",
    leftWall: "#2e93d6",
    backWall: "#9adff0",
    rightWall: "#f1cd4b",
    floor: "#d7cab6",
  },
  {
    ceiling: "#eb8854",
    leftWall: "#f1cf4b",
    backWall: "#d7d1c6",
    rightWall: "#2f8fd2",
    floor: "#d8cdb9",
  },
  {
    ceiling: "#f0cf49",
    leftWall: "#8b6d4e",
    backWall: "#d5cab8",
    rightWall: "#e88d54",
    floor: "#d7c8b2",
  },
];

export function PlaceholderWorld({ variant, title }: PlaceholderWorldProps) {
  const palette = palettes[(variant - 1) % palettes.length];

  return (
    <div
      aria-hidden="true"
      className="relative h-full w-full overflow-hidden rounded-[0.2rem] border border-[rgba(58,45,34,0.55)] bg-[#efe3cc]"
    >
      <RoomScene palette={palette} />
      <SceneDecor variant={variant} />
      {title ? (
        <div className="absolute right-[0.5rem] top-[0.45rem] hidden font-mono text-[0.52rem] uppercase tracking-[0.16em] text-[rgba(48,35,24,0.34)] md:block">
          {title}
        </div>
      ) : null}
    </div>
  );
}

function RoomScene({ palette }: { palette: ScenePalette }) {
  return (
    <>
      <div
        className="absolute inset-x-0 top-0 h-[19%] border-b border-[rgba(58,45,34,0.55)]"
        style={{ backgroundColor: palette.ceiling }}
      />
      <div
        className="absolute bottom-0 left-0 h-[81%] w-[16%] border-r border-[rgba(58,45,34,0.55)]"
        style={{ backgroundColor: palette.leftWall }}
      />
      <div
        className="absolute bottom-0 right-0 h-[81%] w-[18%] border-l border-[rgba(58,45,34,0.55)]"
        style={{ backgroundColor: palette.rightWall }}
      />
      <div
        className="absolute inset-x-[16%] bottom-[26%] top-[19%] border-x border-[rgba(58,45,34,0.55)] border-b border-[rgba(58,45,34,0.55)]"
        style={{ backgroundColor: palette.backWall }}
      />
      <div
        className="absolute inset-x-[16%] bottom-0 h-[26%] border-t border-[rgba(58,45,34,0.55)]"
        style={{ backgroundColor: palette.floor }}
      />
      <div className="absolute left-[16%] top-[19%] h-0 w-0 border-b-[24px] border-r-[34px] border-b-transparent border-r-[rgba(58,45,34,0.42)]" />
      <div className="absolute right-[18%] top-[19%] h-0 w-0 border-b-[24px] border-l-[34px] border-b-transparent border-l-[rgba(58,45,34,0.42)]" />
    </>
  );
}

function SceneDecor({ variant }: { variant: number }) {
  switch (variant) {
    case 1:
      return (
        <>
          <Staircase className="left-[47%] top-[11%] w-[26%] rotate-[36deg]" steps={9} color="#98d9ff" />
          <Pool className="left-[18%] top-[34%] w-[28%] h-[24%]" />
          <Plant className="left-[8%] bottom-[7%]" />
          <Cat className="right-[11%] bottom-[11%]" />
          <Lamp className="left-1/2 top-[5%]" />
        </>
      );
    case 2:
      return (
        <>
          <OvalCutout className="left-[22%] top-[16%] w-[36%] h-[16%]" />
          <Pyramid className="left-[40%] top-[26%]" />
          <Droplets />
          <Capsule className="left-[4%] top-[22%] h-[42%] w-[5%]" />
          <ArchWindow className="right-[10%] bottom-[14%] h-[28%] w-[5%]" />
        </>
      );
    case 3:
      return (
        <>
          <OvalCutout className="left-[18%] top-[13%] w-[34%] h-[11%]" />
          <Staircase className="right-[8%] top-[3%] w-[18%] rotate-[142deg]" steps={6} color="#6fb657" />
          <Bonsai className="left-[8%] bottom-[7%]" />
          <Pedestal className="right-[10%] bottom-[10%]" />
          <SteamCup className="right-[14%] bottom-[31%]" />
        </>
      );
    case 4:
      return (
        <>
          <OvalCutout className="left-[6%] top-[6%] w-[22%] h-[46%]" vertical />
          <Staircase className="left-[2%] top-[14%] w-[22%] rotate-[208deg]" steps={6} color="#9ddcff" />
          <Table className="left-[30%] bottom-[16%]" />
          <FrameArt className="left-[38%] top-[38%]" />
        </>
      );
    case 5:
      return (
        <>
          <ArchDoor className="left-[20%] bottom-[23%] h-[42%] w-[8%]" />
          <ArchDoor className="right-[22%] bottom-[23%] h-[42%] w-[8%]" />
          <CorridorPanel />
        </>
      );
    case 6:
      return (
        <>
          <Pool className="left-[45%] bottom-[11%] w-[22%] h-[12%]" />
          <Staircase className="right-[2%] top-[44%] w-[22%] rotate-[148deg]" steps={7} color="#8ecf61" />
          <FrameArt className="right-[23%] top-[33%]" />
          <SmallFruit className="left-[20%] bottom-[16%]" />
          <ArchDoor className="right-[9%] bottom-[23%] h-[40%] w-[8%]" />
        </>
      );
    case 7:
      return (
        <>
          <WaveBand />
          <Pool className="left-[40%] bottom-[7%] w-[28%] h-[17%]" />
          <WindowGrid className="left-[14%] top-[22%]" />
          <Lights className="right-[13%] top-[12%]" />
        </>
      );
    case 8:
      return (
        <>
          <Plant className="left-[13%] bottom-[8%] scale-[1.2]" />
          <Rock className="left-[42%] bottom-[11%]" />
          <Capsule className="right-[7%] top-[28%] h-[34%] w-[5%]" />
          <BenchBook className="right-[18%] bottom-[10%]" />
          <Lights className="left-[38%] top-[11%]" />
        </>
      );
    case 9:
      return (
        <>
          <Staircase className="left-[26%] top-[33%] w-[36%] rotate-[320deg]" steps={10} color="#8bc35c" />
          <ArchDoor className="left-[52%] bottom-[11%] h-[42%] w-[18%]" />
          <Bench className="left-[57%] bottom-[17%]" />
          <Plant className="right-[7%] bottom-[6%] scale-[0.95]" />
          <ArrowMark className="right-[6%] top-[46%]" />
          <Lights className="left-[10%] top-[11%]" />
        </>
      );
    default:
      return null;
  }
}

function Staircase({
  className,
  steps,
  color,
}: {
  className: string;
  steps: number;
  color: string;
}) {
  return (
    <div className={`absolute flex items-end gap-[2px] ${className}`}>
      {Array.from({ length: steps }).map((_, index) => (
        <span
          key={index}
          className="block border border-[rgba(46,38,31,0.5)]"
          style={{
            width: "8%",
            height: `${22 + index * 7}%`,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}

function Pool({ className }: { className: string }) {
  return (
    <div
      className={`absolute overflow-hidden rounded-[999px] border border-[rgba(46,38,31,0.56)] bg-[#111] ${className}`}
    >
      <div className="absolute inset-x-[10%] bottom-0 h-[55%] bg-[#2e8fd2]" />
    </div>
  );
}

function Plant({ className }: { className: string }) {
  return (
    <div className={`absolute h-[23%] w-[16%] ${className}`}>
      <div className="absolute bottom-0 left-[28%] h-[24%] w-[44%] rounded-[0.2rem] border border-[rgba(50,38,29,0.45)] bg-[#d29b5d]" />
      <span className="absolute bottom-[18%] left-[48%] h-[46%] w-[2px] -translate-x-1/2 bg-[#385033]" />
      <span className="absolute bottom-[33%] left-[47%] h-[34%] w-[26%] rounded-[100%_0_100%_0] border border-[rgba(50,38,29,0.42)] bg-[#96c95f] -rotate-[48deg]" />
      <span className="absolute bottom-[36%] left-[28%] h-[30%] w-[24%] rounded-[100%_0_100%_0] border border-[rgba(50,38,29,0.42)] bg-[#7db64d] rotate-[22deg]" />
      <span className="absolute bottom-[40%] left-[56%] h-[30%] w-[22%] rounded-[100%_0_100%_0] border border-[rgba(50,38,29,0.42)] bg-[#7db64d] rotate-[56deg]" />
    </div>
  );
}

function Cat({ className }: { className: string }) {
  return (
    <div className={`absolute h-[16%] w-[8%] ${className}`}>
      <div className="absolute bottom-0 left-[26%] h-[52%] w-[48%] rounded-[60%_60%_45%_45%] border border-[rgba(50,38,29,0.4)] bg-[#f7f1de]" />
      <div className="absolute bottom-[44%] left-[34%] h-[26%] w-[30%] rounded-full border border-[rgba(50,38,29,0.4)] bg-[#f7f1de]" />
      <span className="absolute bottom-[61%] left-[34%] h-[16%] w-[12%] rotate-[-12deg] border border-[rgba(50,38,29,0.4)] bg-[#f7f1de]" />
      <span className="absolute bottom-[61%] right-[23%] h-[16%] w-[12%] rotate-[16deg] border border-[rgba(50,38,29,0.4)] bg-[#f7f1de]" />
    </div>
  );
}

function Lamp({ className }: { className: string }) {
  return (
    <div className={`absolute h-[18%] w-[4%] -translate-x-1/2 ${className}`}>
      <div className="absolute top-0 left-1/2 h-[62%] w-[1px] -translate-x-1/2 bg-[rgba(52,38,29,0.85)]" />
      <div className="absolute bottom-[18%] left-1/2 h-[18%] w-[40%] -translate-x-1/2 rounded-b-full border border-[rgba(52,38,29,0.72)] bg-[#f4c962]" />
    </div>
  );
}

function OvalCutout({
  className,
  vertical = false,
}: {
  className: string;
  vertical?: boolean;
}) {
  return (
    <div
      className={`absolute overflow-hidden border border-[rgba(45,36,28,0.62)] bg-[#221d18] ${vertical ? "rounded-[999px]" : "rounded-[999px]"} ${className}`}
    >
      <div
        className={`absolute inset-x-0 bottom-0 ${vertical ? "h-[28%]" : "h-[22%]"} bg-[#2f8fd2]`}
      />
    </div>
  );
}

function Pyramid({ className }: { className: string }) {
  return (
    <div className={`absolute h-[52%] w-[24%] ${className}`}>
      <div className="absolute inset-0 [clip-path:polygon(50%_0,0_100%,100%_100%)] border border-[rgba(50,39,31,0.56)] bg-[#f1ce35]" />
      <div className="absolute bottom-0 left-[44%] h-[44%] w-[16%] [clip-path:polygon(50%_0,0_100%,100%_100%)] bg-[#121212]" />
    </div>
  );
}

function Droplets() {
  const drops = [
    "left-[41%] top-[18%]",
    "left-[31%] top-[37%]",
    "left-[47%] top-[44%]",
    "left-[58%] top-[25%]",
    "left-[64%] top-[50%]",
    "left-[23%] top-[46%]",
  ];

  return (
    <>
      {drops.map((position) => (
        <span
          key={position}
          className={`absolute h-[4%] w-[2.2%] rounded-b-full rounded-t-[80%] border border-[rgba(46,38,31,0.45)] bg-[#88d8ef] ${position}`}
        />
      ))}
    </>
  );
}

function Capsule({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-[999px] border border-[rgba(46,38,31,0.5)] bg-[#2f8fd2] ${className}`}
    />
  );
}

function ArchWindow({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-t-full border border-[rgba(46,38,31,0.5)] bg-[#e8cfb2] ${className}`}
    />
  );
}

function Bonsai({ className }: { className: string }) {
  return (
    <div className={`absolute h-[36%] w-[25%] ${className}`}>
      <div className="absolute bottom-0 left-[32%] h-[20%] w-[34%] rounded-[0.2rem] border border-[rgba(46,38,31,0.45)] bg-[#9e7559]" />
      <span className="absolute bottom-[16%] left-[46%] h-[34%] w-[2px] bg-[#415439]" />
      {["left-[13%] bottom-[36%]", "left-[33%] bottom-[44%]", "left-[49%] bottom-[34%]", "left-[35%] bottom-[25%]"].map((pos) => (
        <span
          key={pos}
          className={`absolute h-[16%] w-[30%] rounded-[999px] border border-[rgba(46,38,31,0.45)] bg-[#8cc85d] ${pos}`}
        />
      ))}
    </div>
  );
}

function Pedestal({ className }: { className: string }) {
  return (
    <div className={`absolute h-[26%] w-[14%] ${className}`}>
      <div className="absolute bottom-0 h-full w-full border border-[rgba(46,38,31,0.5)] bg-[#d0c3b3]" />
      <div className="absolute left-[23%] top-[18%] h-[18%] w-[52%] rounded-full border border-[rgba(46,38,31,0.5)] bg-[#f7f1de]" />
    </div>
  );
}

function SteamCup({ className }: { className: string }) {
  return (
    <div className={`absolute h-[12%] w-[8%] ${className}`}>
      <div className="absolute bottom-0 left-0 h-[60%] w-[70%] rounded-[0.15rem] border border-[rgba(46,38,31,0.45)] bg-[#f6efe1]" />
      <div className="absolute bottom-[14%] right-0 h-[32%] w-[30%] rounded-r-full border border-[rgba(46,38,31,0.45)]" />
      <span className="absolute left-[22%] top-0 h-[34%] w-[1px] rotate-[18deg] bg-[rgba(58,45,34,0.65)]" />
      <span className="absolute left-[40%] top-0 h-[30%] w-[1px] -rotate-[10deg] bg-[rgba(58,45,34,0.65)]" />
    </div>
  );
}

function Table({ className }: { className: string }) {
  return (
    <div className={`absolute h-[19%] w-[38%] ${className}`}>
      <div className="absolute top-[18%] inset-x-0 h-[18%] border border-[rgba(46,38,31,0.5)] bg-[#cfbea8]" />
      <div className="absolute left-[10%] top-[34%] h-[56%] w-[2px] bg-[rgba(46,38,31,0.62)]" />
      <div className="absolute right-[10%] top-[34%] h-[56%] w-[2px] bg-[rgba(46,38,31,0.62)]" />
      <div className="absolute left-[28%] top-[34%] h-[56%] w-[2px] bg-[rgba(46,38,31,0.62)]" />
      <div className="absolute right-[28%] top-[34%] h-[56%] w-[2px] bg-[rgba(46,38,31,0.62)]" />
      <span className="absolute left-[43%] top-[7%] h-[14%] w-[10%] rounded-full border border-[rgba(46,38,31,0.42)] bg-[#f7f1de]" />
    </div>
  );
}

function FrameArt({ className }: { className: string }) {
  return (
    <div className={`absolute h-[20%] w-[10%] border border-[rgba(46,38,31,0.52)] bg-[#f6d387] p-[2px] ${className}`}>
      <div className="relative h-full w-full border border-[rgba(46,38,31,0.35)] bg-[#7ec25c]">
        <span className="absolute left-[22%] top-[18%] h-[28%] w-[48%] rounded-full bg-[#2a1f18]" />
        <span className="absolute left-[34%] bottom-[18%] h-[24%] w-[24%] rounded-[0.1rem] bg-[#e8864d]" />
      </div>
    </div>
  );
}

function ArchDoor({ className }: { className: string }) {
  return (
    <div className={`absolute rounded-t-full border border-[rgba(46,38,31,0.58)] bg-[#1c1a18] ${className}`} />
  );
}

function CorridorPanel() {
  return (
    <>
      <div className="absolute inset-x-[29%] bottom-[18%] top-[22%] border border-[rgba(46,38,31,0.55)] bg-[#97d36d]" />
      <div className="absolute left-[48%] top-[22%] h-[60%] w-[1px] bg-[rgba(46,38,31,0.55)]" />
      <div className="absolute left-[34%] top-[23%] text-[4.3rem] leading-none font-serif tracking-[0.3em] text-[rgba(15,14,14,0.9)]">
        E
      </div>
    </>
  );
}

function SmallFruit({ className }: { className: string }) {
  return (
    <div className={`absolute h-[8%] w-[6%] ${className}`}>
      <div className="absolute inset-0 rounded-full border border-[rgba(46,38,31,0.45)] bg-[#ee9b34]" />
      <span className="absolute left-[48%] -top-[16%] h-[24%] w-[1px] bg-[rgba(46,38,31,0.62)]" />
    </div>
  );
}

function WaveBand() {
  return (
    <>
      <div className="absolute inset-x-0 top-[22%] h-[24%] bg-[#ed8750]" />
      <div className="absolute inset-x-0 top-[38%] h-[24%] bg-[#95def0]" />
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[#2f8fd2]" />
      <div className="absolute left-[-10%] top-[34%] h-[28%] w-[140%] rotate-[8deg] border-t border-[rgba(46,38,31,0.5)] bg-transparent" />
    </>
  );
}

function WindowGrid({ className }: { className: string }) {
  return (
    <div className={`absolute grid h-[18%] w-[12%] grid-cols-3 gap-[1px] border border-[rgba(46,38,31,0.5)] bg-[#d3c3ac] p-[2px] ${className}`}>
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} className="bg-[rgba(70,55,43,0.25)]" />
      ))}
    </div>
  );
}

function Lights({ className }: { className: string }) {
  return (
    <div className={`absolute flex gap-[7px] ${className}`}>
      {[0, 1, 2].map((item) => (
        <span key={item} className="relative block h-[18px] w-[14px]">
          <span className="absolute left-1/2 top-0 h-[8px] w-[1px] -translate-x-1/2 bg-[rgba(46,38,31,0.7)]" />
          <span className="absolute bottom-0 left-1/2 h-[10px] w-[10px] -translate-x-1/2 rounded-full border border-[rgba(46,38,31,0.45)] bg-[#f2d14d]" />
        </span>
      ))}
    </div>
  );
}

function Rock({ className }: { className: string }) {
  return (
    <div className={`absolute h-[30%] w-[28%] ${className}`}>
      <div className="absolute inset-0 border border-[rgba(46,38,31,0.5)] bg-[#b8ae9c] [clip-path:polygon(10%_100%,0_52%,12%_18%,28%_0,65%_8%,88%_28%,100%_54%,92%_100%)]" />
    </div>
  );
}

function BenchBook({ className }: { className: string }) {
  return (
    <div className={`absolute h-[10%] w-[14%] ${className}`}>
      <div className="absolute inset-0 rotate-[12deg] border border-[rgba(46,38,31,0.45)] bg-[#efe2bd]" />
      <span className="absolute left-[16%] top-[20%] h-[1px] w-[68%] bg-[rgba(46,38,31,0.3)]" />
    </div>
  );
}

function Bench({ className }: { className: string }) {
  return (
    <div className={`absolute h-[10%] w-[12%] ${className}`}>
      <div className="absolute bottom-0 left-0 h-[18%] w-full bg-[rgba(46,38,31,0.65)]" />
      <div className="absolute bottom-[18%] left-[8%] h-[52%] w-[18%] bg-[rgba(46,38,31,0.65)]" />
    </div>
  );
}

function ArrowMark({ className }: { className: string }) {
  return (
    <div className={`absolute h-[5%] w-[12%] ${className}`}>
      <div className="absolute left-0 top-1/2 h-[1px] w-[80%] -translate-y-1/2 bg-[rgba(46,38,31,0.7)]" />
      <div className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[4px] border-l-[7px] border-y-transparent border-l-[rgba(46,38,31,0.7)]" />
    </div>
  );
}
