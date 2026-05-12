"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function VansalesCaseStudy() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((r) => observer.observe(r));

    const cursor = document.getElementById("cursor");
    const onMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="cs-page">
      <nav className="cs-nav">
        <Link href="/" className="cs-back">
          ← Back to Portfolio
        </Link>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'var(--ink-muted)' }}>
          Vansales — Case Study
        </span>
      </nav>

      {/* HERO */}
      <section className="cs-hero cs-hero-dark" style={{ background: '#1E3A6E' }}>
        <div className="cs-hero-inner">
          <div className="cs-eyebrow reveal">Case Study 02 · Web & Mobile · In-house Product</div>
          <h1 className="cs-title reveal reveal-delay-1">
            Vansales — <em>Designing for<br />the field, not the office.</em>
          </h1>
          <p className="cs-subtitle reveal reveal-delay-2">
            End-to-end UX/UI design for a B2B sales management application used by field sales teams 
            across web and mobile platforms.
          </p>
          
          <div className="cs-meta-row reveal reveal-delay-3">
            <div className="cs-meta-block">
              <span className="cs-meta-label">Timeline</span>
              <span className="cs-meta-value">Jan 2025 – Present</span>
            </div>
            <div className="cs-meta-block">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX/UI Designer (Solo)</span>
            </div>
            <div className="cs-meta-block">
              <span className="cs-meta-label">Platform</span>
              <span className="cs-meta-value">Web + iOS / Android</span>
            </div>
            <div className="cs-meta-block">
              <span className="cs-meta-label">Tools</span>
              <span className="cs-meta-value">Figma, ClickUp, draw.io</span>
            </div>
          </div>
        </div>

        <div className="cs-outcome-stats reveal reveal-delay-4" style={{ 
          background: 'rgba(255,255,255,0.07)', 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          marginTop: '80px',
          gridTemplateColumns: 'repeat(4, 1fr)'
        }}>
          <div className="cs-stat">
            <div className="cs-stat-num">2</div>
            <div className="cs-stat-label">Platforms designed</div>
          </div>
          <div className="cs-stat">
            <div className="cs-stat-num">1</div>
            <div className="cs-stat-label">Design system built</div>
          </div>
          <div className="cs-stat">
            <div className="cs-stat-num">∞</div>
            <div className="cs-stat-label">Stakeholder cycles</div>
          </div>
          <div className="cs-stat">
            <div className="cs-stat-num">Live</div>
            <div className="cs-stat-label">In production</div>
          </div>
        </div>
      </section>

      {/* NDA NOTICE */}
      <section style={{ background: 'var(--white)', padding: '60px 0' }}>
        <div className="cs-section" style={{ padding: '0', maxWidth: '900px' }}>
          <div className="cs-nda reveal" style={{ background: '#1E3A6E' }}>
            <span className="cs-nda-icon">🔒</span>
            <div>
              <div className="cs-nda-title">NDA Notice</div>
              <p className="cs-nda-text">
                This project is under a non-disclosure agreement. Screen designs and proprietary business logic are anonymised or replaced with representative mockups. All process documentation reflects real methodology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">01 — The Problem</div>
        <div className="cs-two-col">
          <div>
            <h2 className="cs-h2 reveal">Field sales teams were drowning in paper.</h2>
            <div className="reveal">
              <p style={{ marginTop: '24px' }}>Sales representatives at Vansales Application Co., Ltd. were managing customer orders, delivery tracking, and inventory updates through a combination of spreadsheets, WhatsApp messages, and manual data entry. Errors were frequent, real-time visibility was impossible, and managers had no reliable picture of daily performance.</p>
              <div style={{ background: 'var(--ink)', padding: '48px', borderLeft: '3px solid var(--accent)', marginTop: '32px' }}>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontStyle: 'italic' }}>
                  "How do we give field sales reps a tool that actually fits how they work — fast, on the move, often offline — while giving managers the real-time visibility they need to make decisions?"
                </p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <svg viewBox="0 0 460 380" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', border: '1px solid var(--border)', background: 'white' }}>
              <rect width="460" height="380" fill="white"/>
              <text x="230" y="32" fontFamily="sans-serif" fontSize="10" fill="#9A9490" textAnchor="middle" letterSpacing="2">BEFORE VANSALES</text>
              <circle cx="230" cy="170" r="50" fill="#1E3A6E" opacity=".08"/>
              <circle cx="230" cy="170" r="32" fill="#1E3A6E" opacity=".12"/>
              <text x="230" y="166" fontFamily="sans-serif" fontSize="9" fill="#1E3A6E" textAnchor="middle">Sales Rep</text>
              <text x="230" y="178" fontFamily="sans-serif" fontSize="9" fill="#1E3A6E" textAnchor="middle">daily chaos</text>
              <rect x="10" y="56" width="110" height="52" rx="6" fill="#FEF3EC" stroke="#E8C0A8" strokeWidth="1"/>
              <text x="65" y="76" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D" textAnchor="middle">Manual order</text>
              <text x="65" y="90" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D" textAnchor="middle">entry (paper)</text>
              <line x1="120" y1="82" x2="192" y2="140" stroke="#E8C0A8" strokeWidth="1" strokeDasharray="4 3"/>
              <rect x="340" y="56" width="110" height="52" rx="6" fill="#FEF3EC" stroke="#E8C0A8" strokeWidth="1"/>
              <text x="395" y="76" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D" textAnchor="middle">No real-time</text>
              <text x="395" y="90" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D" textAnchor="middle">stock visibility</text>
              <line x1="340" y1="82" x2="268" y2="140" stroke="#E8C0A8" strokeWidth="1" strokeDasharray="4 3"/>
              <rect x="10" y="198" width="110" height="52" rx="6" fill="#FEF3EC" stroke="#E8C0A8" strokeWidth="1"/>
              <text x="65" y="218" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D" textAnchor="middle">WhatsApp for</text>
              <text x="65" y="232" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D" textAnchor="middle">all coordination</text>
              <line x1="120" y1="224" x2="192" y2="198" stroke="#E8C0A8" strokeWidth="1" strokeDasharray="4 3"/>
              <rect x="340" y="198" width="110" height="52" rx="6" fill="#FEF3EC" stroke="#E8C0A8" strokeWidth="1"/>
              <text x="395" y="218" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D" textAnchor="middle">Spreadsheet</text>
              <text x="395" y="232" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D" textAnchor="middle">reporting delays</text>
              <line x1="340" y1="224" x2="268" y2="198" stroke="#E8C0A8" strokeWidth="1" stroke-dasharray="4 3"/>
              <rect x="160" y="280" width="140" height="52" rx="6" fill="#FEF3EC" stroke="#E8C0A8" strokeWidth="1"/>
              <text x="230" y="300" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D" textAnchor="middle">Double data entry</text>
              <text x="230" y="314" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D" textAnchor="middle">(field + back office)</text>
              <line x1="230" y1="280" x2="230" y2="222" stroke="#E8C0A8" strokeWidth="1" strokeDasharray="4 3"/>
              <rect x="60" y="344" width="340" height="28" rx="6" fill="#1E3A6E"/>
              <text x="230" y="362" fontFamily="sans-serif" fontSize="9" fill="white" textAnchor="middle" letterSpacing="1">RESULT: Errors, delays, and lost orders</text>
            </svg>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="cs-section" style={{ background: 'var(--white)' }}>
        <div className="cs-section-label reveal">02 — Research</div>
        <h2 className="cs-h2 reveal">Going to where the work actually happens.</h2>
        <div className="cs-methods reveal">
          {["Stakeholder Interviews", "Contextual Inquiry", "Workflow Shadowing", "Requirements Workshops", "Heuristic Audit"].map((m, i) => (
            <span key={i} className="cs-method-chip">{m}</span>
          ))}
        </div>

        <h3 className="reveal" style={{ marginBottom: '24px' }}>Primary Persona</h3>
        <div style={{ background: 'var(--white)', border: '1px solid var(--border)', maxWidth: '700px' }} className="reveal">
          <div style={{ padding: '32px 32px 0', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#EFF4FB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: '#1E3A6E' }}>P</div>
            <div>
              <div style={{ fontWeight: 500 }}>Prasong, 34</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'var(--ink-muted)' }}>Field Sales Representative</div>
            </div>
          </div>
          <div style={{ fontStyle: 'italic', padding: '20px 32px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginTop: '20px', fontSize: '17px', color: 'var(--ink-soft)' }}>
            "I'm on the road from 7am. I need everything to just work — I can't be filling in forms for 20 minutes between customer visits."
          </div>
          <div style={{ padding: '24px 32px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <div style={{ color: 'var(--accent)', fontSize: '9px', marginBottom: '12px', letterSpacing: '.18em' }}>GOALS</div>
              <ul style={{ listStyle: 'none', fontSize: '12px', color: 'var(--ink-soft)' }}>
                <li>· Record orders quickly</li>
                <li>· Check stock before promise</li>
              </ul>
            </div>
            <div>
              <div style={{ color: 'var(--accent)', fontSize: '9px', marginBottom: '12px', letterSpacing: '.18em' }}>PAIN POINTS</div>
              <ul style={{ listStyle: 'none', fontSize: '12px', color: 'var(--ink-soft)' }}>
                <li>· Gloved hands (touch size)</li>
                <li>· Direct sunlight visibility</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginTop: '64px' }} className="reveal">
          <div className="cs-insight-card"><div className="cs-insight-label">Speed</div><p className="cs-insight-body">Target: Under 90s per order. Previous system took 8 minutes.</p></div>
          <div className="cs-insight-card"><div className="cs-insight-label">Context</div><p className="cs-insight-body">70% of use in direct sun. Required high contrast mode.</p></div>
          <div className="cs-insight-card"><div className="cs-insight-label">Trust</div><p className="cs-insight-body">Required offline mode with reliable sync status.</p></div>
        </div>
      </section>

      {/* DEFINE */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">03 — Define</div>
        <h2 className="cs-h2 reveal">Turning friction points into design principles.</h2>
        <div className="cs-hmw-list reveal">
          <div className="cs-hmw-item">
            <span className="cs-hmw-num">HMW</span>
            <p>"How might we reduce order entry to under 90 seconds while giving managers real-time visibility — without adding complexity to the rep's daily workflow?"</p>
          </div>
        </div>
        
        <div className="cs-metrics-row reveal">
          <div className="cs-metric">
            <div className="cs-metric-label">Speed</div>
            <div className="cs-metric-value">{"<"} 90s target entry time per customer</div>
          </div>
          <div className="cs-metric">
            <div className="cs-metric-label">Reliability</div>
            <div className="cs-metric-value">Offline-first core order flows</div>
          </div>
          <div className="cs-metric">
            <div className="cs-metric-label">Clarity</div>
            <div className="cs-metric-value">4.5:1+ minimum contrast for all field UI</div>
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section className="cs-section" style={{ background: 'var(--white)' }}>
        <div className="cs-section-label reveal">04 — Ideate & Design</div>
        <h2 className="cs-h2 reveal">Designing for one hand, full sun, 30 seconds.</h2>
        
        <svg viewBox="0 0 960 140" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', background: '#EFF4FB', border: '1px solid var(--border)', marginTop: '48px' }} className="reveal">
          <rect width="960" height="140" fill="#EFF4FB"/>
          <text x="480" y="28" fontFamily="sans-serif" fontSize="9" fill="#9A9490" textAnchor="middle" letterSpacing="2">OPTIMISED ORDER ENTRY FLOW — TARGET: UNDER 90 SECONDS</text>
          <rect x="20" y="50" width="100" height="44" rx="6" fill="#1E3A6E"/>
          <text x="70" y="70" fontFamily="sans-serif" fontSize="9" fill="white" textAnchor="middle">Open app</text>
          <line x1="120" y1="72" x2="148" y2="72" stroke="#BDC8DC" strokeWidth="1.5"/>
          <rect x="153" y="50" width="120" height="44" rx="6" fill="white" stroke="#BDC8DC" strokeWidth="1"/>
          <text x="213" y="70" fontFamily="sans-serif" fontSize="9" fill="#1E3A6E" textAnchor="middle">Select customer</text>
          <rect x="306" y="50" width="120" height="44" rx="6" fill="white" stroke="#BDC8DC" strokeWidth="1"/>
          <text x="366" y="70" fontFamily="sans-serif" fontSize="9" fill="#1E3A6E" textAnchor="middle">Add products</text>
          <rect x="459" y="50" width="120" height="44" rx="6" fill="white" stroke="#BDC8DC" strokeWidth="1"/>
          <text x="519" y="70" fontFamily="sans-serif" fontSize="9" fill="#1E3A6E" textAnchor="middle">Check stock</text>
          <rect x="612" y="50" width="120" height="44" rx="6" fill="white" stroke="#BDC8DC" strokeWidth="1"/>
          <text x="672" y="70" fontFamily="sans-serif" fontSize="9" fill="#1E3A6E" textAnchor="middle">Confirm order</text>
          <rect x="765" y="50" width="120" height="44" rx="6" fill="#C4622D"/>
          <text x="825" y="70" fontFamily="sans-serif" fontSize="9" fill="white" textAnchor="middle">Synced ✓</text>
        </svg>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '64px' }} className="reveal">
          <div className="cs-insight-card"><div className="cs-insight-title">Large Touch Targets</div><p className="cs-insight-body">Min 56×56px targets for gloved hands and movement.</p></div>
          <div className="cs-insight-card"><div className="cs-insight-title">High-Contrast Mode</div><p className="cs-insight-body">Field mode with 7:1+ contrast ratios for sunlight.</p></div>
          <div className="cs-insight-card"><div className="cs-insight-title">Offline-First</div><p className="cs-insight-body">Local-first writes with persistent sync status indicators.</p></div>
          <div className="cs-insight-card"><div className="cs-insight-title">Progressive Disclosure</div><p className="cs-insight-body">Default flow stays under 5 taps for speed.</p></div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="cs-section cs-outcome">
        <div className="cs-section-label reveal">05 — Outcome</div>
        <h2 className="cs-h2 reveal">In production, and still shipping.</h2>
        <div className="cs-outcome-stats reveal">
          <div className="cs-stat"><div className="cs-stat-num">{"<"}90s</div><div className="cs-stat-label">Order entry time achieved</div></div>
          <div className="cs-stat"><div className="cs-stat-num">Live</div><div className="cs-stat-label">In daily production use</div></div>
          <div className="cs-stat"><div className="cs-stat-num">Solo</div><div className="cs-stat-label">End-to-end design ownership</div></div>
        </div>
        <div className="cs-reflection reveal" style={{ marginTop: '56px' }}>
          <p>Working directly with developers from day one meant design decisions were grounded in what was actually buildable. No designs were thrown away due to technical constraints — they were shaped by them from the start.</p>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <div className="cs-next">
        <div className="cs-next-label">Next Project</div>
        <Link href="/work/leafy" className="cs-next-link">
          Leafy — Plant E-commerce <span>→</span>
        </Link>
      </div>

      <footer style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <p className="footer-copy" style={{ color: 'var(--ink)' }}>© 2025 Panalee Palasri</p>
        <div className="footer-socials">
          <Link href="/" style={{ color: 'var(--ink)' }}>Back to Home</Link>
        </div>
      </footer>
      <div id="cursor"></div>
    </div>
  );
}
