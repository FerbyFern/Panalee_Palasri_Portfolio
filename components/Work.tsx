import Link from "next/link";

export default function Work() {
  return (
    <section id="work">
      <div className="work-header reveal">
        <div>
          <div className="section-tag">Selected work</div>
          <h2 className="section-title">
            Projects that<br />
            shaped my craft.
          </h2>
        </div>
        <div className="work-count">04</div>
      </div>
      <div className="projects-grid">
        <Link href="/work/leafy" className="project-card reveal reveal-delay-1" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="mockup-wrap">
            <img
              src="/images/work/leafy/thumbnail.png"
              alt="Leafy — Perfect Plant"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="project-overlay">
            <div className="project-arrow" style={{ fontSize: 11, width: 'auto', borderRadius: 4, padding: '6px 12px', letterSpacing: '0.1em', fontFamily: "'DM Mono', monospace" }}>View case study →</div>
            <p className="project-tag">E-commerce · Capstone Project</p>
            <h3 className="project-name">
              Leafy — Adaptive E-commerce<br />
              & Knowledge Hub
            </h3>
            <p className="project-meta">
              2023–2024 · UX/UI Design, Project Management, Frontend
            </p>
          </div>
        </Link>

        <Link href="/work/vansales" className="project-card tall reveal reveal-delay-2" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="mockup-wrap" style={{ height: '100%' }}>
            <img
              src="/images/work/vansales/thumbnail.png"
              alt="Vansales Application"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="project-overlay">
            <div className="project-arrow" style={{ fontSize: 11, width: 'auto', borderRadius: 4, padding: '6px 12px', letterSpacing: '0.1em', fontFamily: "'DM Mono', monospace" }}>View case study →</div>
            <p className="project-tag">Web & Mobile · In-house Product</p>
            <h3 className="project-name">
              Vansales Application —<br />
              End-to-End Product Design
            </h3>
            <p className="project-meta">
              2025–Present · UX Strategy, Design Systems, Dev Handoff
            </p>
          </div>
        </Link>

        <Link href="/work/pmsf" className="project-card reveal reveal-delay-3" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="mockup-wrap">
            <img
              src="/images/work/pmsf/thumbnail.png"
              alt="PMSF Redesign"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="project-overlay">
            <div className="project-arrow" style={{ fontSize: 11, width: 'auto', borderRadius: 4, padding: '6px 12px', letterSpacing: '0.1em', fontFamily: "'DM Mono', monospace" }}>View case study →</div>
            <p className="project-tag">Web Redesign · Freelance</p>
            <h3 className="project-name">
              PMSF — Foundation<br />
              Website Redesign
            </h3>
            <p className="project-meta">
              2022 · Responsive Design, UX Research, Navigation
            </p>
          </div>
        </Link>

        <Link href="/work/ces" className="project-card reveal reveal-delay-4" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="mockup-wrap">
            <div className="proj-visual pv-3" style={{ background: '#16140F' }}>
              <div className="pv-grid"></div>
              <span style={{ color: 'rgba(201,168,76,0.15)', zIndex: 1, position: 'relative' }}>CES</span>
            </div>
          </div>
          <div className="project-overlay">
            <div className="project-arrow" style={{ fontSize: 11, width: 'auto', borderRadius: 4, padding: '6px 12px', letterSpacing: '0.1em', fontFamily: "'DM Mono', monospace" }}>View case study →</div>
            <p className="project-tag">Enterprise System · In-house Product</p>
            <h3 className="project-name">
              CES — Gold Trading<br />
              Platform Design
            </h3>
            <p className="project-meta">
              2025–Present · Enterprise UX, 12 Modules, Role-Based Design
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
