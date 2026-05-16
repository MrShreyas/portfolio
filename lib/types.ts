export interface Skill {
  name: string;
  level: number;
  icon?: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: any;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  category: "Web" | "Mobile" | "Open Source" | "Design";
  isFeatured?: boolean;
  status?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

export interface Stat {
  label: string;
  value: string;
  icon: any;
  color: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: any;
}
