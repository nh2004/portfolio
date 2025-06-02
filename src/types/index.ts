export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  field: string;
  score: string;
  period: string;
  location: string;
}

export interface AchievementItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}