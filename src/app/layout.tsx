import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Chrome } from "@/components/Chrome";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cirolearn.com"),
  title: "CiroLearn — Build Skills. Prove Talent. Launch Careers.",
  description:
    "CiroLearn gets you job-ready through real projects, internships and expert mentorship. No busywork — just real briefs, real deadlines and a portfolio employers trust.",
  keywords: [
    "internship",
    "online learning",
    "career skills",
    "cloud computing",
    "data analysis",
    "full-stack development",
    "cybersecurity",
    "UI UX design",
  ],
  openGraph: {
    title: "CiroLearn — Build Skills. Prove Talent. Launch Careers.",
    description:
      "Real projects, real mentorship, real results. Get job-ready through courses, projects and internships.",
    url: "https://cirolearn.com",
    siteName: "CiroLearn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CiroLearn — Build Skills. Prove Talent. Launch Careers.",
    description:
      "Real projects, real mentorship, real results. Get job-ready through courses, projects and internships.",
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.theme==='dark'||(!localStorage.theme&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}",
          }}
        />
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}
