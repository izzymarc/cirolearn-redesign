import { skills } from "@/lib/content";

export function Ticker() {
  const row = [...skills, ...skills];

  return (
    <section className="border-y border-border bg-surface py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Learn the skills employers hire for
        </p>
      </div>
      <div className="marquee-track relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-inner flex w-max animate-marquee items-center">
          {row.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="mx-6 flex items-center gap-6 font-display text-lg font-semibold text-slate-400"
            >
              {skill}
              <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
