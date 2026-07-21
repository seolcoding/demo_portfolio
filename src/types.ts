export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  teamSize: number;
  problem: string;
  research: string;
  action: string;
  result: {
    text: string;
    metrics?: { label: string; before: string; after: string; change: string }[];
    badge?: string;
  };
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string[];
  type: 'education' | 'experience' | 'intern';
}

export interface SkillCategory {
  title: string;
  items: string[];
}
