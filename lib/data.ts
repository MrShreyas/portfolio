import { 
  Atom, 
  Triangle, 
  Braces, 
  Server, 
  Wind, 
  Database, 
  GitBranch, 
  LayoutTemplate,
  Wrench,
  Code2,
  BarChart3,
  MapPin,
  Briefcase,
  Users,
  Coffee,
  Mail,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";
import { Project, SkillCategory, TimelineItem, Stat, SocialLink } from "./types";

export const HERO_DATA = {
  name: "Shreyas",
  surname: "Katalkar",
  role: "Fullstack Web Developer",
  location: "Pune, India",
  status: "Available for new opportunities",
  description: "I craft exceptional digital experiences with modern web technologies. Focused on building responsive, accessible, and performant applications that users love.",
  codeSnippet: {
    filename: "~/portfolio/about.tsx",
    content: {
      name: "Shreyas Katalkar",
      role: "Fullstack Dev",
      location: "Pune, IN",
      stack: ["React", "Node"],
      available: true
    }
  },
  stats: [
    { label: "Projects Built", value: "15+" },
    { label: "Internships", value: "2" },
    { label: "Technologies", value: "10+" }
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "FRONTEND",
    icon: LayoutTemplate,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind", level: 92 }
    ]
  },
  {
    title: "BACKEND",
    icon: Server,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 80 }
    ]
  },
  {
    title: "TOOLS",
    icon: Wrench,
    skills: [
      { name: "Git", level: 90 },
      { name: "Figma", level: 75 }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "nova-commerce",
    title: "NovaCommerce",
    description: "A modern e-commerce platform with seamless checkout, real-time inventory, and AI-powered product recommendations serving 10K+ monthly users.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    link: "https://novacommerce.shop",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    category: "Web",
    isFeatured: true,
    status: "Live · Featured"
  },
  {
    id: "pulse-chat",
    title: "PulseChat",
    description: "Realtime chat app with end-to-end encryption, typing indicators, and group video calls.",
    image: "", // Placeholder for mobile UI
    link: "#",
    tags: ["React Native", "Socket.io", "Firebase"],
    category: "Mobile",
    status: "Mobile · iOS + Android"
  },
  {
    id: "dev-board",
    title: "DevBoard",
    description: "Developer analytics dashboard tracking commits, PRs, and team velocity.",
    image: "", // Chart placeholder
    link: "#",
    tags: ["TypeScript", "D3.js"],
    category: "Web",
    status: "Analytics"
  },
  {
    id: "code-snippets",
    title: "CodeSnippets",
    description: "VS Code extension with 200+ curated snippets for React & TypeScript.",
    image: "", // Code placeholder
    link: "#",
    tags: ["TypeScript", "VSCode API"],
    category: "Open Source",
    status: "VS Code Extension"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2024",
    title: "Senior Fullstack Intern @ TechCorp",
    description: "Architecting scalable Next.js + Node systems serving 100k+ users. Leading frontend modernization initiatives.",
    isCurrent: true
  },
  {
    year: "2023",
    title: "Built 10+ production apps",
    description: "Shipped MVPs across e-commerce, SaaS dashboards, and AI tooling using React, TypeScript, and MongoDB."
  },
  {
    year: "2022",
    title: "Started freelancing",
    description: "Took on first paid clients building landing pages and small web apps. Learned client communication & deadlines."
  },
  {
    year: "2021",
    title: "Began CS degree",
    description: "Started Computer Science journey. Fell in love with web development through a single semester project."
  }
];

export const STATS_DATA: Stat[] = [
  { label: "Years Coding", value: "4+", icon: Code2, color: "oklch(0.627 0.265 303.9)" },
  { label: "Happy Clients", value: "12", icon: Users, color: "oklch(0.627 0.265 303.9)" },
  { label: "Coffee Cups", value: "∞", icon: Coffee, color: "oklch(0.627 0.265 303.9)" },
  { label: "Git Commits", value: "1.2k", icon: GitBranch, color: "oklch(0.627 0.265 303.9)" }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/shreyas", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com/in/shreyas", icon: Linkedin },
  { platform: "Twitter", url: "https://twitter.com/shreyas", icon: Twitter },
  { platform: "Email", url: "mailto:hello@shreyas.dev", icon: Mail }
];
