"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin gradient bar across the top showing reading progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-violet-600 via-indigo-500 to-fuchsia-500"
    />
  );
}
