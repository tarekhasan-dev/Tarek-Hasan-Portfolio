
import { useState, useEffect } from "react";

import {
  Search,
  ArrowUpRight,
  X,
  FileCode,
  Palette,
  Cpu,
  Code2,
  Globe,
  Layers,
  GitBranch,
  Monitor,
  BarChart3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import "../styles/Skills.css";

/* ================================
   SKILLS DATA
================================ */

const skillsData = [
  {
    id: "html",
    num: "01",
    name: "HTML",
    category: "frontend",
    icon: FileCode,
    level: 95,
    description:
      "Semantic markup, accessibility (a11y), SEO-friendly document structures, and modern HTML5 Web APIs.",
    tags: ["Semantic HTML", "Accessibility", "DOM Structure"],
  },
  {
    id: "css",
    num: "02",
    name: "CSS",
    category: "styling",
    icon: Palette,
    level: 90,
    description:
      "Flexbox, CSS Grid, keyframe animations, CSS variables, dynamic themes, and modern responsive patterns.",
    tags: ["Flexbox & Grid", "Animations", "Responsive Layouts"],
  },
  {
    id: "javascript",
    num: "03",
    name: "JavaScript",
    category: "frontend",
    icon: Cpu,
    level: 88,
    description:
      "ES6+ syntax, asynchronous JS, Promises, async-await, closures, DOM manipulation, and functional logic.",
    tags: ["ES6+", "Async/Await", "DOM & Events"],
  },
  {
    id: "react",
    num: "04",
    name: "React",
    category: "frontend",
    icon: Code2,
    level: 85,
    description:
      "Functional components, React Hooks, Context API, state management, and component-based development.",
    tags: ["JSX", "React Hooks", "State Management"],
  },
  {
    id: "nextjs",
    num: "05",
    name: "Next.js",
    category: "frontend",
    icon: Globe,
    level: 80,
    description:
      "App Router architecture, Server-Side Rendering, Static Site Generation, and modern routing.",
    tags: ["App Router", "SSR & SSG", "Routing"],
  },
  {
    id: "tailwind",
    num: "06",
    name: "Tailwind CSS",
    category: "styling",
    icon: Layers,
    level: 92,
    description:
      "Utility-first styling, rapid design prototyping, custom theme configurations, and responsive breakpoints.",
    tags: ["Utility-First", "Custom Themes", "Responsive"],
  },
  {
    id: "git",
    num: "07",
    name: "Git & GitHub",
    category: "tools",
    icon: GitBranch,
    level: 85,
    description:
      "Version control workflows, feature branching strategies, pull requests, and GitHub Actions.",
    tags: ["Version Control", "Branching", "Collaboration"],
  },
  {
    id: "responsive",
    num: "08",
    name: "Responsive Design",
    category: "styling",
    icon: Monitor,
    level: 95,
    description:
      "Mobile-first design, fluid typography, flexible grids, media queries, and cross-browser testing.",
    tags: ["Mobile-First", "Fluid Grids", "Cross-Browser"],
  },
  {
    id: "seo",
    num: "09",
    name: "SEO",
    category: "tools",
    icon: BarChart3,
    level: 90,
    description:
      "Technical SEO audits, Core Web Vitals optimization, meta tag management, structured data, and analytics.",
    tags: ["Technical SEO", "Core Web Vitals", "Analytics"],
  },
];

/* ================================
   CATEGORIES
================================ */

const categories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "styling", label: "Styling & UI" },
  { id: "tools", label: "Tools & SEO" },
];

/* ================================
   SKILLS COMPONENT
================================ */

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);

  /* FILTER SKILLS */

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory =
      activeCategory === "all" ||
      skill.category === activeCategory;

    const search = searchQuery.toLowerCase().trim();

    const matchesSearch =
      skill.name.toLowerCase().includes(search) ||
      skill.category.toLowerCase().includes(search) ||
      skill.tags.some((tag) =>
        tag.toLowerCase().includes(search)
      );

    return matchesCategory && matchesSearch;
  });

  /* MODAL ESCAPE KEY */

  useEffect(() => {
    if (!selectedSkill) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedSkill(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedSkill]);

  /* RESET FILTERS */

  const resetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
  };

  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        {/* HEADER */}

        <div className="skills-header">

          <div className="skills-heading-card">

            {/* ANIMATED GLOW EFFECTS */}

            <div className="skills-glow skills-glow-one" />
            <div className="skills-glow skills-glow-two" />
            <div className="skills-glow skills-glow-three" />

            {/* FLOATING PARTICLES */}

            <div className="skills-floating-particles">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            {/* VERSION LABEL */}

            <div className="skills-version">
              <Sparkles size={14} />
              <span>TOOLKIT v2.0</span>
            </div>

            {/* HEADING CONTENT */}

            <div className="skills-heading-content">

             <div className="skills-eyebrow">
  <span className="skills-status-dot" />
  02 / MY TOOLKIT
  <span className="skills-brown-dot" />
</div>

              <h2 className="skills-main-heading">
                <span className="skills-title-black">
                  Skills
                </span>{" "}
                <span className="skills-title-blue">
                  technologies.
                </span>
              </h2>

              <p className="skills-heading-description">
                Tools and technologies I use while learning
                and building practical real-world projects.
              </p>

            </div>

          </div>

          {/* FILTER AND SEARCH */}

          <div className="skills-controls">

            <div className="skills-categories">

              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                  className={`skills-category-btn ${
                    activeCategory === category.id
                      ? "active"
                      : ""
                  }`}
                >
                  {category.label}
                </button>
              ))}

            </div>

            {/* SEARCH */}

            <div className="skills-search">

              <Search size={16} />

              <input
                type="text"
                placeholder="Filter skills..."
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                aria-label="Search skills"
              />

              {searchQuery && (
                <button
                  type="button"
                  className="skills-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}

            </div>

          </div>

        </div>

        {/* SKILLS GRID */}

        {filteredSkills.length === 0 ? (

          <div className="skills-empty">

            <Sparkles
              size={32}
              className="skills-empty-icon"
            />

            <p>
              No technologies match your filter.
            </p>

            <button
              type="button"
              className="skills-reset-btn"
              onClick={resetFilters}
            >
              Reset Filters
            </button>

          </div>

        ) : (

          <div className="skills-grid">

            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <button
                  type="button"
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  style={{
                    animationDelay: `${index * 40}ms`,
                  }}
                  className="skill-card"
                  aria-label={`View ${skill.name} details`}
                >

                  <div className="skill-card-left">

                    <span className="skill-number">
                      {skill.num}
                    </span>

                    <div className="skill-icon">
                      <Icon size={22} />
                    </div>

                    <div className="skill-info">

                      <h3>{skill.name}</h3>

                      <span className="skill-category">
                        {skill.category}
                      </span>

                    </div>

                  </div>

                  <div className="skill-arrow">
                    <ArrowUpRight size={17} />
                  </div>

                </button>
              );
            })}

          </div>

        )}

      </div>

      {/* SKILL DETAILS MODAL */}

      {selectedSkill && (

        <div
          className="skill-modal-overlay"
          onClick={() => setSelectedSkill(null)}
        >

          <div
            className="skill-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-modal-title"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="skill-modal-close"
              onClick={() => setSelectedSkill(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* MODAL HEADER */}

            <div className="skill-modal-header">

              <div className="skill-modal-icon">

                {(() => {
                  const Icon = selectedSkill.icon;
                  return <Icon size={28} />;
                })()}

              </div>

              <div>

                <span className="skill-modal-meta">
                  {selectedSkill.num} / {selectedSkill.category}
                </span>

                <h3 id="skill-modal-title">
                  {selectedSkill.name}
                </h3>

              </div>

            </div>

            {/* DESCRIPTION */}

            <p className="skill-modal-description">
              {selectedSkill.description}
            </p>

            {/* PROFICIENCY */}

            <div className="skill-proficiency">

              <div className="skill-proficiency-heading">

                <span>Skill Proficiency</span>

                <span className="skill-proficiency-value">
                  {selectedSkill.level}%
                </span>

              </div>

              <div className="skill-progress-track">

                <div
                  className="skill-progress-fill"
                  style={{
                    width: `${selectedSkill.level}%`,
                  }}
                />

              </div>

            </div>

            {/* SKILL TAGS */}

            <div className="skill-tags">

              {selectedSkill.tags.map((tag) => (
                <span
                  key={tag}
                  className="skill-tag"
                >
                  <CheckCircle2 size={14} />
                  {tag}
                </span>
              ))}

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Skills;
