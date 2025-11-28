import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: 'telegram' | 'automation' | 'vision' | 'nlp';
  challenge: string;
  solution: string;
  result: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  image: string;
  linkedin?: string;
  github?: string;
}

export interface JobPosition {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}