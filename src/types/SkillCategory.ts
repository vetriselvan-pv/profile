export interface SkillCategory {
  title: string;
  file: string;
  icon: string;
  type: 'tags' | 'progress' | 'checks' | 'list';
  items: Array<{ name: string; percentage?: number; checked?: boolean }>;
}
