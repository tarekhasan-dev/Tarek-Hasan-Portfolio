
import { useState } from "react";
import "./Education.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "edu", label: "Education" },
  { key: "exp", label: "Experience" },
  { key: "focus", label: "Focus" },
];

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ICONS = {
  code: (
    <svg {...svgProps}>
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  cap: (
    <svg {...svgProps}>
      <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c3 2 9 2 12 0v-5" />
    </svg>
  ),
  bag: (
    <svg {...svgProps}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  uni: (
    <svg {...svgProps}>
      <path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M12 3 3 8h18l-9-5z" />
    </svg>
  ),
};

/*
  graph: git-graph pieces drawn on the left of each card.
  Edit the text content below freely; keep the graph classes as they are.
*/

const JOURNEY = [
  {
    id: "focus",
    type: "focus",
    hash: "2024-now",
    refs: [
      { text: "HEAD → main", tone: "b" },
      { text: "ongoing", tone: "live" },
    ],
    title: "Frontend Web Development",
    org: "Self-directed & hands-on projects",
    date: "2024 — now",
    tags: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "REST APIs",
      "Git & GitHub",
    ],
    summary:
      "Learning by shipping. I turn real layouts into fast, accessible, and responsive interfaces, and build every project with performance and SEO in mind.",
    points: [
      "Component-based UIs with React and Next.js (App Router, SSR and SSG)",
      "Modern JavaScript: ES6+, async/await, and DOM and event handling",
      "React Hooks, Context API, and state management",
      "Utility-first styling with Tailwind CSS and custom CSS animations",
      "Mobile-first, responsive and accessible layouts",
      "Fetching and displaying data from REST APIs",
      "Version control with Git and GitHub: branching and pull requests",
      "SEO-aware builds: semantic HTML, meta tags, and Core Web Vitals",
      "4 projects built so far, including BazarDor and FitLog",
    ],
    icon: "code",
    node: "jr-n0 jr-head",
    graph: [
      "jr-v jr-l0 jr-low",
      "jr-v jr-l1 jr-low jr-dash",
      "jr-merge",
    ],
  },
  {
    id: "edu",
    type: "edu",
    hash: "2023-24",
    refs: [
      { text: "branch: education", tone: "v" },
      { text: "2nd year", tone: "live" },
    ],
    title: "Bachelor of Business Administration",
    uni: "Dhaka Central University (DCU)",
    org: "Faculty of Business Studies · Public University, Dhaka",
    date: "Session 2023–24 · Expected 2028",
    tags: ["Business Strategy", "Management", "Data Analysis"],
    summary:
      "A business foundation that shapes how I build: start from the goal, then design for the people using it.",
    points: [
      "Strategy and management coursework",
      "Data analysis for decision-making",
      "Business thinking applied to web projects",
      "Project planning and team collaboration",
      "Marketing and user-focused product mindset",
      "Turning business goals into working web features",
    ],
    icon: "cap",
    node: "jr-n1",
    graph: [
      "jr-v jr-l0 jr-full",
      "jr-v jr-l1 jr-top jr-dash",
      "jr-v jr-l1 jr-low",
      "jr-v jr-l2 jr-full",
    ],
  },
  {
    id: "seo",
    type: "exp",
    hash: "2021-24",
    refs: [
      { text: "branch: seo", tone: "b" },
      { text: "merged", tone: "live" },
    ],
    title: "SEO Specialist",
    org: "Digital Growth Agency",
    date: "2021 — 2024 · 3 years",
    tags: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "WordPress",
      "Google Analytics",
      "Core Web Vitals",
    ],
    summary:
      "Helped websites rank higher and load faster through on-page, off-page, and technical SEO. This is where I learned how much page speed, structure, and content quality matter.",
    points: [
      "On-page SEO: titles, meta tags, headings, and content optimization",
      "Off-page SEO: link building and backlink analysis",
      "Keyword research and competitor analysis",
      "WordPress SEO setup with Yoast SEO and Rank Math",
      "Technical audits: indexing, sitemaps, robots.txt, and schema markup",
      "Google Search Console and Analytics tracking and reporting",
      "Core Web Vitals and page speed improvements",
    ],
    icon: "bag",
    node: "jr-n2",
    graph: [
      "jr-v jr-l0 jr-top",
      "jr-fork",
      "jr-v jr-l2 jr-top",
    ],
  },
];

const GLYPHS = [
  { text: "</>", cls: "jr-gl1" },
  { text: "{ }", cls: "jr-gl2" },
  { text: "#", cls: "jr-gl3" },
  { text: "=>", cls: "jr-gl4" },
  { text: "( )", cls: "jr-gl5" },
];

export default function Education() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState({ focus: true });

  const toggle = (id) =>
    setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <section
      className="journey"
      id="experience"
      aria-labelledby="journey-title"
    >
      {/* BACKGROUND ANIMATION */}

      <div className="jr-fx" aria-hidden="true">
        <div className="jr-bg" />
        <div className="jr-blob jr-b1" />
        <div className="jr-blob jr-b2" />
        <div className="jr-blob jr-b3" />

        {GLYPHS.map((g) => (
          <span key={g.cls} className={`jr-glyph ${g.cls}`}>
            {g.text}
          </span>
        ))}
      </div>

      <div className="jr-inner">
        <div className="jr-label">03 / MY JOURNEY</div>

        <h2 className="jr-title" id="journey-title">
          Education &amp; <em>experience.</em>
        </h2>

        <div className="jr-bar">
          <div className="jr-term">
            <b>~/journey</b> $ git log --graph
          </div>

          <div
            className="jr-seg"
            role="group"
            aria-label="Highlight by type"
          >
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                aria-pressed={filter === f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ol className="jr-list">
          {JOURNEY.map((item) => {
            const isOpen = !!open[item.id];
            const dim =
              filter !== "all" && filter !== item.type;

            return (
              <li
                key={item.id}
                className={`jr-row${dim ? " is-dim" : ""}`}
              >
                <div className="jr-graph" aria-hidden="true">
                  {item.graph.map((c, i) => (
                    <i key={i} className={c} />
                  ))}

                  <i className={`jr-node ${item.node}`}>
                    {ICONS[item.icon]}
                  </i>
                </div>

                <article className="jr-card">
                  <button
                    type="button"
                    className="jr-hd"
                    aria-expanded={isOpen}
                    aria-controls={`jr-more-${item.id}`}
                    onClick={() => toggle(item.id)}
                  >
                    <span>
                      <span className="jr-meta">
                        <span className="jr-hash">
                          {item.hash}
                        </span>

                        {item.refs.map((r) => (
                          <span
                            key={r.text}
                            className={`jr-ref jr-ref--${r.tone}`}
                          >
                            {r.text}
                          </span>
                        ))}
                      </span>

                      <span className="jr-name">
                        {item.title}
                      </span>

                      {item.uni && (
                        <span className="jr-uni">
                          <span className="jr-uni-icon">
                            {ICONS.uni}
                          </span>
                          {item.uni}
                        </span>
                      )}

                      <span className="jr-org">
                        {item.org}
                      </span>

                      <span className="jr-date">
                        {item.date}
                      </span>
                    </span>

                    <span className="jr-chev">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  {!isOpen && (
                    <div className="jr-chips jr-peek">
                      {item.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  )}

                  <div
                    className={`jr-more${isOpen ? " is-open" : ""}`}
                    id={`jr-more-${item.id}`}
                  >
                    <div>
                      <div className="jr-body">
                        <p>{item.summary}</p>

                        <ul>
                          {item.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>

                        <div className="jr-chips">
                          {item.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
