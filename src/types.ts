export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  quote?: string;
  tags: string[];
  image?: string;
  type: 'large' | 'tall' | 'wide' | 'standard';
  metrics?: { label: string; value: string }[];
  highlights?: string[];
  logs?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface BlogArticle {
  id: string;
  date: string;
  title: string;
  summary: string;
  tags: string[];
  readTime: string;
  content: string;
}

export interface Achievement {
  id: string;
  period: string;
  title: string;
  description: string;
  tags?: string[];
  verifiedId?: string;
  isActive?: boolean;
}

export interface OpenSourceRepo {
  id: string;
  name: string;
  stats: string;
  description: string;
  icon: string;
  type: 'commit' | 'pr';
}

export interface SkillCategory {
  title: string;
  file: string;
  icon: string;
  type: 'tags' | 'progress' | 'checks' | 'list';
  items: Array<{ name: string; percentage?: number; checked?: boolean }>;
}

export interface BioData {
  idBadge: string;
  whoAmI: string;
  title: string;
  highlightedTitle: string;
  bioText: string;
  location: string;
  availability: string;
  yearsExp: string;
  commitsPerWk: string;
  projectShips: string;
  imageUrl: string;
}

export interface ExperienceProject {
  name: string;
  role: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  location: string;
  period: string;
  role: string;
  projects: ExperienceProject[];
}

export interface Recommendation {
  id: string;
  name: string;
  title: string;
  date: string;
  text: string;
  image?: string;
}
