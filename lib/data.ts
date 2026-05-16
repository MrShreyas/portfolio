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
import data from "./data.json";

// Icon mapping to convert string keys from JSON to Lucide components
const ICON_MAP: Record<string, any> = {
  LayoutTemplate,
  Server,
  Wrench,
  Code2,
  Users,
  Coffee,
  GitBranch,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Atom,
  Triangle,
  Wind,
  Server,
  Database
};

export const HERO_DATA = data.HERO_DATA;

export const SKILLS_DATA: SkillCategory[] = data.SKILLS_DATA.map(category => ({
  ...category,
  icon: ICON_MAP[category.icon] || Code2
}));

export const PROJECTS_DATA: Project[] = data.PROJECTS_DATA;

export const TIMELINE_DATA: TimelineItem[] = data.TIMELINE_DATA;

export const STATS_DATA: Stat[] = data.STATS_DATA.map(stat => ({
  ...stat,
  icon: ICON_MAP[stat.icon] || Code2
}));

export const SOCIAL_LINKS: SocialLink[] = data.SOCIAL_LINKS.map(link => ({
  ...link,
  icon: ICON_MAP[link.icon] || Mail
}));
