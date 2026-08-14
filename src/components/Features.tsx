import {
  Briefcase,
  Presentation,
  Rocket,
  Timer,
  TrendingUp,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { features } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  rocket: Rocket,
  timer: Timer,
  presentation: Presentation,
  wrench: Wrench,
  trending: TrendingUp,
};

export function Features() {
  return (
    <section className="border-y border-border bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-xs font-semibold text-muted">
            What to expect
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            What to expect from a CiroLearn internship.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Every internship is engineered to feel like your first month on the
            job — because that&apos;s exactly what prepares you for it.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = ICONS[feature.icon] ?? Briefcase;
            return (
              <FadeIn key={feature.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-[var(--background)] p-6 transition-colors hover:border-violet-200 dark:border-violet-500/30">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-fg">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
