import './About.css';

function About() {
  const skills = {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "Go", "C", "C++", "C#", ".NET", "R"],
    web: ["React", "Angular", "Node.js", "Django", "Express", "REST APIs", "GraphQL", "WebSockets"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "SQLite", "Cosmos DB"],
    cloud: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    tools: ["Git", "Spring Boot", "Kafka", "GitLab", "GitHub Actions", "TensorFlow"]
  };

  return (
    <div className="about">
      <h1>About Me</h1>
      
      <section className="about-intro">
        <p>
          I'm a Full-Stack Developer and Software Engineer currently pursuing my Master's in 
          Computer Science at Northeastern University (GPA: 4.0/4.0). With over 3 years of 
          professional experience at Accenture and current internship at eClinicalWorks, 
          I've worked on diverse projects ranging from cloud migrations to AI-powered applications.
        </p>
        <p>
          I'm passionate about building scalable solutions, exploring new technologies, and 
          solving complex problems. Currently, I'm focusing on cloud development, machine learning, 
          and creating efficient full-stack applications.
        </p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Northeastern University</h3>
          <p className="degree">Master of Science in Computer Science</p>
          <p className="meta">Jan 2024 – Dec 2025 (Expected) • GPA: 4.0/4.0</p>
        </div>
        <div className="education-item">
          <h3>National Institute of Technology Hamirpur</h3>
          <p className="degree">Bachelor of Technology in Computer Science</p>
          <p className="meta">Aug 2016 – Jun 2020 • GPA: 3.5/4.0</p>
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-tags">
            {skills.languages.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Web Technologies</h3>
          <div className="skill-tags">
            {skills.web.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Databases</h3>
          <div className="skill-tags">
            {skills.databases.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Cloud & DevOps</h3>
          <div className="skill-tags">
            {skills.cloud.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools & Frameworks</h3>
          <div className="skill-tags">
            {skills.tools.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications & Awards</h2>
        <ul>
          <li>Microsoft Azure Fundamentals (AZ-900)</li>
          <li>Crafting Quality Code - Coursera</li>
          <li>"Best Priority Setter" Award at Accenture</li>
        </ul>
      </section>

    </div>
  );
}

export default About;