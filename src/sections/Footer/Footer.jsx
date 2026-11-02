import {
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

// =========================================
// EDIT YOUR DETAILS HERE
// =========================================

const EMAIL = "hasantareksh@gmail.com";
const GITHUB = "https://github.com/tarekhasan-dev";
const LINKEDIN = "https://www.linkedin.com/in/tarekhasan-dev";

// FOOTER NAVIGATION LINKS
const NAVIGATE = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];

const WORK = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const CONNECT = [
  { label: "GitHub", href: GITHUB, external: true },
  { label: "LinkedIn", href: LINKEDIN, external: true },
  { label: "Email", href: `mailto:${EMAIL}` },
];

// =========================================
// FOOTER COMPONENT
// =========================================

function Footer() {
  // OPEN NAVBAR CONTACT MODAL
  const openContactModal = () => {
    window.dispatchEvent(new Event("open-contact-modal"));
  };

  // SCROLL TO TOP
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="ft" id="contact">
      <div className="ft-inner">

        {/* =====================================
            CTA CARD
        ===================================== */}

        <div className="ft-cta">
          <span className="ft-cta-glow" aria-hidden="true" />

          {/* STATUS BADGE */}
          <p className="ft-cta-tag">
            <i className="ft-live" aria-hidden="true" />
            open to new opportunities
          </p>

          {/* CTA TITLE */}
          <h2>Let&apos;s work together.</h2>

          {/* CTA DESCRIPTION */}
          <p className="ft-cta-text">
            Got a project, an internship, or a full-time role in mind?
            I&apos;d love to hear from you. Let&apos;s create something
            meaningful together.
          </p>

          {/* =====================================
              ANIMATED CONTACT BUTTON
          ===================================== */}

          <div className="ft-button-container">

            {/* DECORATIVE ANIMATED STARS */}
            <span className="ft-star ft-star-1" aria-hidden="true">
              ✦
            </span>

            <span className="ft-star ft-star-2" aria-hidden="true">
              ✧
            </span>

            <span className="ft-star ft-star-3" aria-hidden="true">
              ✦
            </span>

            <span className="ft-star ft-star-4" aria-hidden="true">
              ✧
            </span>

            <span className="ft-star ft-star-5" aria-hidden="true">
              ✦
            </span>

            <span className="ft-star ft-star-6" aria-hidden="true">
              ✧
            </span>

            <span className="ft-star ft-star-7" aria-hidden="true">
              ✦
            </span>

            <span className="ft-star ft-star-8" aria-hidden="true">
              ✧
            </span>

            {/* CONTACT BUTTON */}
            <button
              type="button"
              className="ft-animated-btn"
              onClick={openContactModal}
            >
              <span>Let&apos;s talk</span>

              {/* ARROW ICON */}
              <span className="ft-btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />

                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* =====================================
            FOOTER MAIN LINKS
        ===================================== */}

        <div className="ft-main">

          {/* BRAND INFORMATION */}
          <div className="ft-brand">
            <a
              href="#home"
              className="ft-logo"
              aria-label="Back to home"
            >
              Tarek Hasan<span>.</span>
            </a>

            <p>
              From search rankings to React components, I build web
              products that perform for people and for business.
            </p>

            <p className="ft-code">
              <span>//</span> open to internships, freelance and
              full-time roles.
            </p>
          </div>

          {/* FOOTER NAVIGATION */}
          <nav className="ft-cols" aria-label="Footer">

            {/* NAVIGATE */}
            <div className="ft-col">
              <h3>Navigate</h3>

              <ul>
                {NAVIGATE.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* MY WORK */}
            <div className="ft-col">
              <h3>My work</h3>

              <ul>
                {WORK.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONNECT */}
            <div className="ft-col">
              <h3>Connect</h3>

              <ul>
                {CONNECT.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(
                        link.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {}
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* =====================================
            FOOTER BADGES
        ===================================== */}

        <div className="ft-badges">

          {/* BACK TO TOP BUTTON */}
          <button
            type="button"
            className="ft-top"
            onClick={scrollTop}
            aria-label="Scroll to top of page"
            title="Back to top"
          >
            <FaArrowUp aria-hidden="true" />
            <span>Back to top</span>
          </button>

          {/* SOCIAL PILLS */}
          <div className="ft-pills">

            {/* GITHUB */}
            <a
              className="ft-pill"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" />

              <span>
                <small>View code on</small>
                GitHub
              </span>
            </a>

            {/* LINKEDIN */}
            <a
              className="ft-pill"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn aria-hidden="true" />

              <span>
                <small>Connect on</small>
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* =====================================
          FOOTER BOTTOM BAR
      ===================================== */}

      <div className="ft-bar">
        <div className="ft-bar-inner">

          {/* COPYRIGHT */}
          <p>
            © {new Date().getFullYear()} Tarek Hasan
            <span> · Designed &amp; built with curiosity.</span>
          </p>

          {/* SOCIAL LINKS */}
          <div className="ft-social">

            {/* GITHUB */}
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* LINKEDIN */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            {/* EMAIL */}
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;