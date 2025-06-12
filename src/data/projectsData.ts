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
    title: "Inventory analysis website",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "project-id1.png",
    technologies: ["React", "Node.js", "SQL", "Express", "AI"],
    liveUrl: "",
    githubUrl: "https://github.com/nh2004/dbms-project-coffee-shop"
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