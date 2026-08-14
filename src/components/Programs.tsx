import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Kanban,
  Megaphone,
  PenTool,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SpotlightCard } from "@/components/SpotlightCard";
import { programs } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  cloud: Cloud,
  chart: BarChart3,
  mobile: Smartphone,
  code: Code2,
  shield: ShieldCheck,
  pen: PenTool,
  megaphone: Megaphone,
  kanban: Kanban,
  briefcase: Briefcase,
  building: Building2,
};

export function Programs() {
  return (
    <section id="programs" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted">
            Internship program
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Learn Essential Career and Life Skills
          </h2>
          <p className="mt-4 text-lg text-muted">
            Cirolearn helps you build in-demand digital and professional skills
            that prepare you for the real world.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => {
            const Icon = ICONS[program.icon] ?? Code2;
            return (
              <FadeIn key={program.title} delay={(i % 3) * 0.08}>
                <SpotlightCard
                  href="#"
                  className="bg-surface p-6 transition-all hover:-translate-y-1 hover:border-violet-200 dark:border-violet-500/30 hover:shadow-xl hover:shadow-violet-900/5"
                >
                  <div
                    className={`relative flex h-24 items-center justify-center rounded-xl bg-gradient-to-br ${program.gradient}`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur">
                      <Icon className="h-6 w-6" />
                    </span>
                    <ArrowUpRight className="absolute right-3 top-3 h-5 w-5 text-white/70 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-fg">
                    {program.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {program.tagline}
                  </p>
                </SpotlightCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
