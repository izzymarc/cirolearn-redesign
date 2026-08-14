import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import type { ReactNode } from "react";

const initials = ["DM", "SR", "LC", "PS"];

/** Split-screen layout shared by the login & register pages. */
export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate grid min-h-screen lg:grid-cols-2">
      {/* Left — form */}
      <div className="flex items-center justify-center px-6 py-14 sm:px-12">
        <div className="w-full max-w-sm">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          {children}
        </div>
      </div>

      {/* Right — brand panel */}
      <div className="relative hidden overflow-hidden bg-ink lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

        <div className="relative">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="CiroLearn"
              width={1834}
              height={548}
              className="h-9 w-auto invert"
            />
          </Link>
        </div>

        <div className="relative">
          <blockquote className="max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-lg leading-relaxed text-white/85">
              &ldquo;The internship was nothing like a course. I defended my
              project in front of real evaluators and shipped it live —
              that&apos;s what got me the interview.&rdquo;
            </p>
            <footer className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-semibold text-white">
                AO
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Amara Okafor</p>
                <p className="text-xs text-white/50">Cloud Engineer</p>
              </div>
            </footer>
          </blockquote>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-3">
              {initials.map((item) => (
                <span
                  key={item}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-semibold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-1 font-semibold text-white">4.8/5</span>
              </div>
              <p className="text-white/50">from 12,000+ learners</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center gap-6 text-sm text-white/40">
          <span>© 2026 CiroLearn</span>
          <Link href="/about" className="transition-colors hover:text-white/70">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-white/70">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
