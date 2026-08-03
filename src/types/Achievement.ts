export interface Achievement {
  id: string;
  period: string;
  title: string;
  description: string;
  tags?: string[];
  verifiedId?: string;
  isActive?: boolean;
}
