import { ExperienceProject } from './ExperienceProject';

export interface Experience {
  company: string;
  location: string;
  period: string;
  role: string;
  projects: ExperienceProject[];
}
