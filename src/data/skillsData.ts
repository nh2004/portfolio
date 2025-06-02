import { siJavascript, siPython, siCplusplus, siHtml5, siCss3, siReact, siNodedotjs, siSpringboot, siMongodb, siPostgresql, siGit, siGithub, siIntellijidea, siAdobelightroom } from 'simple-icons';

export interface Skill {
  name: string;
  icon: {
    path: string;
    color: string;
  };
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: { path: siJavascript.path, color: '#F7DF1E' } },
      { name: 'Python', icon: { path: siPython.path, color: '#3776AB' } },
      { name: 'C++', icon: { path: siCplusplus.path, color: '#00599C' } },
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: { path: siHtml5.path, color: '#E34F26' } },
      { name: 'CSS', icon: { path: siCss3.path, color: '#1572B6' } },
      { name: 'React', icon: { path: siReact.path, color: '#61DAFB' } },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: { path: siNodedotjs.path, color: '#339933' } },
      { name: 'Spring Boot', icon: { path: siSpringboot.path, color: '#6DB33F' } },
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', icon: { path: siMongodb.path, color: '#47A248' } },
      { name: 'PostgreSQL', icon: { path: siPostgresql.path, color: '#4169E1' } },
    ]
  },
  {
    category: 'Development Tools',
    skills: [
      { name: 'Git', icon: { path: siGit.path, color: '#F05032' } },
      { name: 'GitHub', icon: { path: siGithub.path, color: '#181717' } },
      { name: 'IntelliJ IDEA', icon: { path: siIntellijidea.path, color: '#000000' } },
    ]
  },
  {
    category: 'Other Skills',
    skills: [
      { name: 'Adobe Lightroom', icon: { path: siAdobelightroom.path, color: '#31A8FF' } },
    ]
  }
];