import { Link } from "react-router-dom";
import './Home.module.css';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <h1 className="hero-title">
                    Hi, I'm <span className="accent-text">Aditya Narla</span>
                </h1>
                <p className="hero-subtitle">
                    Full-Stack Developer | Software Engineer | Cloud Developer
                </p>
                <p className="hero-description">
                    Master's student at Northeastern University with experience in building scalable applications, cloud solutions, and AI-powered systems.
                </p>

                <div className="hero-buttons">
                    <Link to={"/projects"} className="btn btn-primary">
                        View Projects
                    </Link>
                    <br />
                    <a 
                        href="https://github.com/aditya-narla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        GitHub Profile
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Home;