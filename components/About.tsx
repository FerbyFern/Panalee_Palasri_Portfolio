export default function About() {
  return (
    <section id="about">
      <div className="section-tag reveal">About me</div>
      <div className="about-grid">
        <div className="about-portrait reveal">
          <img 
            src="/portrait.jpg" 
            alt="Panalee Palasri Portrait" 
            className="portrait-img"
          />
          <div className="portrait-tag">UX/UI Designer</div>
          <div className="portrait-badge">2+ Years Exp</div>
        </div>
        <div className="about-content reveal reveal-delay-1">
          <h2 className="about-headline">
            I believe great design is<br />
            <em>invisible</em> — until you need it.
          </h2>
          <div className="about-body">
            <p>
              I&apos;m Panalee, a UX/UI Designer based in Thailand with a Bachelor&apos;s
              in Information Technology from KMUTT and 2+ years of paid professional
              experience — spanning freelance, in-house, and client-facing product development.
            </p>
            <p>
              I&apos;m skilled across the full design process — from user research and wireframing 
              through to high-fidelity prototyping and usability testing — delivering accessible, 
              user-centred interfaces that work across every device and context.
            </p>
            <p>
              Outside design, I&apos;m a former National Team Athlete representing Thailand
              in Modern Pentathlon — a discipline that shaped how I approach pressure, 
              precision, and continuous improvement.
            </p>
          </div>
          <div className="about-pills">
            <span className="pill">User Research</span>
            <span className="pill">Wireframing</span>
            <span className="pill">Prototyping</span>
            <span className="pill">Design Systems</span>
            <span className="pill">A/B Testing</span>
          </div>
          <div className="skills-list">
            <div className="skill-row">
              <span className="skill-name">UI / Visual Design</span>
              <div className="skill-bar"><div className="skill-fill" style={{ width: "95%" }}></div></div>
            </div>
            <div className="skill-row">
              <span className="skill-name">Wireframing & Prototyping</span>
              <div className="skill-bar"><div className="skill-fill" style={{ width: "92%" }}></div></div>
            </div>
            <div className="skill-row">
              <span className="skill-name">UX Research & Testing</span>
              <div className="skill-bar"><div className="skill-fill" style={{ width: "88%" }}></div></div>
            </div>
            <div className="skill-row">
              <span className="skill-name">Design Systems</span>
              <div className="skill-bar"><div className="skill-fill" style={{ width: "85%" }}></div></div>
            </div>
            <div className="skill-row">
              <span className="skill-name">Accessibility Design</span>
              <div className="skill-bar"><div className="skill-fill" style={{ width: "80%" }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
