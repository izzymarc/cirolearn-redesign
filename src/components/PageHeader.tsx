import { FadeIn } from "@/components/FadeIn";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-32 left-1/2 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-violet-400/15 blur-3xl" />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <FadeIn>
          <span className="inline-flex items-center rounded-full border border-violet-200 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300">
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
