export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  date: string;
  link?: string;
}

export interface Award {
  id: string;
  title: string;
  description?: string;
  date?: string;
}

export interface CodingStats {
  totalQuestions?: number;
  totalActiveDays?: number;
  totalContests?: number;
  leetcodeContests?: number;
  codechefContests?: number;
  fundamentalsSolved?: number;
  dsaSolved?: { easy: number; medium: number; hard: number };
}