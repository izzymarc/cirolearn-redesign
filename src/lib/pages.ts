export type BlogPost = {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    category: "Career",
    title: "How to turn an internship into a full-time offer",
    excerpt:
      "Real strategies for standing out during your internship — and converting it into a job offer before it ends.",
    author: "CiroLearn Team",
    date: "Mar 12, 2026",
    readTime: "6 min read",
  },
  {
    category: "Cloud",
    title: "AWS vs Azure vs GCP: which cloud to learn first",
    excerpt:
      "A practical guide to choosing your first cloud platform, what to focus on, and where to start.",
    author: "CiroLearn Team",
    date: "Mar 5, 2026",
    readTime: "8 min read",
  },
  {
    category: "Skills",
    title: "The skills employers hire for in 2026",
    excerpt:
      "Data, AI, cloud and beyond — the in-demand skills that actually move the needle in your career.",
    author: "CiroLearn Team",
    date: "Feb 24, 2026",
    readTime: "5 min read",
  },
  {
    category: "Design",
    title: "UI/UX portfolios that get you interviews",
    excerpt:
      "What hiring managers look for in a design portfolio — and the mistakes that get you skipped.",
    author: "CiroLearn Team",
    date: "Feb 15, 2026",
    readTime: "7 min read",
  },
  {
    category: "Career",
    title: "How to defend your project in a technical interview",
    excerpt:
      "Frame, demo and defend your work like a professional developer — before the interview happens.",
    author: "CiroLearn Team",
    date: "Feb 8, 2026",
    readTime: "6 min read",
  },
  {
    category: "Marketing",
    title: "Digital marketing on a budget: a beginner's playbook",
    excerpt:
      "Grow a brand from zero using SEO, content and paid media — without burning your budget.",
    author: "CiroLearn Team",
    date: "Jan 30, 2026",
    readTime: "9 min read",
  },
];

export type Value = { title: string; description: string };

export const values: Value[] = [
  {
    title: "Collaboration",
    description:
      "Success is built through collaboration. Interns work in structured teams, share ideas, support one another, and learn to operate in a professional work environment.",
  },
  {
    title: "Initiative",
    description:
      "Interns are encouraged to take initiative, solve real-world business and technology challenges, and contribute meaningful solutions through practical projects.",
  },
  {
    title: "Excellence",
    description:
      "Excellence is expected in every project — dedication, professionalism and attention to detail that reflects industry standards.",
  },
  {
    title: "Real-world impact",
    description:
      "Every project is designed to solve real-world problems and create meaningful value, building the portfolio needed to access career opportunities.",
  },
];

export const helpItems: string[] = [
  "Guide you to the right challenges",
  "Assist with project execution",
  "Support code & project defense",
  "Verify your achievements",
];
