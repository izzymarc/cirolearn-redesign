"use client";

import Link from "next/link";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";

type SpotlightCardProps = {
  href?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Card with a cursor-following radial glow (Linear/Stripe-style spotlight).
 * Add bg, padding and hover classes via `className`.
 */
export function SpotlightCard({
  href,
  className = "",
  children,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  };

  const base = `group relative block h-full overflow-hidden rounded-2xl border border-border ${className}`;

  const overlay = (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 transition-opacity duration-300"
      style={{
        opacity: pos.opacity,
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgb(139 92 246 / 0.14), transparent 65%)`,
      }}
    />
  );

  const handlers = {
    onMouseMove: handleMove,
    onMouseLeave: () => setPos((p) => ({ ...p, opacity: 0 })),
  };

  if (href) {
    return (
      <div ref={ref} {...handlers} className={base}>
        {overlay}
        <Link href={href} className="relative z-10 flex h-full flex-col">
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div ref={ref} {...handlers} className={base}>
      {overlay}
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
