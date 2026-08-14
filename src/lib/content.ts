export type Program = {
  icon: string;
  title: string;
  tagline: string;
  meta: string;
  chip: string;
  gradient: string;
  price?: string;
  regularPrice?: string;
};

export const programs: Program[] = [
  { icon: "building", title: "Digital Business Operations Specialist", tagline: "Run the systems, tools and processes behind modern digital businesses.", meta: "10 weeks · All levels", chip: "bg-slate-200 text-slate-700", gradient: "from-slate-500 to-slate-700" },
  { icon: "cloud", title: "Cloud Computing", tagline: "Design and deploy scalable infrastructure on AWS, Azure & GCP.", meta: "12 weeks · Intermediate", chip: "bg-sky-100 text-sky-700", gradient: "from-sky-400 to-blue-600" },
  { icon: "chart", title: "Data Analysis", tagline: "Turn messy data into decisions with SQL, Python & dashboards.", meta: "10 weeks · Beginner friendly", chip: "bg-emerald-100 text-emerald-700", gradient: "from-emerald-400 to-teal-600" },
  { icon: "mobile", title: "Mobile App Development", tagline: "Ship cross-platform apps people love with Flutter & React Native.", meta: "12 weeks · Intermediate", chip: "bg-violet-100 text-violet-700", gradient: "from-violet-400 to-purple-600" },
  { icon: "code", title: "Full-Stack Development", tagline: "Build production web apps end-to-end with a modern stack.", meta: "14 weeks · Intermediate", chip: "bg-indigo-100 text-indigo-700", gradient: "from-indigo-400 to-blue-600" },
  { icon: "shield", title: "Cybersecurity", tagline: "Hunt threats and harden systems with real security tooling.", meta: "12 weeks · Advanced", chip: "bg-rose-100 text-rose-700", gradient: "from-rose-400 to-red-600" },
  { icon: "briefcase", title: "Virtual / Executive Assistance", tagline: "Master operations, scheduling and the tools that keep teams running.", meta: "8 weeks · Beginner friendly", chip: "bg-lime-100 text-lime-700", gradient: "from-lime-400 to-green-600" },
  { icon: "megaphone", title: "Digital Marketing", tagline: "Grow brands with SEO, paid media, content and analytics.", meta: "10 weeks · Beginner friendly", chip: "bg-amber-100 text-amber-700", gradient: "from-amber-400 to-orange-600" },
  { icon: "kanban", title: "Project Management", tagline: "Lead sprints and ship on time with agile workflows.", meta: "8 weeks · All levels", chip: "bg-cyan-100 text-cyan-700", gradient: "from-cyan-400 to-teal-600" },
  { icon: "pen", title: "UI/UX Design", tagline: "Craft interfaces and experiences people genuinely love to use.", meta: "10 weeks · Beginner friendly", chip: "bg-fuchsia-100 text-fuchsia-700", gradient: "from-fuchsia-400 to-pink-600" },
];

export const courses: Program[] = [
  { icon: "cloud", title: "Cloud Computing", tagline: "Master AWS, Azure & GCP fundamentals — and get certified.", meta: "Certificate", chip: "bg-sky-100 text-sky-700", gradient: "from-sky-400 to-blue-600", price: "₦100,000", regularPrice: "₦400,000" },
  { icon: "chart", title: "Data Analysis", tagline: "SQL, Python and visualization to turn data into decisions.", meta: "Certificate", chip: "bg-emerald-100 text-emerald-700", gradient: "from-emerald-400 to-teal-600", price: "₦100,000", regularPrice: "₦400,000" },
  { icon: "video", title: "Content Creation", tagline: "Produce content that grows audiences and builds brands.", meta: "Certificate", chip: "bg-pink-100 text-pink-700", gradient: "from-pink-400 to-rose-600", price: "₦100,000", regularPrice: "₦400,000" },
  { icon: "code", title: "Full-Stack Development", tagline: "Build and deploy complete web applications end-to-end.", meta: "Certificate", chip: "bg-indigo-100 text-indigo-700", gradient: "from-indigo-400 to-blue-600", price: "₦100,000", regularPrice: "₦400,000" },
  { icon: "shield", title: "Cybersecurity", tagline: "Learn to defend systems and hunt real-world threats.", meta: "Certificate", chip: "bg-rose-100 text-rose-700", gradient: "from-rose-400 to-red-600", price: "₦100,000", regularPrice: "₦400,000" },
  { icon: "kanban", title: "Project Management", tagline: "Plan, lead and deliver projects with confidence.", meta: "Certificate", chip: "bg-cyan-100 text-cyan-700", gradient: "from-cyan-400 to-teal-600", price: "₦100,000", regularPrice: "₦400,000" },
  { icon: "pen", title: "UI/UX Design", tagline: "Design interfaces and experiences users love.", meta: "Certificate", chip: "bg-fuchsia-100 text-fuchsia-700", gradient: "from-fuchsia-400 to-pink-600", price: "₦100,000", regularPrice: "₦400,000" },
];

export type Feature = { icon: string; title: string; description: string };

export const features: Feature[] = [
  { icon: "briefcase", title: "Real-World Project & Clear Brief", description: "Work on practical projects that reflect real industry needs. Every task comes with a clear brief, objectives, and expectations, helping interns gain hands-on experience, build portfolios, and develop job-ready skills." },
  { icon: "rocket", title: "Live Deployment & Professional Workflow", description: "Experience the complete project lifecycle, from development to live deployment. Work with professional workflows, industry tools, and best practices used by modern teams and organizations." },
  { icon: "timer", title: "Strict Timeline & Performance Pressure", description: "Work within real deadlines and performance expectations that mirror the professional workplace, helping you build discipline, accountability, and the ability to deliver quality results under pressure." },
  { icon: "presentation", title: "Project Defense & Technical Evaluation", description: "Present and defend your work before mentors and evaluators, demonstrating your technical knowledge and problem-solving abilities. Gain valuable feedback while preparing for real-world interviews and professional assessments." },
  { icon: "wrench", title: "Build From Scratch Using Modern Technologies", description: "Learn by creating real projects from the ground up using modern tools and technologies. Gain practical experience, strengthen your technical skills, and understand how real-world digital solutions are built." },
  { icon: "trending", title: "Real Growth, Portfolio & Faster Job Opportunities", description: "Build a strong portfolio through hands-on projects while developing skills that employers value. Accelerate your career growth and increase your chances of securing job opportunities faster." },
];

export type Step = { number: string; title: string; description: string };

export const steps: Step[] = [
  { number: "01", title: "Create your free account", description: "Sign up in minutes, pick a track and get matched with a mentor and a real project brief." },
  { number: "02", title: "Learn by building", description: "Ship in weekly sprints with real deadlines, code reviews and mentorship — no busywork." },
  { number: "03", title: "Defend & deploy", description: "Present your project to evaluators, take the feedback, and push your work live." },
  { number: "04", title: "Launch your career", description: "Graduate with a portfolio, certificate and placement support that opens real doors." },
];

export type Stat = { value: number; suffix?: string; label: string };

export const stats: Stat[] = [
  { value: 9452, label: "Followers" },
  { value: 4825, label: "Participants" },
  { value: 2678, label: "Certified professionals" },
  { value: 8, label: "Code challenges" },
];

export type Testimonial = { quote: string; name: string; role: string; initials: string };

export const testimonials: Testimonial[] = [
  { quote: "The internship was nothing like a course. I defended my project in front of real evaluators and shipped it live — that's what got me the interview.", name: "Amara Okafor", role: "Cloud Engineer · hired after 4 weeks", initials: "AO" },
  { quote: "I came in with zero experience. I left with a deployed full-stack app, a portfolio, and two job offers. CiroLearn changed my trajectory.", name: "Daniel Mensah", role: "Full-Stack Developer", initials: "DM" },
  { quote: "Real deadlines, real teamwork, real pressure. It felt like my first month on the job — and it made my first month on the job feel easy.", name: "Sofia Reyes", role: "Data Analyst", initials: "SR" },
  { quote: "The project defense was intimidating at first, but it taught me to communicate my work like a professional. Worth every week.", name: "Liam Carter", role: "Cybersecurity Analyst", initials: "LC" },
  { quote: "My mentor reviewed my code like a senior engineer. I learned more in 12 weeks than in two years of tutorials.", name: "Priya Sharma", role: "Mobile Developer", initials: "PS" },
  { quote: "The placement support is real. They helped me polish my portfolio and practice interviews until I landed the role.", name: "Kwame Boateng", role: "Digital Marketing Specialist", initials: "KB" },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  { question: "Why won't my payment go through?", answer: "This usually happens if your card details or billing information don't match your bank's records. Double-check your card number, expiry date and CVV, make sure you have sufficient funds, then try again — or contact our team for help." },
  { question: "How do I get a refund?", answer: "If a payment was processed by mistake or a program is cancelled, contact us within the refund window with your order details and we'll process your refund as quickly as possible." },
  { question: "How do I redeem a coupon?", answer: "Enter your coupon code at checkout before completing your payment, and the discount will be applied to your order total automatically." },
  { question: "How do I change my account name?", answer: "Sign in to your account, open your profile settings and update your name, then save the changes. If you run into any issues, reach out to support." },
  { question: "How do I change my password?", answer: "Go to your account settings and choose 'change password' — enter your current password and a new one, then save. You can also use the 'lost your password' link on the login page to reset it by email." },
];

export const skills = [
  "Cloud Computing", "Data Analysis", "Mobile App Development", "Full-Stack Development",
  "Cybersecurity", "UI/UX Design", "Digital Marketing", "Project Management",
  "Virtual Assistance", "Digital Business Operations", "Content Creation",
];

export const navLinks = [
  { label: "Programs", href: "/#programs" },
  { label: "Courses", href: "/#courses" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export type FooterLink = { label: string; href: string };

export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Courses",
    links: [
      { label: "Cloud Computing", href: "/#courses" },
      { label: "Data Analysis", href: "/#courses" },
      { label: "Content Creation", href: "/#courses" },
      { label: "Full-Stack Development", href: "/#courses" },
      { label: "Cybersecurity", href: "/#courses" },
      { label: "Project Management", href: "/#courses" },
      { label: "UI/UX Design", href: "/#courses" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "Become a teacher", href: "/about" },
      { label: "Blogs", href: "/blog" },
      { label: "FAQs", href: "/#faq" },
      { label: "Gallery", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Profile", href: "#" },
      { label: "Shop", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Help center", href: "#" },
    ],
  },
];
