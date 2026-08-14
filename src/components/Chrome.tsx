"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

/**
 * Wraps every page with the marketing chrome (navbar + footer),
 * except the full-screen auth pages.
 */
export function Chrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuth =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  if (isAuth) {
    return <>{children}</>;
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
