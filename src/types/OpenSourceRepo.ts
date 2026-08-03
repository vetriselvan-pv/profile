export interface OpenSourceRepo {
  id: string;
  name: string;
  stats: string;
  description: string;
  icon: string;
  type: 'commit' | 'pr';
}
