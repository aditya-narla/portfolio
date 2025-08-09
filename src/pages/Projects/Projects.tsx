import './Projects.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import type { Project } from '../../types';

function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Kanbas - Learning Management System",
      description: "Built a robust LMS using MERN stack with role-based access control. Supports 100+ concurrent users.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      githubLink: "https://github.com/aditya-narla"
    },
    {
      id: 2,
      title: "Stock Vision",
      description: "Stock Portfolio Builder with 12,000+ stocks using AlphaVantage API and design patterns.",
      technologies: ["Java", "AlphaVantage API", "Design Patterns"],
      githubLink: "https://github.com/aditya-narla"
    },
    {
      id: 3,
      title: "Volleyball Rally Analyzer",
      description: "Deep learning model for action recognition achieving 73.9% accuracy in rally prediction.",
      technologies: ["Python", "TensorFlow", "CNN", "LSTM"],
      githubLink: "https://github.com/aditya-narla"
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p className="page-description">
        Here are some of the projects I've worked on.
      </p>

      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;