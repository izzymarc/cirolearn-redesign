import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { SpotlightCard } from "@/components/SpotlightCard";
import { blogPosts } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Blog — CiroLearn",
  description:
    "Career advice, skills guides and internship insights from CiroLearn.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main>
      <PageHeader
        eyebrow="Blog"
        title="Insights to launch your career."
        description="Career advice, skills guides and internship insights from the CiroLearn team."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Featured post */}
          <FadeIn>
            <a
              href="#"
              className="group grid overflow-hidden rounded-3xl border border-border bg-surface lg:grid-cols-2"
            >
              <div className="relative min-h-[16rem] lg:min-h-0">
                <Image
                  src="/covers/blog-1.svg"
                  alt={featured.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="inline-flex w-fit rounded-full bg-violet-100 dark:bg-violet-500/10 px-2.5 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300">
                  {featured.category}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-muted">{featured.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
              </div>
            </a>
          </FadeIn>

          {/* Post grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <FadeIn key={post.title} delay={(i % 3) * 0.06}>
                <SpotlightCard
                  href="#"
                  className="bg-surface p-6 transition-all hover:-translate-y-1 hover:border-violet-200 dark:border-violet-500/30 hover:shadow-xl hover:shadow-violet-900/5"
                >
                  <Image
                    src={`/covers/blog-${i + 2}.svg`}
                    alt={post.title}
                    width={800}
                    height={450}
                    unoptimized
                    className="aspect-[16/9] w-full rounded-xl object-cover"
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex rounded-full bg-surface-2 px-2.5 py-1 text-xs font-semibold text-muted">
                      {post.category}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-600 dark:text-violet-300" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-fg">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
