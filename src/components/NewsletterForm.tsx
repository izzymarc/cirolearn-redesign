"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    if (!supabase) {
      setStatus("done"); // demo mode — database not connected yet
      return;
    }
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email });
    setStatus(error ? "error" : "done");
  };

  if (status === "done") {
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
        disabled={status === "loading"}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-violet-100 disabled:opacity-60"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ArrowRight className="h-4 w-4" />
        )}
      </button>
      {status === "error" && (
        <span className="text-xs text-rose-400">Try again</span>
      )}
    </form>
  );
}
