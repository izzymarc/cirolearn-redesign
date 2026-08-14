import {
  ArrowRight,
  BarChart3,
  Cloud,
  Code2,
  Kanban,
  PenTool,
  ShieldCheck,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SpotlightCard } from "@/components/SpotlightCard";
import { courses } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  cloud: Cloud,
  chart: BarChart3,
  code: Code2,
  shield: ShieldCheck,
  pen: PenTool,
  kanban: Kanban,
  video: Video,
};

export function Courses() {
  return (
    <section
      id="courses"
      className="scroll-mt-20 border-t border-border bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-xs font-semibold text-muted">
            Courses
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Guided courses, at your own pace.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Prefer to learn before you intern? These industry-focused courses
            build the same in-demand skills.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, i) => {
            const Icon = ICONS[course.icon] ?? Cloud;
            return (
              <FadeIn key={course.title} delay={(i % 4) * 0.06}>
                <SpotlightCard
                  href="#"
                  className="bg-[var(--background)] p-6 transition-all hover:-translate-y-1 hover:border-violet-200 dark:border-violet-500/30 hover:shadow-xl hover:shadow-violet-900/5"
                >
                  <div
                    className={`flex h-20 items-center justify-center rounded-xl bg-gradient-to-br ${course.gradient}`}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-fg">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {course.tagline}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-baseline gap-2">
                      <span className="font-display text-lg font-bold text-fg">
                        {course.price}
                      </span>
                      {course.regularPrice && (
                        <span className="text-sm text-muted line-through">
                          {course.regularPrice}
                        </span>
                      )}
                    </span>
                    <span className="text-xs font-medium text-muted">
                      {course.meta}
                    </span>
                  </div>
                </SpotlightCard>
              </FadeIn>
            );
          })}

          {/* browse-all tile */}
          <FadeIn delay={0.06}>
            <a
              href="#"
              className="group flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-6 text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-700/25"
            >
              <span className="font-display text-lg font-semibold">
                Browse all courses
              </span>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/80">
                  Explore the full catalog
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
