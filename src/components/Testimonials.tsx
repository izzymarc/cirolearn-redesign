"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number, direction: number) => {
    setDir(direction);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [index]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="scroll-mt-20 bg-ink py-24 text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-violet-300">
            Testimonials
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Proof, not promises.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Hear from learners who turned a CiroLearn internship into a job offer.
          </p>
        </FadeIn>

        <div className="relative mt-14">
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: dir * 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -48 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:p-12"
            >
              <Quote className="mx-auto h-8 w-8 text-violet-400" />
              <blockquote className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/90 sm:text-2xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 font-semibold text-white">
                  {t.initials}
                </span>
                <div className="text-left">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => go(index - 1, -1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 sm:-left-16"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1, 1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 sm:-right-16"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => go(i, i > index ? 1 : -1)}
                aria-label={"Go to testimonial " + (i + 1)}
                className={
                  "h-2 rounded-full transition-all " +
                  (i === index ? "w-6 bg-violet-400" : "w-2 bg-white/25 hover:bg-white/40")
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
