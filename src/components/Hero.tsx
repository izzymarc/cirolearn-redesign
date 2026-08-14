import {
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  Rocket,
  Star,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { FadeIn } from "@/components/FadeIn";
import { stats } from "@/lib/content";

const avatarInitials = ["AO", "DM", "SR", "LC"];

const tasks = [
  { label: "Ship auth flow to staging", done: true },
  { label: "Review PR #42 — mentor feedback", done: true },
  { label: "Deploy v0.9 to production", done: false },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-dot-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="absolute -left-24 top-24 -z-10 h-72 w-72 animate-blob rounded-full bg-indigo-300/30 blur-3xl" />
      <div
        className="absolute -right-24 top-40 -z-10 h-72 w-72 animate-blob rounded-full bg-fuchsia-300/20 blur-3xl"
        style={{ animationDelay: "-9s" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left column */}
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-600" />
            </span>
            Build skills · Prove talent · Launch careers
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            Get ready for{" "}
            <span className="text-shimmer bg-gradient-to-r from-violet-600 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              real jobs
            </span>{" "}
            through courses, projects, and internships.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Whether you&apos;re starting your career or looking to gain
            practical industry experience, the CiroLearn Internship Program
            helps you develop real-world skills through hands-on projects and
            professional mentorship. No busy work. No simulated assignments.
            Just real challenges, real deadlines, real teamwork, and real
            results.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 rounded-full bg-ink dark:bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-ink/10 transition-all hover:bg-violet-700 hover:shadow-violet-700/25"
            >
              Create your free account
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-border hover:bg-black/[0.02]"
            >
              <PlayCircle className="h-5 w-5 text-violet-600 dark:text-violet-300" />
              See how it works
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <div className="flex -space-x-3">
              {avatarInitials.map((initials) => (
                <span
                  key={initials}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-semibold text-white"
                >
                  {initials}
                </span>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-1 font-semibold text-fg">4.8/5</span>
              </div>
              <p className="text-muted">from 12,000+ learners</p>
            </div>
          </div>
        </FadeIn>

        {/* Right column — device mockup */}
        <FadeIn delay={0.15} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="ring-gradient relative overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-violet-900/10">
              <div className="flex items-center gap-1.5 border-b border-border bg-surface-2/80 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-medium text-muted">
                  cirolearn — dashboard
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted">Full-Stack Internship</p>
                    <p className="font-display text-lg font-semibold text-fg">
                      Week 7 of 14
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 className="h-3.5 w-3.5" /> On track
                  </span>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-surface-2">
                  <div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
                </div>
                <div className="mt-5 space-y-2.5">
                  {tasks.map((task) => (
                    <div
                      key={task.label}
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/60 px-3 py-2.5"
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          task.done
                            ? "bg-emerald-500 text-white"
                            : "border-2 border-slate-300"
                        }`}
                      >
                        {task.done && <CheckCircle2 className="h-3.5 w-3.5" />}
                      </span>
                      <span
                        className={`text-sm ${
                          task.done
                            ? "text-muted line-through"
                            : "font-medium text-fg"
                        }`}
                      >
                        {task.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* floating badge — top right */}
            <div className="absolute -right-5 -top-6 animate-float rounded-2xl border border-border bg-surface p-3 shadow-xl shadow-violet-900/10">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                  <Rocket className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-fg">Deployed live</p>
                  <p className="text-[11px] text-muted">production ✓</p>
                </div>
              </div>
            </div>

            {/* floating badge — bottom left */}
            <div className="absolute -bottom-6 -left-6 animate-float-slow rounded-2xl border border-border bg-surface p-3 shadow-xl shadow-violet-900/10">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300">
                  <Trophy className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-fg">Project defended</p>
                  <p className="text-[11px] text-muted">94% pass rate</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* stats strip */}
      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-black/5 dark:bg-white/10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-6 py-7 text-center">
              <p className="font-display text-3xl font-bold text-fg">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
