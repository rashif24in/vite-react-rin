export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  responsibilities?: string[];
  client?: string;
  duration?: string;
}