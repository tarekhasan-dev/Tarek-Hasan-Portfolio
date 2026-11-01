
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaBolt,
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaDesktop,
  FaExternalLinkAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

import "./ProjectDetails.css";

// =========================================
// PROJECT DATA
// =========================================

const projectData = {
  "project-one": {
    number: "01",
    title: "BazarDor",
    category: "Price Tracking Platform",

    description:
      "BazarDor is a Bangladesh-focused market price platform that helps users track essential commodity prices, explore product categories, and monitor price changes in one place.",

    overview:
      "The idea behind BazarDor came from a simple problem: essential commodity prices change often, and finding reliable numbers in one place is hard. The platform brings product categories, current prices, and detailed product views together in a few clean pages, so everyday shoppers can compare prices before they buy. The focus was on readability, with Bangla content and a layout that works well on both desktop and mobile.",

    highlights: [
      "Price tracking",
      "Bangladesh market data",
      "Clean, simple UI",
    ],

    technologies: ["Next.js", "React", "Tailwind CSS"],

    githubUrl: "https://github.com/tarekhasan-dev/bazar-dor.git",
    liveUrl: "https://bazar-dor-beta-cyan.vercel.app/",

    challenges:
      "Organizing commodity information and presenting price data in a clear, user-friendly interface.",

    futurePlans:
      "Improve price history visualization, search functionality, and the overall user experience.",

    showcaseImages: [
      {
        src: "/images/bazardor/bazardor.png",
        alt: "BazarDor Homepage",
      },
      {
        src: "/images/bazardor/bazardor-products.png",
        alt: "BazarDor Products",
      },
      {
        src: "/images/bazardor/bazardor-details.png",
        alt: "BazarDor Product Details",
      },
    ],
  },

  "project-two": {
    number: "02",
    title: "FitLog",
    category: "Fitness & Wellness Application",

    description:
      "FitLog is a fitness-focused web application designed to organize fitness-related information in a clear, accessible, and user-friendly experience.",

    overview:
      "FitLog started from the idea that a fitness app should feel motivating rather than cluttered. It combines a home view, a progress dashboard, and a workout section so users can check their stats and move between sections without friction. Building it was also a chance to practice structuring a multi-section React interface and working with API data.",

    highlights: [
      "Fitness tracking",
      "Organized information",
      "Responsive design",
    ],

    technologies: ["React", "JavaScript", "API Integration"],

    githubUrl: "https://github.com/tarekhasan-dev/fit-log.git",
    liveUrl: "https://fit-log-two-lake.vercel.app/",

    challenges:
      "Creating a responsive interface while keeping fitness-related information organized and easy to navigate.",

    futurePlans:
      "Refine the user experience, expand useful fitness functionality, and improve information presentation.",

    showcaseImages: [
      {
        src: "/images/fitlog/fitlog-home.png",
        alt: "FitLog Homepage",
      },
      {
        src: "/images/fitlog/fitlog-dashboard.png",
        alt: "FitLog Dashboard",
      },
      {
        src: "/images/fitlog/fitlog-workout.png",
        alt: "FitLog Workout Section",
      },
    ],
  },

  "project-three": {
    number: "03",
    title: "Dev Stack Builder",
    category: "Web Application",

    description:
      "Dev Stack Builder is a frontend project built to practice modern web development with React.",

    overview:
      "Dev Stack Builder is where I practiced building a React interface out of small, reusable pieces. Visitors can explore different technologies and see how they fit together into a stack. The project helped me get comfortable with component structure, state handling, and writing responsive CSS that holds up on different screen sizes.",

    highlights: [
      "Modern React",
      "Reusable components",
      "Responsive layout",
    ],

    technologies: ["React", "JavaScript", "CSS"],

    githubUrl: "https://github.com/tarekhasan-dev/dev-stack-builder.git",
    liveUrl: "https://dev-stack-builder-lemon.vercel.app/",

    challenges:
      "Building reusable interface components and keeping the layout responsive.",

    futurePlans:
      "Improve accessibility, usability, and responsive behavior.",

    showcaseImages: [
      {
        src: "/images/dev-stack-builder/dev-stack-home.png",
        alt: "Dev Stack Builder Homepage",
      },
      {
        src: "/images/dev-stack-builder/dev-stack-technologies.png",
        alt: "Dev Stack Builder Technologies",
      },
    ],
  },

  "project-four": {
    number: "04",
    title: "DEVCONF 2026",
    category: "Developer Conference Website",

    description:
      "DEVCONF 2026 is a responsive conference website that brings event details, speakers, ticketing, and resources together in one clear interface.",

    overview:
      "DEVCONF 2026 is a professionally designed conference website that facilitates event discovery and engagement for developers, technology enthusiasts, and industry professionals. The platform provides structured access to key event details, speaker profiles, ticketing information, and essential resources through an intuitive and user-friendly interface. Built with a focus on usability, responsive design, and streamlined navigation, it delivers a cohesive digital experience that simplifies how users explore and interact with the event.",

    highlights: [
      "Event information",
      "Speakers & tickets",
      "Responsive design",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive UI",
    ],

    githubUrl:
      "https://github.com/tarekhasan-dev/DEVCONF-2026-AS-1",

    liveUrl:
      "https://devconf-2026-as-1.vercel.app/",

    challenges:
      "One of the key challenges was structuring diverse conference information into a cohesive and intuitive user experience without compromising visual consistency. The approach focused on establishing a clear content hierarchy, optimizing information accessibility, and developing a responsive layout that adapts seamlessly across different screen sizes. Careful attention to spacing, navigation, and visual organization helped create a polished interface that balances usability, clarity, and modern design principles.",

    futurePlans:
      "Future development will focus on expanding the platform’s functionality while enhancing usability, accessibility, and overall performance. Planned improvements include integrating dynamic event schedules, interactive speaker profiles, and a streamlined registration system to create a more engaging experience for attendees. Additional enhancements will prioritize cross-device consistency, accessibility standards, and performance optimization, ensuring the platform remains scalable, maintainable, and adaptable to evolving user needs.",
  },
};

// =========================================
// TECHNOLOGY ICONS
// =========================================

const techIcons = {
  HTML5: <FaHtml5 />,
  HTML: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Responsive UI": <FaDesktop />,
  "API Integration": <FaCode />,
};

const highlightIcons = [
  <FaBolt />,
  <FaMapMarkerAlt />,
  <FaChartLine />,
];

// =========================================
// REAL PROJECT SCREENSHOT SHOWCASE
// =========================================

function ProjectShowcase({ project }) {
  const images = project.showcaseImages || [];

  if (images.length === 0) {
    return null;
  }

  return (
    <section
      className="project-image-showcase"
      aria-label={`${project.title} website screenshots`}
    >
      <div className="project-image-showcase-header">
        <div>
          <span className="project-image-label">
            PROJECT PREVIEW
          </span>

          <h2>{project.title}</h2>
        </div>

        <span className="project-image-count">
          {images.length} Screenshots
        </span>
      </div>

      <div className="project-image-main">
        <img
          src={images[0].src}
          alt={images[0].alt}
          loading="eager"
        />
      </div>

      {images.length > 1 && (
        <div className="project-image-gallery">
          {images.slice(1).map((image) => (
            <div
              className="project-image-item"
              key={image.src}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// =========================================
// DEVCONF 2026 ORIGINAL SHOWCASE
// =========================================

function DevconfShowcase({ project }) {
  return (
    <section className="devconf-showcase">
      <div className="devconf-showcase-top">
        <div className="devconf-brand">
          <span className="devconf-brand-mark">D</span>

          <span>
            DEVCONF <b>/ 2026</b>
          </span>
        </div>

        <span className="devconf-selected">
          SELECTED PROJECT · 2026
        </span>
      </div>

      <div className="devconf-stage">
        <div className="devconf-orbit devconf-orbit-one" />
        <div className="devconf-orbit devconf-orbit-two" />

        <div className="devconf-floating-label devconf-label-left">
          <span className="devconf-live-dot" />

          <div>
            <strong>Interactive preview</strong>
            <small>CSS-built showcase</small>
          </div>
        </div>

        <div className="devconf-browser">
          <div className="devconf-browser-bar">
            <div className="devconf-browser-dots">
              <i />
              <i />
              <i />
            </div>

            <span>devconf-2026-as-1.vercel.app</span>
          </div>

          <div className="devconf-screen">
            <div className="devconf-mockup">
              <nav className="devconf-mock-nav">
                <a
                  href="#devconf-preview-home"
                  className="devconf-mock-logo"
                >
                  DEVCONF<span>26</span>
                </a>

                <div className="devconf-mock-nav-links">
                  <span>About</span>
                  <span>Speakers</span>
                  <span>Schedule</span>
                </div>

                <span className="devconf-mock-nav-button">
                  Get Ticket ↗
                </span>
              </nav>

              <div
                className="devconf-mock-hero"
                id="devconf-preview-home"
              >
                <div className="devconf-mock-kicker">
                  <span className="devconf-live-dot" />
                  THE FUTURE IS BUILT TOGETHER
                </div>

                <h2>
                  Code.
                  <br />
                  Connect.
                  <br />
                  <span>Conquer.</span>
                </h2>

                <p>
                  A gathering of developers, creators, and technology
                  enthusiasts shaping what comes next.
                </p>

                <div className="devconf-mock-actions">
                  <span>Explore the event ↗</span>
                  <span>Discover more ↓</span>
                </div>

                <div className="devconf-mock-decoration">
                  <div className="devconf-mock-circle devconf-circle-one" />
                  <div className="devconf-mock-circle devconf-circle-two" />
                  <div className="devconf-mock-cross">+</div>
                  <div className="devconf-mock-year">2026</div>

                  <div className="devconf-mock-side-text">
                    INNOVATE / BUILD / REPEAT
                  </div>
                </div>
              </div>

              <div className="devconf-mock-bottom">
                <div>
                  <small>EVENT</small>
                  <strong>DEVCONF 2026</strong>
                </div>

                <div>
                  <small>COMMUNITY</small>
                  <strong>Developers Worldwide</strong>
                </div>

                <div>
                  <small>EXPERIENCE</small>
                  <strong>Learn · Build · Connect</strong>
                </div>
              </div>
            </div>

            <div className="devconf-scanline" />
          </div>
        </div>

        <div className="devconf-floating-label devconf-label-right">
          <strong>Design / Build / Iterate</strong>
          <small>Web experience · 2026</small>
          <br />
        </div>
      </div>

      <div className="devconf-showcase-bottom">
        <p>The developer community meets here</p>

        <span className="devconf-project-index">
          {project.number} / 04
        </span>
      </div>
    </section>
  );
}

// =========================================
// DEVCONF 2026 PAGE
// =========================================

function DevconfPage({ project }) {
  return (
    <main className="project-details devconf-details">
      <div className="dc-head-wrap">
        <Link to="/#projects" className="dc-back">
          <FaArrowLeft aria-hidden="true" />
          <span>Back to Projects</span>
        </Link>

        <section className="dc-card">
          <div className="dc-badges">
            <span className="dc-badge dc-badge-violet">
              <i className="dc-dot" />
              PROJECT / {project.number}
            </span>

            <span className="dc-badge dc-badge-green">
              <span className="dc-ping" aria-hidden="true" />
              LIVE PROJECT
            </span>

            <span className="dc-badge dc-badge-soft">
              <FaCode aria-hidden="true" />
              {project.category}
            </span>
          </div>

          <div className="dc-grid">
            <h1 className="dc-title">{project.title}</h1>

            <div className="dc-side">
              <p className="dc-lede">{project.description}</p>

              <ul className="dc-pills">
                {project.highlights.map((item, i) => (
                  <li key={item}>
                    <span className={`dc-pill-icon dc-pill-icon-${i % 3}`}>
                      {highlightIcons[i % 3]}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dc-actions">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dc-btn dc-btn-primary"
            >
              <FaGithub aria-hidden="true" />
              View Source Code
              <FaExternalLinkAlt className="dc-btn-ext" aria-hidden="true" />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dc-btn dc-btn-outline"
            >
              Live Demo
              <FaExternalLinkAlt className="dc-btn-ext" aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>

      <DevconfShowcase project={project} />

      <section className="project-detail-content">
        <div className="detail-block">
          <p className="eyebrow">01 / OVERVIEW</p>
          <h2>About the project</h2>
          <p>{project.overview}</p>
        </div>

        <div className="detail-block">
          <p className="eyebrow">02 / TECHNOLOGY</p>
          <h2>Tech stack</h2>

          <div className="devconf-tech-list">
            {project.technologies.map((technology) => (
              <span className="devconf-tech-item" key={technology}>
                <span
                  className={`devconf-tech-icon devconf-icon-${technology
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  aria-hidden="true"
                >
                  {techIcons[technology] || <FaLayerGroup />}
                </span>

                <span>{technology}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="detail-block">
          <p className="eyebrow">03 / CHALLENGES</p>
          <h2>Challenges &amp; approach</h2>
          <p>{project.challenges}</p>
        </div>

        <div className="detail-block">
          <p className="eyebrow">04 / WHAT&apos;S NEXT</p>
          <h2>Future improvements</h2>
          <p>{project.futurePlans}</p>
        </div>
      </section>

      <section className="devconf-process">
        <div>
          <p className="eyebrow">BEHIND THE BUILD</p>

          <h2>
            BUILT WITH PRECISION
            <br />
            Motion with purpose.
          </h2>

          <p>
            Every detail is shaped with purpose, from the visual rhythm
            to the smallest interaction. A carefully considered interface
            brings clarity, character, and technical craftsmanship
            together in a cohesive digital experience.
          </p>
        </div>

        <div className="devconf-process-steps">
          {[
            ["01", "Design", "Build a clear visual hierarchy."],
            ["02", "Develop", "Create responsive page sections."],
            ["03", "Refine", "Polish details and interactions."],
          ].map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="project-detail-contact">
        <div>
          <p className="eyebrow">HAVE A QUESTION?</p>
          <h2>Want to know more?</h2>
        </div>

        <Link to="/#contact" className="button button-dark">
          Contact Me ↗
        </Link>
      </section>
    </main>
  );
}

// =========================================
// PROJECT DETAILS PAGE ENTRY
// =========================================

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <main className="pd-page pd-not-found">
        <h1>Project not found.</h1>
        <Link to="/">← Back to Home</Link>
      </main>
    );
  }

  if (projectId === "project-four") {
    return <DevconfPage project={project} />;
  }

  return (
    <main className="pd-page">
      <span className="pd-orb pd-orb-a" aria-hidden="true" />
      <span className="pd-orb pd-orb-b" aria-hidden="true" />

      <div className="pd-inner">
        <Link to="/#projects" className="pd-back">
          <FaArrowLeft aria-hidden="true" />
          <span>Back to Projects</span>
        </Link>

        <section className="pd-card pd-head">
          <div className="pd-badges">
            <span className="pd-badge pd-badge-violet">
              <i className="pd-dot" />
              PROJECT / {project.number}
            </span>

            <span className="pd-badge pd-badge-green">
              <span className="pd-ping" aria-hidden="true" />
              LIVE PROJECT
            </span>

            <span className="pd-badge pd-badge-soft">
              <FaChartLine aria-hidden="true" />
              {project.category}
            </span>
          </div>

          <div className="pd-head-grid">
            <h1>{project.title}</h1>

            <div className="pd-head-side">
              <p className="pd-lede">
                {project.description}
              </p>

              <ul className="pd-pills">
                {project.highlights.map((item, i) => (
                  <li key={item}>
                    <span
                      className={`pd-pill-icon pd-pill-icon-${i % 3}`}
                    >
                      {highlightIcons[i % 3]}
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pd-actions">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-btn pd-btn-primary"
            >
              <FaGithub aria-hidden="true" />
              View Source Code
              <FaExternalLinkAlt
                className="pd-btn-ext"
                aria-hidden="true"
              />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-btn pd-btn-outline"
            >
              Live Demo
              <FaExternalLinkAlt
                className="pd-btn-ext"
                aria-hidden="true"
              />
            </a>
          </div>
        </section>

        <ProjectShowcase project={project} />

        <section className="pd-grid">
          <article className="pd-card pd-block pd-tone-1">
            <p className="pd-eyebrow">01 / OVERVIEW</p>
            <h2>About the project</h2>
            <p>{project.overview || project.description}</p>
          </article>

          <article className="pd-card pd-block pd-tone-2">
            <p className="pd-eyebrow">02 / TECHNOLOGY</p>
            <h2>Tech stack</h2>

            <div className="pd-chips">
              {project.technologies.map((tech) => (
                <span className="pd-chip" key={tech}>
                  <span className="pd-chip-icon" aria-hidden="true">
                    {techIcons[tech] || <FaLayerGroup />}
                  </span>

                  {tech}
                </span>
              ))}
            </div>
          </article>

          <article className="pd-card pd-block pd-tone-3">
            <p className="pd-eyebrow">03 / CHALLENGES</p>
            <h2>Challenges &amp; approach</h2>
            <p>{project.challenges}</p>
          </article>

          <article className="pd-card pd-block pd-tone-4">
            <p className="pd-eyebrow">04 / WHAT&apos;S NEXT</p>
            <h2>Future improvements</h2>
            <p>{project.futurePlans}</p>
          </article>
        </section>
      </div>
    </main>
  );
}

export default ProjectDetails;
