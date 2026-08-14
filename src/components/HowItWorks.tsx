import { FadeIn } from "@/components/FadeIn";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted">
            How it works
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            From sign-up to job offer.
          </h2>
          <p className="mt-4 text-lg text-muted">
            A clear, mentored path that turns effort into a portfolio — and a
            portfolio into a career.
          </p>
        </FadeIn>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent lg:block" />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1} className="relative">
              <div className="flex flex-col items-start">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-200 dark:border-violet-500/30 bg-surface font-display text-lg font-bold text-violet-700 dark:text-violet-300 shadow-sm">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
