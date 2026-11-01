
import { useState } from "react";
import { createPortal } from "react-dom";
import "./About.css";

const features = [
  {
    id: "web",
    badge: ">_",
    title: "Web Development",
    subtitle: "Full-Stack & Responsive Systems",
    description:
      "I enjoy building modern, responsive, and user-friendly web applications. My focus is on creating seamless digital experiences using modern frontend and backend technologies.",
    highlights: [
      "Frontend Development",
      "React & Next.js",
      "Responsive Web Design",
      "Modern Web Technologies",
    ],
  },
  {
    id: "problem",
    badge: "✓",
    title: "Problem Solving",
    subtitle: "Logical Thinking & Optimization",
    description:
      "I approach challenges with logical thinking and a structured mindset. I believe understanding a problem deeply is the first step toward building an effective solution.",
    highlights: [
      "Analytical Thinking",
      "Logical Problem Solving",
      "Debugging & Troubleshooting",
      "Code Optimization",
    ],
  },
  {
    id: "learning",
    badge: "☼",
    title: "Continuous Learning",
    subtitle: "Exploring Emerging Tech",
    description:
      "Technology never stands still, and neither should learning. I continuously explore new tools, technologies, and concepts to expand my technical knowledge.",
    highlights: [
      "Artificial Intelligence",
      "Machine Learning",
      "Cybersecurity",
      "Data Science",
    ],
  },
  {
    id: "creative",
    badge: "✦",
    title: "Creative Thinking",
    subtitle: "UI/UX & Innovative Design",
    description:
      "I combine creativity with technical understanding to develop meaningful digital experiences. I care about usability, visual consistency, and thoughtful design decisions.",
    highlights: [
      "UI/UX Design Concepts",
      "Creative Problem Solving",
      "User-Centered Design",
      "Visual Consistency",
    ],
  },
];

function About() {
  const [activeFeature, setActiveFeature] = useState(null);

  const closeModal = () => setActiveFeature(null);

  return (
    <section className="abt-section" id="about">
      {/* ANIMATED BACKGROUND */}
      <div className="abt-bg" aria-hidden="true">
        <span className="abt-orbit abt-orbit-1" />
        <span className="abt-orbit abt-orbit-2" />
        <span className="abt-cube" />

        <span className="abt-orb abt-orb-1" />
        <span className="abt-orb abt-orb-2" />

        <span className="abt-dots abt-dots-1" />
        <span className="abt-dots abt-dots-2" />

        <span className="abt-tri abt-tri-1" />
        <span className="abt-tri abt-tri-2" />

        <span className="abt-symbol abt-symbol-1">{"</>"}</span>
        <span className="abt-symbol abt-symbol-2">{"{ }"}</span>
        <span className="abt-symbol abt-symbol-3">#</span>

        <span className="abt-particle abt-particle-1" />
        <span className="abt-particle abt-particle-2" />
        <span className="abt-particle abt-particle-3" />
      </div>

      <div className="abt-container">
        {/* LEFT: INTRODUCTION CARD */}
        <div className="abt-left">
          <div className="abt-card">
            <div className="abt-card-heading">
              <div className="abt-card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" />
                  <path d="M19 14l1.2 3.1L23 18l-2.8 1-1.2 3-1.1-3-2.9-1 2.9-.9L19 14z" />
                </svg>
              </div>

              <h3>
                A curious mind with a passion for technology, innovation, and
                continuous growth.
              </h3>
            </div>

            <p>
              Passionate about Full Stack Web Development, with a focus on
              JavaScript, React, Next.js, and modern web technologies.
              Dedicated to building responsive, user-centric applications
              and creating seamless digital experiences. Currently exploring
              Artificial Intelligence, Machine Learning, and Cybersecurity
              while continuously expanding technical expertise.
            </p>

            <a href="#contact" className="abt-cta">
              <span>Let&apos;s Connect</span>
              <b>↗</b>
            </a>

            <div className="abt-card-corner" />
          </div>
        </div>

        {/* RIGHT: HEADING + HIGHLIGHTS */}
        <div className="abt-right">
          <h2>
            A business mindset
            <span className="abt-name">with developer skills.</span>
          </h2>

          <p className="abt-tagline">
            I turn business understanding and technical curiosity into
            meaningful digital solutions.
          </p>

          {/* FEATURE CARDS */}
          <div className="abt-highlights">
            {features.map((item) => (
              <button
                type="button"
                key={item.id}
                className="abt-highlight"
                onClick={() => setActiveFeature(item)}
                aria-label={`View details about ${item.title}`}
              >
                <div className="abt-highlight-icon">
                  <span className="abt-highlight-badge">{item.badge}</span>
                </div>

                <div className="abt-highlight-content">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>

                <span className="abt-highlight-arrow">↗</span>
              </button>
            ))}
          </div>

          <div className="abt-decoration">
            <span />
          </div>
        </div>
      </div>

      {/* FEATURE DETAILS MODAL */}
      {activeFeature &&
        createPortal(
          <div
            className="abt-modal-overlay"
            onClick={closeModal}
            role="presentation"
          >
            <div
              className="abt-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="abt-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="abt-modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ×
              </button>

              <div className="abt-modal-icon">
                <span>{activeFeature.badge}</span>
              </div>

              <span className="abt-modal-label">ABOUT MY EXPERTISE</span>

              <h3 id="abt-modal-title">{activeFeature.title}</h3>

              <p className="abt-modal-subtitle">
                {activeFeature.subtitle}
              </p>

              <p className="abt-modal-description">
                {activeFeature.description}
              </p>

              <div className="abt-modal-divider" />

              <h4>What I Focus On</h4>

              <ul className="abt-modal-list">
                {activeFeature.highlights.map((highlight, index) => (
                  <li key={index}>
                    <span>✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="abt-modal-done"
                onClick={closeModal}
              >
                Got it <span>↗</span>
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

export default About;
