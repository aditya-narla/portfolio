export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface ExperienceType {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}