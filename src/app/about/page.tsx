import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { stats } from "@/lib/content";
import { values } from "@/lib/pages";

export const metadata: Metadata = {
  title: "About — CiroLearn",
  description:
    "CiroLearn empowers aspiring professionals through structured internship programs built around real-world projects, practical challenges, and professional evaluations.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About us"
        title="Code hard. Prove yourself. Get hired."
        description="At Cirolearn, passion isn&apos;t enough — you prove it. Build real projects, defend your work, and show what you can actually do."
      />

      {/* Stats */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm"
                >
                  <p className="font-display text-3xl font-bold text-fg">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Cirolearn */}
      <section className="border-t border-border bg-surface py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <FadeIn>
            <span className="inline-flex items-center rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-xs font-semibold text-muted">
              About Cirolearn
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              We keep building. We keep winning.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              At CiroLearn, internships are built around real work and continuous growth. Interns don&apos;t just learn — they contribute, solve problems, and gain hands-on experience through real projects.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">
              CiroLearn empowers aspiring professionals through structured internship programs built around real-world projects, practical challenges, and professional evaluations. Interns gain hands-on experience, collaborate on meaningful work, and demonstrate their skills through project presentations and technical assessments.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Our internship model is designed to bridge the gap between learning and employment — helping participants build strong portfolios, gain industry experience, and become better prepared for career opportunities in today&apos;s digital economy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted">
              What we stand for
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Our values.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-700 px-8 py-16 text-center sm:px-16">
              <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to build projects, get verified, and make an impact?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                  CiroLearn is looking for you.
                </p>
                <Link
                  href="/register"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-violet-700 shadow-xl transition-transform hover:scale-[1.02]"
                >
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
