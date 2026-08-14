import type { Metadata } from "next";
import { CheckCircle2, Send } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { helpItems } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Contact — CiroLearn",
  description: "Get in touch with the CiroLearn team.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="How can we help?"
        description="Our team is here to help with any questions you may have. Complete the form to help us match you with the right project-based challenges and opportunities."
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Help */}
          <FadeIn>
            <h2 className="font-display text-xl font-semibold text-fg">
              Here&apos;s what we can help with:
            </h2>
            <ul className="mt-6 space-y-4">
              {helpItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-fg">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600 dark:text-violet-300" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">
              Opt in for the latest promotions and events. You may unsubscribe at any time.
            </p>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            <form className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-fg">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-1.5 h-11 w-full rounded-xl border border-border bg-[var(--background)] px-4 text-sm outline-none focus:border-violet-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-fg">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1.5 h-11 w-full rounded-xl border border-border bg-[var(--background)] px-4 text-sm outline-none focus:border-violet-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="text-sm font-medium text-fg">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className="mt-1.5 h-11 w-full rounded-xl border border-border bg-[var(--background)] px-4 text-sm outline-none focus:border-violet-500"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="text-sm font-medium text-fg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about what you need…"
                  className="mt-1.5 w-full rounded-xl border border-border bg-[var(--background)] px-4 py-3 text-sm outline-none focus:border-violet-500"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink dark:bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 sm:w-auto"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
              <p className="mt-4 text-xs text-muted">
                By filling out this form and clicking submit, you agree to our privacy policy.
              </p>
            </form>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
