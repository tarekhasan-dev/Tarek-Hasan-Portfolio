import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDesktop,
  FaReact,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Link, useParams } from "react-router-dom";

import "./ProjectDetails.css";

const projectData = {
  "project-one": {
    number: "01",
    title: "BazarDor",
    category: "Price Tracking Platform",
    description:
      "BazarDor is a platform focused on helping users explore essential commodity prices in Bangladesh.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/tarekhasan-dev/bazar-dor.git",
    liveUrl: "https://bazar-dor-beta-cyan.vercel.app/",
    challenges:
      "Organizing commodity information and presenting price data in a clear, user-friendly interface.",
    futurePlans:
      "Improve price history visualization, search functionality, and the overall user experience.",
  },

  "project-two": {
    number: "02",
    title: "FitLog",
    category: "Fitness & Wellness Application",
    description:
      "FitLog is a fitness-focused web application designed to organize fitness-related information in a clear, accessible, and user-friendly experience.",
    technologies: ["React", "JavaScript", "API Integration"],
    githubUrl: "https://github.com/tarekhasan-dev/fit-log.git",
    liveUrl: "https://fit-log-two-lake.vercel.app/",
    challenges:
      "Creating a responsive interface while keeping fitness-related information organized and easy to navigate.",
    futurePlans:
      "Refine the user experience, expand useful fitness functionality, and improve information presentation.",
  },

  "project-three": {
    number: "03",
    title: "Dev Stack Builder",
    category: "Web Application",
    description:
      "Dev Stack Builder is a frontend project built to practice modern web development with React.",
    technologies: ["React", "JavaScript", "CSS"],
    githubUrl:
      "https://github.com/tarekhasan-dev/dev-stack-builder.git",
    liveUrl: "https://dev-stack-builder-lemon.vercel.app/",
    challenges:
      "Building reusable interface components and keeping the layout responsive.",
    futurePlans:
      "Improve accessibility, usability, and responsive behavior.",
  },

  "project-four": {
    number: "04",
    title: "DEVCONF 2026",
    category: "Developer Conference Website",
    description:
      "DEVCONF 2026 is a professionally designed conference website that facilitates event discovery and engagement for developers, technology enthusiasts, and industry professionals. The platform provides structured access to key event details, speaker profiles, ticketing information, and essential resources through an intuitive and user-friendly interface. Built with a focus on usability, responsive design, and streamlined navigation, DEVCONF 2026 delivers a cohesive digital experience that simplifies how users explore and interact with the event.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    githubUrl:
      "https://github.com/tarekhasan-dev/DEVCONF-2026-AS-1",
    liveUrl: "https://devconf-2026-as-1.vercel.app/",
    challenges:
      "One of the key challenges was structuring diverse conference information into a cohesive and intuitive user experience without compromising visual consistency. The approach focused on establishing a clear content hierarchy, optimizing information accessibility, and developing a responsive layout that adapts seamlessly across different screen sizes. Careful attention to spacing, navigation, and visual organization helped create a polished interface that balances usability, clarity, and modern design principles.",
    futurePlans:
      "Future development will focus on expanding the platform’s functionality while enhancing usability, accessibility, and overall performance. Planned improvements include integrating dynamic event schedules, interactive speaker profiles, and a streamlined registration system to create a more engaging experience for attendees. Additional enhancements will prioritize cross-device consistency, accessibility standards, and performance optimization, ensuring the platform remains scalable, maintainable, and adaptable to evolving user needs.",
  },
};

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
                  A gathering of developers, creators, and
                  technology enthusiasts shaping what comes next.
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

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projectData[projectId];
  const isDevconf = projectId === "project-four";

  if (!project) {
    return (
      <main className="project-not-found">
        <h1>Project not found.</h1>

        <Link to="/">← Back to Home</Link>
      </main>
    );
  }

  return (
    <main
      className={`project-details ${
        isDevconf ? "devconf-details" : ""
      }`}
    >
      <Link to="/#projects" className="text-link">
        ← Back to Projects
      </Link>

      <header className="project-detail-header">
        <p className="eyebrow">
          PROJECT / {project.number}
        </p>

        <p className="project-category">
          {project.category}
        </p>

        <h1>{project.title}</h1>

        {!isDevconf && (
          <p className="project-detail-description">
            {project.description}
          </p>
        )}

        <div className="project-detail-actions">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-dark"
          >
            View Source Code ↗
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-outline"
          >
            Live Demo ↗
          </a>
        </div>
      </header>

      {isDevconf ? (
        <DevconfShowcase project={project} />
      ) : (
        <section className="project-detail-preview">
          <span>{project.title}</span>

          <span className="project-detail-number">
            {project.number}
          </span>
        </section>
      )}

      <section className="project-detail-content">
        <div className="detail-block">
          <p className="eyebrow">01 / OVERVIEW</p>

          <h2>About the project</h2>

          <p>{project.description}</p>
        </div>

        <div className="detail-block">
          <p className="eyebrow">02 / TECHNOLOGY</p>

          <h2>Tech stack</h2>

          <div
            className={
              isDevconf ? "devconf-tech-list" : "tech-list"
            }
          >
            {project.technologies.map((technology) => (
              <span
                className={
                  isDevconf ? "devconf-tech-item" : ""
                }
                key={technology}
              >
                {isDevconf && (
                  <span
                    className={`devconf-tech-icon devconf-icon-${technology
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    aria-hidden="true"
                  >
                    {techIcons[technology] || <FaLayerGroup />}
                  </span>
                )}

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
          <p className="eyebrow">04 / WHAT'S NEXT</p>

          <h2>Future improvements</h2>

          <p>{project.futurePlans}</p>
        </div>
      </section>

      {isDevconf && (
        <section className="devconf-process">
          <div>
            <p className="eyebrow">BEHIND THE BUILD</p>

            <h2>
              BUILT WITH PRECISION
              <br />
              Motion with purpose.
            </h2>

            <p>
              Every detail is shaped with purpose, from the
              visual rhythm to the smallest interaction. A
              carefully considered interface brings clarity,
              character, and technical craftsmanship together
              in a cohesive digital experience.
            </p>
          </div>

          <div className="devconf-process-steps">
            {[
              [
                "01",
                "Design",
                "Build a clear visual hierarchy.",
              ],
              [
                "02",
                "Develop",
                "Create responsive page sections.",
              ],
              [
                "03",
                "Refine",
                "Polish details and interactions.",
              ],
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
      )}

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

export default ProjectDetails;