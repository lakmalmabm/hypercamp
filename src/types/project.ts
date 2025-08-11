export interface TeamMember {
  name: string;
  x?: string;
  title: string;
}

export interface Project {
  name: string;
  description: string;
  logo: string;
  x?: string;
  discord?: string;
  telegram?: string;
  medium?: string;
  web?: string;
  other_links?: string[];
  category: string;
  tags?: string[];
  status: string;
  team?: TeamMember[];
}