import './ProjectCard.css';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag-small">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub →
          </a>
        )}
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;