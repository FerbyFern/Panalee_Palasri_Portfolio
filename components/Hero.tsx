export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">UX/UI Designer · Bangkok, Thailand</p>
        <h1 className="hero-name">
          Designing<br />
          interfaces<br />
          that <em>feel right.</em>
        </h1>
        <p className="hero-desc">
          I craft digital products that balance clarity with depth — from user
          research and wireframing through to high-fidelity prototyping and design
          systems. End-to-end, user-centred, always accessible.
        </p>
        <a href="#work" className="hero-cta">
          View selected work
        </a>
      </div>
      <div className="hero-right">
        <div className="hero-stat-block">
          <div className="hero-stat-num">3+</div>
          <div className="hero-stat-label">Years of practice</div>
        </div>
        <div className="hero-stat-block">
          <div className="hero-stat-num">8+</div>
          <div className="hero-stat-label">Projects delivered</div>
        </div>
        {/* <div className="hero-stat-block">
          <div className="hero-stat-num">1st</div>
          <div className="hero-stat-label">Best Website Award</div>
        </div> */}
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
  );
}
