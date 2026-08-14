"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { supabase } from "@/lib/supabase";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const row = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    setStatus("loading");
    if (!supabase) {
      setStatus("done"); // demo mode — database not connected yet
      return;
    }
    const { error } = await supabase.from("contact_messages").insert(row);
    setStatus(error ? "error" : "done");
  };

  if (status === "done") {
    return (
      <div className="flex min-h-[24rem] flex-col items-center justify-center rounded-3xl border border-border bg-surface p-12 text-center shadow-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-fg">
          Message sent!
        </h3>
        <p className="mt-2 text-muted">
          Thanks for reaching out — we&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8"
    >
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
      {status === "error" && (
        <p className="mt-3 text-sm text-rose-500">
          Something went wrong — please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink dark:bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      <p className="mt-4 text-xs text-muted">
        By filling out this form and clicking submit, you agree to our privacy
        policy.
      </p>
    </form>
  );
}
