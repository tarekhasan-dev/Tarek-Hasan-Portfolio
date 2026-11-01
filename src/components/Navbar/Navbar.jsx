
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Mail,
  User,
  MessageSquare,
  Layers,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  Copy,
  Check,
  ShieldCheck,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Navbar.css";

// ========================================
// BRAND ICONS (inline SVG, no library needed)
// ========================================

function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

// ========================================
// SETTINGS
// ========================================

const CONTACT_EMAIL = "hasantareksh@gmail.com";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const EMAIL_READY = ![
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
].some((value) => value.startsWith("YOUR_"));

const MAX_MESSAGE = 500;

const PROJECT_TYPES = [
  "Website",
  "Web App",
  "Landing Page",
  "Bug Fix",
  "Other",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const navRef = useRef(null);
  const pillRef = useRef(null);
  const dialogRef = useRef(null);
  const nameInputRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const copyTimerRef = useRef(null);

  // ========================================
  // SLIDING PILL POSITION
  // ========================================

  const positionPill = (element) => {
    if (!element || !pillRef.current || !navRef.current) return;

    const linkRect = element.getBoundingClientRect();
    const wrapperRect = navRef.current.getBoundingClientRect();

    pillRef.current.style.width = `${linkRect.width}px`;
    pillRef.current.style.height = `${linkRect.height}px`;
    pillRef.current.style.transform = `translateX(${
      linkRect.left - wrapperRect.left
    }px)`;
    pillRef.current.style.opacity = "1";
  };

  const moveToActive = () => {
    const activeElement = navRef.current?.querySelector(
      `[data-nav="${activeLink}"]`
    );

    if (activeElement) positionPill(activeElement);
  };

  // ========================================
  // SCROLL HANDLER
  // ========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let currentSection = "home";

      NAV_LINKS.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = id;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ========================================
  // PILL: ACTIVE LINK + RESIZE + FONT LOAD
  // ========================================

  useEffect(() => {
    moveToActive();

    window.addEventListener("resize", moveToActive);
    document.fonts?.ready.then(moveToActive);

    return () => window.removeEventListener("resize", moveToActive);
  }, [activeLink]);

  // ========================================
  // MODAL: ESCAPE KEY
  // ========================================

  useEffect(() => {
    if (!modalOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape" && !sending) {
        setModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [modalOpen, sending]);

  // ========================================
  // MODAL: BODY SCROLL LOCK + FOCUS
  // ========================================

  useEffect(() => {
    if (!modalOpen) return;

    const previousOverflow = document.body.style.overflow;

    lastFocusedRef.current = document.activeElement;
    document.body.style.overflow = "hidden";
    nameInputRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      lastFocusedRef.current?.focus?.();
    };
  }, [modalOpen]);

  // Copy button timer cleanup
  useEffect(() => () => clearTimeout(copyTimerRef.current), []);

  // ========================================
  // HANDLERS
  // ========================================

  const handleNavigation = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  const openContactModal = () => {
    setMenuOpen(false);
    setFormData(INITIAL_FORM);
    setSubmitted(false);
    setSending(false);
    setError("");
    setCopied(false);
    setModalOpen(true);
  };

  const closeContactModal = () => {
    if (sending) return;
    setModalOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({ ...previous, [name]: value }));

    if (error) setError("");
  };

  const selectProjectType = (type) => {
    setFormData((previous) => ({ ...previous, projectType: type }));

    if (error) setError("");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      const helper = document.createElement("textarea");
      helper.value = CONTACT_EMAIL;
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      document.body.removeChild(helper);
    }

    setCopied(true);
    clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  // Tab focus stays inside the dialog
  const handleDialogKeyDown = (event) => {
    if (event.key !== "Tab") return;

    const focusable = dialogRef.current?.querySelectorAll(
      "button:not([disabled]), input, textarea, a[href]"
    );

    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  // ========================================
  // SEND MESSAGE WITH EMAILJS
  // ========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    if (!formData.projectType) {
      setError("Please select a project type.");
      return;
    }

    if (!EMAIL_READY) {
      setError(
        `The contact form isn't connected yet. Please email me directly at ${CONTACT_EMAIL}.`
      );
      return;
    }

    setSending(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          project_type: formData.projectType,
          message: formData.message,
          to_email: CONTACT_EMAIL,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData(INITIAL_FORM);
    } catch (err) {
      console.error("Email sending failed:", err);

      setError(
        `Message could not be sent. Please try again or email me at ${CONTACT_EMAIL}.`
      );
    } finally {
      setSending(false);
    }
  };

  const remaining = MAX_MESSAGE - formData.message.length;

  // ========================================
  // CONTACT POPUP
  // ========================================

  const contactModal = (
    <div
      className="contact-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeContactModal();
        }
      }}
    >
      <div
        className="contact-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onKeyDown={handleDialogKeyDown}
      >
        {/* CLOSE BUTTON */}

        <button
          className="contact-modal-close"
          onClick={closeContactModal}
          type="button"
          aria-label="Close contact form"
          disabled={sending}
        >
          <X size={18} />
        </button>

        {/* LEFT: INFORMATION */}

        <aside className="contact-modal-aside">
          <span className="contact-modal-eyebrow">LET&apos;S CONNECT</span>

          <h2 id="contact-modal-title">
            Let&apos;s Talk About Your Project.
          </h2>

          <p>
            Have an idea or a project in mind? I&apos;d love to hear about
            it. Send me a message.
          </p>

          <div className="contact-modal-availability contact-modal-hide-sm">
            <span className="contact-modal-dot" />
            Open to freelance and internship opportunities
          </div>

          <ul className="contact-modal-meta">
            <li className="contact-modal-hide-sm">
              <span className="contact-modal-meta-icon">
                <Clock size={16} />
              </span>

              <div className="contact-modal-meta-text">
                <small>Response time</small>
                <strong>Usually within 24 hours</strong>
              </div>
            </li>

            <li>
              <span className="contact-modal-meta-icon">
                <Mail size={16} />
              </span>

              <div className="contact-modal-meta-text">
                <small>Email</small>
                <strong>{CONTACT_EMAIL}</strong>
              </div>

              <button
                type="button"
                className={`contact-modal-copy ${copied ? "is-copied" : ""}`}
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
                title={copied ? "Copied!" : "Copy email"}
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </li>
          </ul>

          <div className="contact-modal-social contact-modal-hide-sm">
            <span>OR FIND ME ON</span>

            <div>
              <a
                href="https://github.com/tarekhasan-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/tarek-hasan-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={17} />
              </a>
            </div>
          </div>
        </aside>

        {/* RIGHT: FORM / SUCCESS */}

        <div className="contact-modal-main">
          {!submitted ? (
            <form className="contact-modal-form" onSubmit={handleSubmit}>
              {/* NAME + EMAIL */}

              <div className="contact-modal-row">
                <div className="contact-modal-field">
                  <label htmlFor="modal-name">
                    <User size={14} />
                    YOUR NAME
                  </label>

                  <input
                    ref={nameInputRef}
                    id="modal-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-modal-field">
                  <label htmlFor="modal-email">
                    <Mail size={14} />
                    YOUR EMAIL
                  </label>

                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              {/* PROJECT TYPE */}

              <div className="contact-modal-field">
                <span className="contact-modal-label" id="modal-type-label">
                  <Layers size={14} />
                  PROJECT TYPE
                </span>

                <div
                  className="contact-modal-chips"
                  role="radiogroup"
                  aria-labelledby="modal-type-label"
                >
                  {PROJECT_TYPES.map((type) => {
                    const active = formData.projectType === type;

                    return (
                      <button
                        key={type}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        className={`contact-modal-chip ${
                          active ? "is-active" : ""
                        }`}
                        onClick={() => selectProjectType(type)}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* MESSAGE */}

              <div className="contact-modal-field">
                <label htmlFor="modal-message">
                  <MessageSquare size={14} />
                  YOUR MESSAGE
                </label>

                <textarea
                  id="modal-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="4"
                  maxLength={MAX_MESSAGE}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <span
                  className={`contact-modal-counter ${
                    remaining <= 50 ? "is-warn" : ""
                  }`}
                >
                  {formData.message.length} / {MAX_MESSAGE}
                </span>
              </div>

              {/* ERROR */}

              {error && (
                <p className="contact-form-error" role="alert">
                  <AlertCircle size={15} />
                  <span>{error}</span>
                </p>
              )}

              {/* SUBMIT */}

              <button
                className="cta-button contact-modal-submit"
                type="submit"
                disabled={sending}
              >
                <span>{sending ? "Sending..." : "Send Message"}</span>
                <Send size={16} />
              </button>

              <p className="contact-modal-privacy">
                <ShieldCheck size={13} />
                Your information is only used to reply to your message.
              </p>
            </form>
          ) : (
            <div className="contact-modal-success">
              <CheckCircle size={48} />

              <h3>Message Sent Successfully!</h3>

              <p>
                Thank you for reaching out. I&apos;ll get back to you within
                24 hours.
              </p>

              <button
                className="cta-button"
                onClick={closeContactModal}
                type="button"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* NAVBAR */}

      <header className="navbar-header">
        <nav
          id="navbar"
          className={`nav-container ${scrolled ? "nav-scrolled" : ""}`}
        >
          {/* LOGO */}

          <a
            href="#home"
            className="brand-logo"
            onClick={() => handleNavigation("home")}
          >
            Tarek Hasan
          </a>

          {/* DESKTOP NAVIGATION */}

          <div
            className="nav-wrapper"
            ref={navRef}
            onMouseLeave={moveToActive}
          >
            <span className="sliding-pill" ref={pillRef} />

            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                data-nav={link.id}
                className={`nav-link ${
                  activeLink === link.id ? "active" : ""
                }`}
                onMouseEnter={(event) => positionPill(event.currentTarget)}
                onClick={() => handleNavigation(link.id)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE ACTIONS */}

          <div className="nav-actions">
            <button
              className="cta-button"
              onClick={openContactModal}
              type="button"
            >
              <span>Let&apos;s Talk</span>
              <span className="arrow-icon">↗</span>
            </button>

            {/* MOBILE MENU BUTTON */}

            <button
              className={`mobile-menu-btn ${menuOpen ? "menu-open" : ""}`}
              onClick={() => setMenuOpen((previous) => !previous)}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        {/* MOBILE DROPDOWN */}

        <div
          className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-nav-link ${
                activeLink === link.id ? "active" : ""
              }`}
              onClick={() => handleNavigation(link.id)}
            >
              <span>{link.name}</span>
              <span className="mobile-chevron">›</span>
            </a>
          ))}

          <button
            className="cta-button mobile-contact-button"
            onClick={openContactModal}
            type="button"
          >
            <span>Let&apos;s Talk</span>
            <span className="arrow-icon">↗</span>
          </button>
        </div>
      </header>

      {/* CONTACT POPUP */}

      {modalOpen && createPortal(contactModal, document.body)}
    </>
  );
}

export default Navbar;
