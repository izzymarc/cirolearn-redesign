"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { GitHubIcon, GoogleIcon } from "@/components/SocialIcons";

export function LoginForm() {
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);

  return (
    <>
      <h1 className="font-display text-3xl font-bold tracking-tight text-fg">
        Welcome back
      </h1>
      <p className="mt-2 text-muted">
        Login with your site account to continue learning.
      </p>

      <div className="mt-8 space-y-3">
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-border bg-surface text-sm font-semibold text-fg transition-colors hover:bg-black/[0.03]"
        >
          <GoogleIcon className="h-5 w-5" /> Continue with Google
        </button>
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-border bg-surface text-sm font-semibold text-fg transition-colors hover:bg-black/[0.03]"
        >
          <GitHubIcon className="h-5 w-5" /> Continue with GitHub
        </button>
      </div>

      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-black/10" />
        <span className="text-xs font-medium text-muted">or</span>
        <span className="h-px flex-1 bg-black/10" />
      </div>

      <form className="space-y-4">
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
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium text-fg">
              Password
            </label>
            <a
              href="#"
              className="text-xs font-medium text-violet-600 dark:text-violet-300 hover:text-violet-700 dark:text-violet-300"
            >
              Lost your password?
            </a>
          </div>
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
        <label className="flex items-center gap-2.5 text-sm text-muted">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 rounded accent-violet-600"
          />
          Remember me
        </label>
        <button
          type="submit"
          className="h-12 w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-opacity hover:opacity-90"
        >
          Log in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Not a member yet?{" "}
        <Link
          href="/register"
          className="font-semibold text-violet-600 dark:text-violet-300 hover:text-violet-700 dark:text-violet-300"
        >
          Register now
        </Link>
      </p>
    </>
  );
}
