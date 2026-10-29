
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import ProjectDetails from "./pages/ProjectDetails";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "BazarDor",
    category: "Price Tracking Platform",
    description:
      "A data-driven platform for monitoring and comparing essential commodity prices across Bangladesh.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "/projects/project-one",
    image: "/bazardor.png",
  },
  {
    number: "02",
    title: "FitLog",
    category: "Fitness Application",
    description:
      "A web application designed to make fitness tracking easier and more organized.",
    tech: ["React", "JavaScript", "API"],
    link: "/projects/project-two",
    image: "/fitlog.png",
  },
  {
    number: "03",
    title: "Dev Stack Builder",
    category: "Web Application",
    description:
      "A responsive web project built to explore modern frontend development.",
    tech: ["React", "JavaScript", "CSS"],
    link: "/projects/project-three",
    image: "/terminal.jpg",
  },
  {
    number: "04",
    title: "DEVCONF 2026",
    category: "Developer Conference Website",
    description:
      "A conference website showcasing event information, speakers, pricing, and contact details.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "/projects/project-four",
    image: "/devconf.png",
    demo: "https://devconf-2026-as-1.vercel.app/",
    github:
      "https://github.com/tarekhasan-dev/DEVCONF-2026-AS-1",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
  "Responsive Design",
  "SEO",
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        to={project.link}
        className="project-preview project-preview-link has-image"
        aria-label={`View ${project.title} project details`}
      >
        <img
          src={project.image}
          alt={`${project.title} website screenshot`}
          className="project-preview-image"
          loading="lazy"
        />

        <div
          className="project-preview-overlay"
          aria-hidden="true"
        />

        <span className="project-index">
          PROJECT / {project.number}
        </span>

        <div className="project-preview-title">
          {project.title}
          <span>↗</span>
        </div>

       
      </Link>

      <div className="project-info">
        <p className="project-category">
          {project.category}
        </p>

        

        <p className="project-description">
          {project.description}
        </p>

        <div className="tech-list">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          <Link to={project.link} className="text-link">
            Project details ↗
          </Link>

          {project.demo && (
            <a
              href={project.demo}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Live demo ↗
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          Tarek Hasan<span>.</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          id="main-navigation"
          className={
            menuOpen
              ? "nav-links nav-open"
              : "nav-links"
          }
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a
            href="#contact"
            className="nav-contact"
            onClick={closeMenu}
          >
            Let&apos;s Talk ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              WEB DEVELOPER · SEO SPECIALIST
            </p>

            <h1>
              Hi, I&apos;m Tarek.
              <br />
              I build things
              <br />
              for the <span>web.</span>
            </h1>

            <p className="hero-description">
              I create clean, responsive digital experiences
              while continuously learning and solving
              real-world problems through technology.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="button button-dark"
              >
                Explore My Work ↗
              </a>

              <a
                href="#contact"
                className="button button-outline"
              >
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/tarekhasan-dev"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/tarek-hasan-dev"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-frame">
              <img
                src="/profile.png"
                alt="Tarek Hasan"
                className="profile-image"
              />

              <div className="profile-label">
                <span className="status-dot" />
                Available to learn &amp; collaborate
              </div>
            </div>

            <div
              className="hero-decoration"
              aria-hidden="true"
            >
              TH.
            </div>
          </div>

          <div className="hero-bottom">
            <span>BASED IN BANGLADESH</span>
            <span>BUILDING · LEARNING · IMPROVING</span>
          </div>
        </section>

        <div
          className="marquee"
          aria-label="Creative development"
        >
          <div className="marquee-track">
            {Array.from({ length: 4 }, (_, index) => (
              <span key={index}>
                WEB DEVELOPMENT <b>✳</b>{" "}
                CREATIVE THINKING <b>✳</b>{" "}
                CONTINUOUS LEARNING <b>✳</b>
              </span>
            ))}
          </div>
        </div>

        <section
          className="section about-section"
          id="about"
        >
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>

            <h2>
              Curious mind.
              <br />
              <span>Practical solutions.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I&apos;m Tarek Hasan, a Management student
              and web development enthusiast with experience
              in SEO.
            </p>

            <p>
              I enjoy learning how technology works, solving
              programming problems, and building useful web
              experiences. My goal is to combine business
              understanding with technical skills to create
              meaningful digital products.
            </p>

            <a href="#contact" className="text-link">
              Let&apos;s work together ↗
            </a>
          </div>
        </section>

        <section
          className="section skills-section"
          id="skills"
        >
          <div className="section-heading">
            <p className="eyebrow">02 / MY TOOLKIT</p>

            <h2>
              Skills &amp; <span>technologies.</span>
            </h2>
          </div>

          <p className="section-intro">
            Tools and technologies I use while learning
            and building projects.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{skill}</span>

                <span
                  className="skill-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
        >
          <div className="section-heading">
            <p className="eyebrow">03 / MY JOURNEY</p>

            <h2>
              Education &amp; <span>experience.</span>
            </h2>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-number">01</span>

              <div>
                <p className="timeline-type">EDUCATION</p>

                <h3>
                  Bachelor of Business Administration
                </h3>

                <p>
                  Management · Second-year student
                </p>
              </div>

              <span className="timeline-date">
                PRESENT
              </span>
            </article>

            <article className="timeline-item">
              <span className="timeline-number">02</span>

              <div>
                <p className="timeline-type">
                  PROFESSIONAL EXPERIENCE
                </p>

                <h3>SEO Specialist</h3>

                <p>
                  Experience in search engine optimization
                  and improving website visibility.
                </p>
              </div>

              <span className="timeline-date">
                3 YEARS
              </span>
            </article>

            <article className="timeline-item">
              <span className="timeline-number">03</span>

              <div>
                <p className="timeline-type">
                  CURRENT FOCUS
                </p>

                <h3>Frontend Web Development</h3>

                <p>
                  Learning JavaScript, React, and modern
                  web development through practical projects.
                </p>
              </div>

              <span className="timeline-date">
                ONGOING
              </span>
            </article>
          </div>
        </section>

        <section
          className="section projects-section"
          id="projects"
        >
          <div className="section-heading">
            <p className="eyebrow">04 / SELECTED WORK</p>

            <h2>
              Things I&apos;ve <span>built.</span>
            </h2>
          </div>

          <p className="section-intro">
            A selection of projects from my development
            journey.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                project={project}
                key={project.number}
              />
            ))}
          </div>
        </section>

        <section
          className="section contact-section"
          id="contact"
        >
          <p className="eyebrow">05 / GET IN TOUCH</p>

          <h2>
            Have an idea?
            <br />
            Let&apos;s make it <span>happen.</span>
          </h2>

          <p className="contact-description">
            Interested in working together, discussing a
            project, or sharing ideas? Feel free to connect.
          </p>

          <a
            href="https://www.linkedin.com/in/tarek-hasan-dev"
            target="_blank"
            rel="noreferrer"
            className="button button-light"
          >
            Connect on LinkedIn ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          TH<span>.</span>
        </a>

        <p>
          Designed &amp; built with curiosity by Tarek Hasan.
        </p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>

        <span className="copyright">
          © {new Date().getFullYear()} Tarek Hasan
        </span>
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />

        <Route
          path="*"
          element={
            <main className="project-not-found">
              <h1>Page not found.</h1>
              <Link to="/">← Back to Home</Link>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
