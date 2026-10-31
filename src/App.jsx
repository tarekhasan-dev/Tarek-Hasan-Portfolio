import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

import { useEffect, useRef } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import ProjectDetails from "./pages/ProjectDetails";
import "./App.css";

// ==================================
// PROJECT DATA
// ==================================

const projects = [
  {
    number: "01",
    title: "BazarDor",
    category: "Price Tracking Platform",
    description:
      "A data-driven platform for monitoring and comparing essential commodity prices across Bangladesh.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "/projects/project-one",
  },
  {
    number: "02",
    title: "FitLog",
    category: "Fitness Application",
    description:
      "A web application designed to make fitness tracking easier and more organized.",
    tech: ["React", "JavaScript", "API"],
    link: "/projects/project-two",
  },
  {
    number: "03",
    title: "Dev Stack Builder",
    category: "Web Application",
    description:
      "A responsive web project built to explore modern frontend development.",
    tech: ["React", "JavaScript", "CSS"],
    link: "/projects/project-three",
  },
  {
    number: "04",
    title: "DEVCONF 2026",
    category: "Developer Conference Website",
    description:
      "A conference website showcasing event information, speakers, pricing, and contact details.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "/projects/project-four",
    demo: "https://devconf-2026-as-1.vercel.app/",
    github: "https://github.com/tarekhasan-dev/DEVCONF-2026-AS-1",
  },
];

// ==================================
// SCROLL HANDLING ON ROUTE CHANGE
// ==================================

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);

      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 0);

      return () => clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

// ==================================
// ANIMATED PROJECT PREVIEW
// ==================================

function AnimatedProjectPreview({ number }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!["01", "03", "04"].includes(number)) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrame = null;
    let particles = [];
    let width = 0;
    let height = 0;
    let time = 0;
    let visible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: 45 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      }));

      if (reduceMotion) drawCurrent();
    };

    // BAZARDOR ANIMATION

    const drawBazar = () => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      gradient.addColorStop(0, "#064e3b");
      gradient.addColorStop(1, "#16a34a");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 1;

      for (let i = 1; i < 5; i++) {
        const y = (height / 5) * i;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.beginPath();

      for (let x = 0; x <= width; x += 3) {
        const y =
          height * 0.55 +
          Math.sin(x * 0.025 + time) * 22 +
          Math.sin(x * 0.07 + time * 1.5) * 9;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = "#bbf7d0";
      ctx.lineWidth = 3;
      ctx.shadowColor = "#86efac";
      ctx.shadowBlur = 12;

      ctx.stroke();
      ctx.shadowBlur = 0;

      time += 0.025;
    };

    // DEV STACK BUILDER ANIMATION

    const drawStack = () => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      gradient.addColorStop(0, "#312e81");
      gradient.addColorStop(1, "#7e22ce");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) {
          p.x = 0;
          p.vx = Math.abs(p.vx);
        } else if (p.x > width) {
          p.x = width;
          p.vx = -Math.abs(p.vx);
        }

        if (p.y < 0) {
          p.y = 0;
          p.vy = Math.abs(p.vy);
        } else if (p.y > height) {
          p.y = height;
          p.vy = -Math.abs(p.vy);
        }
      });

      ctx.lineWidth = 0.6;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];

          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);

            ctx.strokeStyle = `rgba(196,181,253,${
              1 - distance / 100
            })`;

            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = "#e9d5ff";
      ctx.shadowColor = "#c084fc";
      ctx.shadowBlur = 10;

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowBlur = 0;
    };

    // DEVCONF 2026 ANIMATION

    const drawDevconf = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        5,
        width * 0.5,
        height * 0.5,
        height * 0.75
      );

      glow.addColorStop(0, "rgba(255,127,80,0.13)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      for (let layer = 0; layer < 4; layer++) {
        ctx.beginPath();

        const amplitude = 15 + layer * 9;
        const frequency = 0.018 + layer * 0.003;
        const speed = time * (0.025 + layer * 0.008);
        const centerY = height * (0.43 + layer * 0.045);

        for (let x = 0; x <= width; x += 3) {
          const y =
            centerY +
            Math.sin(x * frequency + speed) * amplitude +
            Math.cos(x * 0.012 - speed) * 10;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = `rgba(255,127,80,${
          0.2 + layer * 0.13
        })`;

        ctx.lineWidth = 1.5;
        ctx.shadowColor = "#FF7F50";
        ctx.shadowBlur = 12;

        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      ctx.fillStyle = "#FF7F50";
      ctx.shadowColor = "#FF7F50";
      ctx.shadowBlur = 12;

      for (let i = 0; i < 35; i++) {
        const x =
          (i * 47 + time * (0.5 + (i % 3) * 0.2)) %
          Math.max(width, 1);

        const y =
          height * 0.5 +
          Math.sin(x * 0.02 + time * 0.03) * 45 +
          Math.cos(i * 2) * 20;

        const radius = 1 + Math.sin(time * 0.05 + i) * 0.7;

        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.5, radius), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      ctx.beginPath();

      const waveY = height * 0.78;

      for (let x = 0; x <= width; x += 3) {
        const y =
          waveY + Math.sin(x * 0.035 + time * 1.5) * 5;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = "rgba(255,127,80,0.7)";
      ctx.lineWidth = 1;
      ctx.shadowColor = "#FF7F50";
      ctx.shadowBlur = 8;

      ctx.stroke();
      ctx.shadowBlur = 0;

      time++;
    };

    function drawCurrent() {
      if (number === "01") drawBazar();
      if (number === "03") drawStack();
      if (number === "04") drawDevconf();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);

    const animate = () => {
      if (visible) {
        drawCurrent();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    resize();

    if (!reduceMotion) {
      animate();
    }

    window.addEventListener("resize", resize);

    return () => {
      observer.disconnect();

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("resize", resize);
    };
  }, [number]);

  // FITLOG FITNESS DASHBOARD

  if (number === "02") {
    return (
      <div className="animated-preview fitlog-preview">
        <div className="fitlog-top">
          <div>
            <small>FITNESS TRACKER</small>

            <h3>
              FIT<span>LOG.</span>
            </h3>
          </div>

          <div className="fitlog-live">
            <i />
            LIVE WORKOUT
          </div>
        </div>

        <div className="fitlog-main">
          <div className="fitlog-progress">
            <svg viewBox="0 0 160 160">
              <circle
                className="fitlog-track"
                cx="80"
                cy="80"
                r="65"
              />

              <circle
                className="fitlog-ring"
                cx="80"
                cy="80"
                r="65"
              />
            </svg>

            <div className="fitlog-progress-text">
              <strong>
                78<span>%</span>
              </strong>

              <small>GOAL DONE</small>
            </div>
          </div>

          <div className="fitlog-stats">
            <div>
              <small>CALORIES</small>
              <strong>
                486 <span>KCAL</span>
              </strong>
            </div>

            <div>
              <small>HEART RATE</small>
              <strong>
                124 <span>BPM</span>
              </strong>
            </div>

            <div>
              <small>DISTANCE</small>
              <strong>
                4.8 <span>KM</span>
              </strong>
            </div>
          </div>
        </div>

        <div className="fitlog-heart">
          <div className="fitlog-heart-label">
            <span>HEART RATE MONITOR</span>
            <strong>124 BPM</strong>
          </div>

          <svg
            viewBox="0 0 400 65"
            preserveAspectRatio="none"
          >
            <path
              className="fitlog-heart-line"
              d="M0 34 L45 34 L60 29 L72 39 L85 34 L110 34 L125 8 L140 57 L155 25 L170 34 L210 34 L225 29 L238 39 L250 34 L275 34 L290 8 L305 57 L320 25 L335 34 L400 34"
            />
          </svg>
        </div>

        <div className="fitlog-bottom">
          <span>● WORKOUT IN PROGRESS</span>
          <span>KEEP MOVING ↗</span>
        </div>
      </div>
    );
  }

  // DEVCONF 2026 PREVIEW

  if (number === "04") {
    return (
      <div className="animated-preview conf-preview">
        <canvas ref={canvasRef} />

        <div className="conf-content">
          <span>THE FUTURE OF DEVELOPMENT</span>

          <h2>DEVCONF</h2>

          <strong>2026</strong>

          <small>CONNECT · CREATE · INNOVATE</small>
        </div>

        <div className="conf-bottom">
          <span>TECHNOLOGY</span>
          <span>INNOVATION</span>
          <span>COMMUNITY</span>
        </div>
      </div>
    );
  }

  // CANVAS PREVIEWS

  return (
    <div className={`animated-preview canvas-preview preview-${number}`}>
      <canvas ref={canvasRef} />

      {number === "01" && (
        <div className="bazar-overlay">
          <div className="bazar-top">
            <span>BAZARDOR</span>
            <span className="live-indicator">● LIVE</span>
          </div>

          <div className="bazar-price">
            <small>MARKET PRICE INDEX</small>
            <strong>৳ ১২৫.৫০</strong>
            <span>↗ Market Overview</span>
          </div>

          <div className="bazar-bottom">
            <span>PRICE TRACKING</span>
            <span>UPDATED TODAY</span>
          </div>
        </div>
      )}

      {number === "03" && (
        <div className="stack-overlay">
          <span>DEV STACK BUILDER</span>
          <strong>Build your stack.</strong>

          <div>
            <i>REACT</i>
            <i>NEXT.JS</i>
            <i>NODE.JS</i>
          </div>
        </div>
      )}
    </div>
  );
}

// ==================================
// PROJECT CARD
// ==================================

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        to={project.link}
        className="project-preview project-preview-link has-image"
        aria-label={`View ${project.title} project details`}
      >
        <AnimatedProjectPreview number={project.number} />

        <span className="project-index">
          PROJECT / {project.number}
        </span>

        <div className="project-preview-title">
          {project.title}
          <span>↗</span>
        </div>
      </Link>

      <div className="project-info">
        <p className="project-category">{project.category}</p>

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

// ==================================
// HOME PAGE
// ==================================

function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <main>
        {/* ABOUT */}
        <About />

        {/* SKILLS */}
        <Skills />

        {/* EXPERIENCE */}
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
                <h3>Bachelor of Business Administration</h3>
                <p>Management · Second-year student</p>
              </div>

              <span className="timeline-date">PRESENT</span>
            </article>

            <article className="timeline-item">
              <span className="timeline-number">02</span>

              <div>
                <p className="timeline-type">
                  PROFESSIONAL EXPERIENCE
                </p>

                <h3>SEO Specialist</h3>

                <p>
                  Experience in search engine optimization and improving
                  website visibility.
                </p>
              </div>

              <span className="timeline-date">3 YEARS</span>
            </article>

            <article className="timeline-item">
              <span className="timeline-number">03</span>

              <div>
                <p className="timeline-type">CURRENT FOCUS</p>
                <h3>Frontend Web Development</h3>

                <p>
                  Learning JavaScript, React, and modern web development
                  through practical projects.
                </p>
              </div>

              <span className="timeline-date">ONGOING</span>
            </article>
          </div>
        </section>

        {/* PROJECTS */}
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
            A selection of projects from my development journey.
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

        {/* CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          TH<span>.</span>
        </a>

        <p>Designed &amp; built with curiosity by Tarek Hasan.</p>

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

// ==================================
// MAIN APP
// ==================================

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

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