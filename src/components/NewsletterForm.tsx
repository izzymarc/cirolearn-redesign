"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  if (done) {
    return (
      <div className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm text-emerald-300">
        <Check className="h-4 w-4 shrink-0" /> You&apos;re on the list — talk soon!
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-6 flex max-w-sm items-center gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        aria-label="Email address"
        className="h-11 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-violet-400"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-violet-100"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
