import {
  siJavascript,
  siPython,
  siCplusplus,
  siHtml5,
  siCss3,
  siReact,
  siNodedotjs,
  siSpringboot,
  siExpress,
  siMongodb,
  siMysql,
  siGit,
  siGithub,
  siIntellijidea,
  siAdobelightroom,
  siVisualstudiocode,
} from 'simple-icons';

export interface Skill {
  name: string;
  icon: {
    path: string;
    color: string;
  };
}

export const skillsData: Skill[] = [
  { name: 'JavaScript', icon: { path: siJavascript.path, color: '#F7DF1E' } },
  { name: 'Python', icon: { path: siPython.path, color: '#3776AB' } },
  { name: 'C++', icon: { path: siCplusplus.path, color: '#00599C' } },
  { name: 'HTML', icon: { path: siHtml5.path, color: '#E34F26' } },
  { name: 'CSS', icon: { path: siCss3.path, color: '#1572B6' } },
  { name: 'React', icon: { path: siReact.path, color: '#61DAFB' } },
  { name: 'Node.js', icon: { path: siNodedotjs.path, color: '#339933' } },
  { name: 'Express.js', icon: { path: siExpress.path, color: '#000000' } },
  { name: 'Spring Boot', icon: { path: siSpringboot.path, color: '#6DB33F' } },
  { name: 'MongoDB', icon: { path: siMongodb.path, color: '#47A248' } },
  { name: 'SQL', icon: { path: siMysql.path, color: '#4169E1' } },
  { name: 'Git', icon: { path: siGit.path, color: '#F05032' } },
  { name: 'GitHub', icon: { path: siGithub.path, color: '#181717' } },
  { name: 'IntelliJ IDEA', icon: { path: siIntellijidea.path, color: '#000000' } },
  { name: 'VS Code', icon: { path: siVisualstudiocode.path, color: '#007ACC' } },
];