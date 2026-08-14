"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { GitHubIcon, GoogleIcon } from "@/components/SocialIcons";

export function RegisterForm() {
  const [show, setShow] = useState(false);
  const [instructor, setInstructor] = useState(false);

  return (
    <>
      <h1 className="font-display text-3xl font-bold tracking-tight text-fg">
        Create your account
      </h1>
      <p className="mt-2 text-muted">
        Register a new account and start building real skills today.
      </p>

      <div className="mt-8 space-y-3">
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-border bg-surface text-sm font-semibold text-fg transition-colors hover:bg-black/[0.03]"
        >
          <GoogleIcon className="h-5 w-5" /> Sign up with Google
        </button>
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-border bg-surface text-sm font-semibold text-fg transition-colors hover:bg-black/[0.03]"
        >
          <GitHubIcon className="h-5 w-5" /> Sign up with GitHub
        </button>
      </div>

      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-black/10" />
        <span className="text-xs font-medium text-muted">or</span>
        <span className="h-px flex-1 bg-black/10" />
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-fg">
            Full name
          </label>
          <div className="relative mt-1.5">
            <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              id="name"
              type="text"
              required
              placeholder="Jane Doe"
              className="h-12 w-full rounded-xl border border-border bg-[var(--background)] pl-10 pr-4 text-sm outline-none transition-colors focus:border-violet-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-fg">
            Email
          </label>
          <div className="relative mt-1.5">
            <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="h-12 w-full rounded-xl border border-border bg-[var(--background)] pl-10 pr-4 text-sm outline-none transition-colors focus:border-violet-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium text-fg">
            Password
          </label>
          <div className="relative mt-1.5">
            <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              id="password"
              type={show ? "text" : "password"}
              required
              placeholder="••••••••"
              className="h-12 w-full rounded-xl border border-border bg-[var(--background)] pl-10 pr-11 text-sm outline-none transition-colors focus:border-violet-500"
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              aria-label="Toggle password visibility"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-fg"
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <label className="flex items-start gap-2.5 text-sm text-muted">
          <input
            type="checkbox"
            checked={instructor}
            onChange={(e) => setInstructor(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded accent-violet-600"
          />
          <span>Want to become an instructor? We&apos;ll set you up after signup.</span>
        </label>
        <button
          type="submit"
          className="h-12 w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-opacity hover:opacity-90"
        >
          Create account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Are you a member?{" "}
        <Link
          href="/login"
          className="font-semibold text-violet-600 dark:text-violet-300 hover:text-violet-700 dark:text-violet-300"
        >
          Login now
        </Link>
      </p>
    </>
  );
}
