"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-border bg-surface py-24 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <FadeIn className="text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-xs font-semibold text-muted">
            FAQ
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Questions, answered.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Everything you need to know before you apply.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={faq.question} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-border bg-[var(--background)]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-fg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
