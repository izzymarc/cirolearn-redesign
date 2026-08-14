# CiroLearn — Website Redesign Proposal

**Prepared for:** the owner of cirolearn.com
**Goal:** a modern, conversion-focused site that reflects the quality of the CiroLearn program.

---

## 1. The problem with the current site

CiroLearn is a strong product — real internships, real projects, mentorship, placement — but the website doesn't communicate it. Today it reads as an untuned template:

- **No real brand identity** — the palette mixes three unrelated colors (yellow `#ffb606`, purple `#B25CF0`, blue `#356DF1`) from the default WordPress/Elementor theme.
- **Generic layout** — a stock "hero → grid → CTA" pattern with no hierarchy, no personality, and no clear next step.
- **Cluttered navigation** — repeated menu items and an unfinished header ("No products in the cart" leaks into the top bar).
- **Buried value** — the strongest selling points (real projects, live deployment, project defense, placement) are hard to scan.

## 2. The redesign

A complete visual and messaging refresh, built on the industry-standard stack (Next.js 16, React 19, TypeScript, Tailwind CSS v4, Motion).

| Before | After |
| --- | --- |
| 3 clashing template colors | One violet→indigo brand gradient + near-black ink + white |
| Generic stock layout | Purpose-built sections with clear hierarchy and CTAs |
| Cluttered nav | Clean sticky nav + mobile menu |
| No social proof | Skills ticker, program grid, "what to expect" pillars, testimonials band |
| No clear journey | 4-step "how it works" + FAQ + prominent CTAs |

### What's on the homepage

- **Hero** — real headline ("Get ready for real jobs through courses, projects, and internships") + animated dashboard mockup.
- **Skills ticker** — the in-demand skills learners master.
- **Programs** — all 10 internship tracks: Digital Business Operations Specialist, Cloud Computing, Data Analysis, Mobile App Development, Full-Stack Development, Cybersecurity, Virtual/Executive Assistance, Digital Marketing, Project Management, UI/UX Design.
- **Courses** — the 7 guided courses (incl. Content Creation).
- **What to expect** — the 6 real pillars: real-world briefs, live deployment, strict timelines, project defense, modern stack, portfolio & growth.
- **How it works** — a 4-step path from sign-up to job offer.
- **Testimonials, CTA, FAQ, and a full footer** with real navigation.

### Pages included

Home · About · Blog · Contact · **Login** · **Register** — all sharing a consistent header/footer and fully responsive.

### Interactive polish

Animated count-up stats, a shimmering gradient headline, a scrolling testimonial marquee, sticky glass navigation with a mobile menu, and full-screen login/register flows with social sign-in (Google/GitHub), show/hide password and "remember me".

## 3. Why this wins

- **One clear message** — everything points to a single promise: *real work → real portfolio → real job*.
- **Fast and mobile-first** — statically generated pages that score well on Core Web Vitals.
- **Modern and credible** — the design reads as a serious, current tech brand, which is exactly the audience CiroLearn serves.

## 4. How we ship it

1. Approve the visual direction.
2. Swap in real assets (logo image, real testimonials, real contact details, final copy).
3. Port into the existing WordPress/Elementor setup — or rebuild clean — so the live site matches this design.

---

*Note: testimonials, contact details, and some statistics in this prototype are placeholders and will be replaced with real data before launch.*
