type PlaceholderWorldProps = {
  variant: number;
  title: string;
};

const worldClasses = [
  "before:absolute before:inset-x-[18%] before:top-[14%] before:h-[22%] before:rounded-full before:bg-[rgba(245,231,208,0.78)] before:content-[''] after:absolute after:bottom-[16%] after:left-[14%] after:h-[26%] after:w-[44%] after:rounded-[1.4rem] after:border after:border-[rgba(91,72,54,0.18)] after:bg-[rgba(176,140,111,0.18)] after:content-['']",
  "before:absolute before:right-[14%] before:top-[16%] before:h-[48%] before:w-[24%] before:rounded-full before:bg-[rgba(143,102,74,0.14)] before:content-[''] after:absolute after:bottom-[12%] after:left-[15%] after:h-[30%] after:w-[54%] after:rounded-[999px] after:bg-[rgba(241,223,196,0.7)] after:content-['']",
  "before:absolute before:left-[14%] before:top-[18%] before:h-[56%] before:w-[34%] before:rounded-[1.5rem] before:border before:border-[rgba(102,81,63,0.16)] before:bg-[rgba(232,219,199,0.68)] before:content-[''] after:absolute after:right-[15%] after:top-[28%] after:h-[18%] after:w-[28%] after:rounded-full after:bg-[rgba(162,124,96,0.18)] after:content-['']",
  "before:absolute before:inset-x-[10%] before:top-[22%] before:h-[1px] before:bg-[rgba(101,78,58,0.22)] before:content-[''] after:absolute after:left-[28%] after:top-[18%] after:h-[48%] after:w-[44%] after:rounded-[50%] after:border after:border-[rgba(108,83,61,0.18)] after:content-['']",
  "before:absolute before:left-[14%] before:top-[16%] before:h-[20%] before:w-[22%] before:rounded-full before:bg-[rgba(241,227,205,0.88)] before:content-[''] after:absolute after:right-[14%] after:bottom-[14%] after:h-[42%] after:w-[30%] after:rounded-[1.2rem] after:bg-[rgba(154,116,87,0.18)] after:content-['']",
  "before:absolute before:left-[18%] before:top-[22%] before:h-[44%] before:w-[1px] before:bg-[rgba(98,76,57,0.2)] before:content-[''] after:absolute after:bottom-[18%] after:right-[18%] after:h-[1px] after:w-[48%] after:bg-[rgba(98,76,57,0.2)] after:content-['']",
  "before:absolute before:right-[16%] before:top-[16%] before:h-[24%] before:w-[24%] before:rounded-[1rem] before:bg-[rgba(235,219,194,0.75)] before:content-[''] after:absolute after:left-[14%] after:bottom-[14%] after:h-[34%] after:w-[34%] after:rounded-full after:border after:border-[rgba(98,75,57,0.16)] after:content-['']",
  "before:absolute before:inset-x-[14%] before:top-[16%] before:h-[60%] before:rounded-[1.5rem] before:border before:border-dashed before:border-[rgba(109,84,62,0.14)] before:content-[''] after:absolute after:left-[22%] after:top-[30%] after:h-[18%] after:w-[18%] after:rounded-full after:bg-[rgba(215,192,164,0.56)] after:content-['']",
  "before:absolute before:left-[18%] before:top-[18%] before:h-[20%] before:w-[52%] before:rounded-[999px] before:bg-[rgba(244,233,214,0.72)] before:content-[''] after:absolute after:right-[16%] after:bottom-[18%] after:h-[24%] after:w-[24%] after:rounded-full after:border after:border-[rgba(95,74,57,0.18)] after:content-['']",
];

export function PlaceholderWorld({ variant, title }: PlaceholderWorldProps) {
  const className = worldClasses[(variant - 1) % worldClasses.length];

  return (
    <div
      aria-hidden="true"
      className={[
        "relative h-full w-full overflow-hidden rounded-[1.1rem]",
        "bg-[linear-gradient(180deg,rgba(247,240,230,0.95),rgba(225,210,191,0.86))]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-[12%] rounded-[1rem] border border-[rgba(93,73,57,0.09)]" />
      <div className="absolute inset-x-[16%] bottom-[22%] h-[1px] bg-[rgba(93,73,57,0.12)]" />
      {title ? (
        <div className="absolute right-[12%] top-[12%] hidden font-mono text-[0.58rem] uppercase tracking-[0.18em] text-[rgba(83,66,50,0.28)] md:block">
          {title}
        </div>
      ) : null}
    </div>
  );
}
