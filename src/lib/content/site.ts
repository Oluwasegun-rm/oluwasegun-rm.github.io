import type { IconSvgElement } from "@hugeicons/react";
import {
  File01Icon,
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
  Mortarboard02Icon,
} from "@hugeicons/core-free-icons";

export type ProfileLink = {
  label: string;
  href: string;
  icon: IconSvgElement;
};

export type Experience = {
  start: string;
  org: string;
  role: string;
  when: string;
  where: string;
  points: string[];
};

export type Publication = {
  year: string;
  title: string;
  venue: string;
  href: string;
  award?: string;
  figures: { value: string; label: string }[];
};

export type Project = {
  year: string;
  name: string;
  badge: string;
  stack: string;
  description: string;
  href?: string;
};

export type Honor = {
  year?: string;
  title: string;
};

export type SkillGroup = {
  label: string;
  items: string;
};

export const siteUrl = "https://oluwasegun-rm.github.io";

export const profile = {
  name: "Oluwasegun Soji-John",
  role: "software engineer · ai/ml researcher",
  place: "baltimore, md",
  tagline:
    "I believe technology should be used to solve problems. I work where data meets real-world impact.",
  description:
    "Software engineer and AI/ML researcher studying computer science at Morgan State University.",
  email: "segunsojijohn@gmail.com",
  photo: "/assets/headshot.jpg",
  resume: "/assets/Oluwasegun_Soji-John_Resume.pdf",
  facts: [
    { label: "studying", value: "CS, Morgan State" },
    { label: "gpa", value: "3.92 / 4.0" },
    { label: "graduating", value: "Dec 2027" },
  ],
  now: "AI for satellite precipitation at Morgan State",
  interests: "ai/ml, agents, real-world impact",
};

export const links: ProfileLink[] = [
  { label: "email", href: `mailto:${profile.email}`, icon: Mail01Icon },
  { label: "linkedin", href: "https://www.linkedin.com/in/oluwasegun-soji-john/", icon: Linkedin01Icon },
  { label: "github", href: "https://github.com/Oluwasegun-rm", icon: GithubIcon },
  { label: "scholar", href: "https://scholar.google.com/citations?user=TbjTzg0AAAAJ&hl=en", icon: Mortarboard02Icon },
  { label: "resume", href: profile.resume, icon: File01Icon },
];

export const experience: Experience[] = [
  {
    start: "2026-05",
    org: "CEAMLS",
    role: "AI/ML Research Intern",
    when: "may – aug 2026",
    where: "baltimore, md",
    points: [
      "Aligned gene-expression, genotype and DNA-methylation data from 111 patients to predict antidepressant response.",
      "Benchmarked graph-based and conventional fusion models with leakage-safe cross-validation and ablation studies.",
      "Co-developed a signal-aware fusion method that down-weights noisy modalities, and contributed to a paper and symposium talk.",
    ],
  },
  {
    start: "2026-02",
    org: "Morgan State University",
    role: "Undergraduate Researcher, AI for Satellite Precipitation",
    when: "feb 2026 – present",
    where: "baltimore, md",
    points: [
      "Built a resumable Python pipeline that turns 1+ TB of NASA radar and microwave data into region-cropped ML inputs, over 100× smaller per file.",
      "Built a storm-annotation tool with 3-D radar views and used it to label 500+ mesoscale convective systems.",
      "Scaled labelling to 6 annotators with a Tornado service and a Next.js dashboard for review and dataset export.",
    ],
  },
  {
    start: "2025-11",
    org: "MorganHacks",
    role: "President",
    when: "nov 2025 – present",
    where: "baltimore, md",
    points: ["Led MorganHacks 2026: 400+ registrations, 180 hackers and $40K+ in sponsorships."],
  },
  {
    start: "2025-05",
    org: "Oracle",
    role: "Software Engineering Intern",
    when: "may – aug 2025",
    where: "redwood city, ca",
    points: [
      "Built an AI assistant on Oracle AI Agent Studio and Fusion APIs that monitors, submits and troubleshoots scheduler jobs in plain language.",
      "Designed the agent's prompts, tool schemas and routing, and turned raw job logs into short, readable explanations.",
    ],
  },
];

export const publications: Publication[] = [
  {
    year: "2026",
    title:
      "Optimizing Insulin Dosing for Type 1 Diabetes with Thyroid Dysfunction Using Q-Learning: A Personalized Approach to Chronic Disease Management",
    venue: "co-author · aaai 2026 · 40th aaai conference on artificial intelligence · pmlr 317",
    href: "https://proceedings.mlr.press/v317/dacon26a",
    award: "best paper runner-up",
    figures: [
      { value: "15%", label: "more time in range" },
      { value: "42%", label: "fewer hypoglycemic events" },
    ],
  },
  {
    year: "2026",
    title:
      "Manifold-Informed Cohort Discovery: A Framework for Uncovering Latent Risk Signals in Imbalanced Healthcare Data",
    venue: "co-author · aaai 2026 bridge · ai for medicine & healthcare · pmlr 317",
    href: "https://proceedings.mlr.press/v317/dacon26b.html",
    figures: [{ value: "85.1%", label: "auroc, coronary heart disease risk" }],
  },
];

export const projects: Project[] = [
  {
    year: "2026",
    name: "Fathom",
    badge: "1st place, msu hackai",
    stack: "react · fastapi · websockets · openai",
    description:
      "Real-time lecture assistant. Streams classroom audio, transcribes it live and turns each lecture into structured summaries you can ask questions about.",
  },
  {
    year: "2026",
    name: "Harvest Commit",
    badge: "1st place, morgan techfest 2026",
    stack: "react · typescript · node.js · twilio · llm",
    description:
      "Co-built a harvest-planning prototype for small farms. It reconciles changing buyer orders, field estimates and crew into one daily plan the farmer approves by SMS.",
    href: "https://harvest-green-psi.vercel.app/",
  },
  {
    year: "2026",
    name: "Cruit",
    badge: "in progress",
    stack: "next.js · python · agents",
    description:
      "A personal recruiting agent that works in the background. It finds roles, tracks your inbox and drafts tailored applications, and a trust layer decides what it may do alone.",
  },
];

export const honors: Honor[] = [
  { year: "2026", title: "Best Paper Runner-Up, AAAI 2026" },
  { year: "2026", title: "1st Place, Morgan TechFest" },
  { year: "2026", title: "1st Place, MSU HackAI" },
  { title: "2nd Place, Howard BisonHacks" },
  { title: "5th Place, Google HBCU Hackathon" },
  { title: "Dean's List, 6 semesters" },
];

export const skills: SkillGroup[] = [
  { label: "languages", items: "Python, Java, TypeScript, JavaScript, SQL, Bash" },
  { label: "ai / ml", items: "PyTorch, TensorFlow, scikit-learn, LLM tool calling, Pandas, NumPy" },
  { label: "web", items: "FastAPI, Flask, Tornado, Node.js, React, Next.js, WebSockets" },
  { label: "data", items: "PostgreSQL, MongoDB, Redis, SQLite" },
  { label: "cloud", items: "AWS, GCP, Azure, Docker, Linux, CI/CD" },
];
