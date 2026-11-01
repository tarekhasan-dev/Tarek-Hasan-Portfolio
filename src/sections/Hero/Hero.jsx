import "./Hero.css";

function Hero() {
  return (
    <main className="hero" id="home">
      {/* LEFT CONTENT */}
      <div className="hero-content">
        <span className="hello">Hello There</span>

        <h1>
          I’m <span>Tarek Hasan,</span>
          <br />
          Aspiring Full Stack
          <br />
          Web Developer.
        </h1>

        <p>
          Aspiring Full Stack Developer passionate about
          engineering scalable applications, architecting
          robust systems, and crafting performant interfaces
          with modern web technologies.
        </p>

        {/* CTA BUTTONS */}
        <div className="actions">
          <a href="#projects" className="btn-hire">
            <span>Explore My Work</span>
            <b>↗</b>
          </a>

          <a href="#contact" className="btn-resume">
            <span>Contact Me</span>
            <b>↗</b>
          </a>
        </div>
      </div>

      {/* RIGHT VISUAL SECTION */}
      <div className="visual">
        {/* GRAPHICAL ANIMATION BACKGROUND */}
        <div className="graphic-bg">
          {/* Animated Cube */}
          <div className="cube-shape"></div>

          {/* Glow Orbs */}
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>

          {/* Floating Code Card 1 */}
          <div className="floating-card code-snippet-1">
            <code>
              {"<Component>"}
              <br />
              {'  <div className="react">Next.js</div>'}
              <br />
              {"</Component>"}
            </code>
          </div>

          {/* Floating Code Card 2 */}
          <div className="floating-card code-snippet-2">
            <code>
              {"export getServerSideProps() { ... }"}
            </code>
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <img
          className="photo"
          src="/profile.png"
          alt="Tarek Hasan"
        />

        {/* FLOATING BADGES */}
        <div className="tag a">
          <small>Web Development</small>
          React &amp; Next.js
        </div>

        <div className="tag b">
          <small>Full Stack Journey</small>
          Learning &amp; Building
        </div>
      </div>
    </main>
  );
}

export default Hero;