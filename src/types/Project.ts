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
