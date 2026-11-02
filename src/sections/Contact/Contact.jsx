import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

import "./Contact.css";

// ========================================
// BRAND ICONS
// ========================================

function GithubIcon({ size = 20 }) {
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

function LinkedinIcon({ size = 20 }) {
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
// CONTACT COMPONENT
// ========================================

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  // ========================================
  // EMAILJS FORM SUBMISSION
  // ========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setError("");
    setSubmitted(false);

    try {
      await emailjs.send(
        "service_bnavcvp",
        "template_48vwtgf",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        {
          publicKey: "X4R2nBJIp1XzDxhQS",
        }
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        "Message could not be sent. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

  // ========================================
  // CONTACT DETAILS
  // ========================================

  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: "Email Me",
      value: "hasantareksh@gmail.com",
      href: "mailto:hasantareksh@gmail.com",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: null,
    },
  ];

  // ========================================
  // COMPONENT UI
  // ========================================

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* SECTION HEADING */}

        <div className="contact-heading">
          <div className="contact-eyebrow">
            <span className="contact-status-dot"></span>
            05 / GET IN TOUCH
          </div>

          <h2 className="contact-title">
            Let&apos;s build something
            <span> meaningful.</span>
          </h2>

          <p className="contact-subtitle">
            Have an idea, a project, or an opportunity? I&apos;d love to hear
            about it. Let&apos;s connect and create something valuable
            together.
          </p>
        </div>

        {/* CONTACT CONTENT */}

        <div className="contact-content">

          {/* LEFT SIDE */}

          <div className="contact-info">
            <div className="contact-info-heading">
              <span className="contact-small-label">
                CONTACT INFORMATION
              </span>

              <h3>
                Let&apos;s start a
                <span> conversation.</span>
              </h3>

              <p>
                Whether you have a project in mind, want to collaborate, or
                simply want to connect, my inbox is always open.
              </p>
            </div>

            {/* CONTACT DETAILS */}

            <div className="contact-details">
              {contactDetails.map((item) => (
                <div
                  className="contact-detail-card"
                  key={item.label}
                >
                  <div className="contact-detail-icon">
                    {item.icon}
                  </div>

                  <div className="contact-detail-text">
                    <span>{item.label}</span>

                    {item.href ? (
                      <a href={item.href}>
                        {item.value}
                        <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <strong>{item.value}</strong>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* SOCIAL LINKS */}

            <div className="contact-social">
              <span>FIND ME ON</span>

              <div className="contact-social-links">
                <a
                  href="https://github.com/tarekhasan-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/tarekhasan-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span>HAVE A PROJECT IN MIND?</span>
              <h3>Send me a message.</h3>
              <p>Fill out the form below to get in touch.</p>
            </div>

            {/* SUCCESS MESSAGE */}

            {submitted ? (
              <div className="contact-success">
                <CheckCircle size={42} />

                <h3>Thank you!</h3>

                <p>
                  Your message has been sent successfully.
                  I&apos;ll get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* NAME INPUT */}

                <div className="contact-input-group">
                  <label htmlFor="contact-name">
                    YOUR NAME
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* EMAIL INPUT */}

                <div className="contact-input-group">
                  <label htmlFor="contact-email">
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* MESSAGE INPUT */}

                <div className="contact-input-group">
                  <label htmlFor="contact-message">
                    YOUR MESSAGE
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* ERROR MESSAGE */}

                {error && (
                  <p role="alert" className="contact-error">
                    {error}
                  </p>
                )}

                {/* SUBMIT BUTTON */}

                <button
                  className="contact-submit-button"
                  type="submit"
                  disabled={isSending}
                >
                  <span>
                    {isSending ? "Sending..." : "Send Message"}
                  </span>

                  <Send size={17} />
                </button>

              </form>
            )}
          </div>
        </div>

        {/* BOTTOM NOTE */}

        <div className="contact-bottom">
          <span>© {new Date().getFullYear()} Tarek Hasan</span>

          <span>Designed with purpose. Built with passion.</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;