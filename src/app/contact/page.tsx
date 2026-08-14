import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
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
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
