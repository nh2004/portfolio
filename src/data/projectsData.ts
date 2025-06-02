export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "https://project1.example.com",
    githubUrl: "https://github.com/username/project1"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates and team collaboration features.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Spring Boot", "PostgreSQL", "WebSocket"],
    liveUrl: "https://project2.example.com",
    githubUrl: "https://github.com/username/project2"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A comprehensive social media analytics dashboard with data visualization and reporting features.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "https://project3.example.com",
    githubUrl: "https://github.com/username/project3"
  }
];