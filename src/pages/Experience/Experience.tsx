import './Experience.css';
import type { Experience } from '../../types';

function Experience() {
    const experiences: Experience[] = [
        {
            id: 1,
            title: "Software Engineer Intern",
            company: "eClinicalWorks",
            location: "Boston, USA",
            period: "Jun 2025 – Present",
            responsibilities: [
                "Developed AI prompts to convert speech-to-text conversations into structured JSON for vision test automation",
                "Debugged memory leaks in Angular and implemented new features with unit testing and peer code reviews",
                "Assisted with Spring Boot service maintenance and performed code refactoring to improve system performance"
            ]
        },
        {
            id: 2,
            title: "Senior Software Engineer",
            company: "Accenture",
            location: "Hyderabad, India",
            period: "Mar 2022 – Dec 2023",
            responsibilities: [
                "Led the development of data extraction models from industry drawings using Python, improving accuracy by 45%",
                "Developed optimized algorithms to process over 100 interconnected drawings, reducing manual efforts by 72%",
                "Parallelized client-specific file processing using Docker and Python multiprocessing, slashing runtime by 64%"
            ]
        },
        {
            id: 3,
            title: "Software Engineer",
            company: "Accenture",
            location: "Hyderabad, India",
            period: "Sep 2020 – Feb 2022",
            responsibilities: [
                "Migrated standalone data extraction tool to Azure Cloud, achieving 33% higher up-time and 100% data resiliency",
                "Improved the application's performance and integrated it with React and APIs in Java, increasing usability by 75%",
                "Devised efficient bulk report and output file generation using Flask, decreasing product delivery time by 36%"
            ]
        }
    ];

    return (
        <div className="experience">
            <h1>Professional Experience</h1>
            <p className="page-description">
                My journey as a software engineer, from building cloud solutions at Accenture to developing healthcare applications at eClinicalWorks.
            </p>

            <div className="timeline">
                {experiences.map(exp => (
                    <div key={exp.id} className="timeline-item">
                        <div className="timeline-content">
                            <h3>{exp.title}</h3>
                            <div className="experience-meta">
                                <span className="company">{exp.company}</span>
                                <span className="separator">•</span>
                                <span className="location">{exp.location}</span>
                                <span className="separator">•</span>
                                <span className="period">{exp.period}</span>
                            </div>
                            <ul className="responsibilities">
                                {exp.responsibilities.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <section className="teaching-section">
                <h2>Teaching Experience</h2>
                <div className="teaching-card">
                    <h3>Teaching Assistant - Object Oriented Design</h3>
                    <p className="teaching-meta">Northeastern University • Jan 2024 - Present</p>
                    <p>
                        Guiding over 400 students on design patterns and Test-Driven Development (TDD) in Java, helping them understand SOLID principles and write maintainable, scalable code.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Experience;