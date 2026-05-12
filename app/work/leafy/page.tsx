"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function LeafyCaseStudy() {
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
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'var(--ink-muted)' }}>
          Leafy — Case Study
        </div>
      </nav>

      {/* HERO */}
      <section className="cs-hero" style={{ background: '#2D5A1B', color: 'white' }}>
        <div className="cs-hero-inner">
          <div className="cs-eyebrow reveal" style={{ color: 'rgba(255,255,255,0.5)' }}>Case Study 01 · E-commerce · Capstone Project</div>
          <h1 className="cs-title reveal reveal-delay-1" style={{ color: 'white' }}>
            Leafy — <em>Where knowledge<br />meets commerce.</em>
          </h1>
          <p className="cs-subtitle reveal reveal-delay-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
            An accessibility-first plant e-commerce and knowledge hub with a role-based adaptive UI, 
            designed from the ground up for both buyers and sellers.
          </p>
          
          <div className="cs-meta-row reveal reveal-delay-3">
            <div className="cs-meta-block">
              <span className="cs-meta-label">Timeline</span>
              <span className="cs-meta-value">Aug 2023 – May 2024</span>
            </div>
            <div className="cs-meta-block">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX/UI Designer & PM</span>
            </div>
            <div className="cs-meta-block">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">3 Members</span>
            </div>
            <div className="cs-meta-block">
              <span className="cs-meta-label">Standard</span>
              <span className="cs-meta-value">WCAG 2.1 AA</span>
            </div>
          </div>
        </div>

        <div className="cs-outcome-stats reveal reveal-delay-4" style={{ 
          background: 'rgba(255,255,255,0.08)', 
          borderTop: '1px solid rgba(255,255,255,0.12)', 
          marginTop: '80px',
          gridTemplateColumns: 'repeat(4, 1fr)'
        }}>
          <div className="cs-stat">
            <div className="cs-stat-num">92%</div>
            <div className="cs-stat-label">Task completion rate</div>
          </div>
          <div className="cs-stat">
            <div className="cs-stat-num">AA</div>
            <div className="cs-stat-label">WCAG accessibility</div>
          </div>
          <div className="cs-stat">
            <div className="cs-stat-num">2</div>
            <div className="cs-stat-label">User roles designed</div>
          </div>
          <div className="cs-stat">
            <div className="cs-stat-num">5</div>
            <div className="cs-stat-label">Usability test rounds</div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="cs-section">
        <div className="cs-section-label reveal">01 — The Problem</div>
        <div className="cs-two-col">
          <div>
            <h2 className="cs-h2 reveal">Plant lovers had no place that truly served them.</h2>
            <div className="reveal">
              <p>Urban plant buyers in Thailand were caught between generic e-commerce platforms (Lazada, Shopee) that offered no guidance, and scattered blog content that couldn't help them actually purchase. Sellers — typically small nurseries — had no affordable way to build trust through expertise.</p>
              <p>This was our Capstone project brief: design and build a platform that unified knowledge and commerce into a single, accessible experience.</p>
              <div style={{ background: 'var(--ink)', padding: '48px', borderLeft: '3px solid var(--accent)', marginTop: '32px' }}>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontStyle: 'italic' }}>
                  "How do we help first-time plant buyers make confident decisions, while giving small sellers the tools to compete on expertise rather than just price?"
                </p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <svg viewBox="0 0 460 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', border: '1px solid var(--border)' }}>
              <rect width="460" height="400" fill="#F6F2EC"/>
              <text x="230" y="36" fontFamily="sans-serif" fontSize="11" fill="#9A9490" textAnchor="middle" letterSpacing="2">THE GAP WE IDENTIFIED</text>
              <rect x="20" y="56" width="180" height="130" rx="8" fill="white" stroke="#E8E2D8" strokeWidth="1"/>
              <text x="110" y="82" fontFamily="sans-serif" fontSize="10" fill="#C4622D" textAnchor="middle" letterSpacing="1">EXISTING E-COMMERCE</text>
              <rect x="40" y="96" width="140" height="7" rx="2" fill="#E8E2D8"/>
              <rect x="40" y="110" width="110" height="7" rx="2" fill="#E8E2D8"/>
              <rect x="40" y="124" width="120" height="7" rx="2" fill="#E8E2D8"/>
              <text x="110" y="158" fontFamily="sans-serif" fontSize="9" fill="#C4622D" textAnchor="middle">✓ Buy · ✗ No guidance</text>
              <rect x="260" y="56" width="180" height="130" rx="8" fill="white" stroke="#E8E2D8" strokeWidth="1"/>
              <text x="350" y="82" fontFamily="sans-serif" fontSize="10" fill="#4A7A36" textAnchor="middle" letterSpacing="1">BLOGS / FORUMS</text>
              <rect x="280" y="96" width="140" height="7" rx="2" fill="#E8E2D8"/>
              <rect x="280" y="110" width="100" height="7" rx="2" fill="#E8E2D8"/>
              <rect x="280" y="124" width="120" height="7" rx="2" fill="#E8E2D8"/>
              <text x="350" y="158" fontFamily="sans-serif" fontSize="9" fill="#4A7A36" textAnchor="middle">✓ Guidance · ✗ Can't buy</text>
              <path d="M230 200 L230 240" stroke="#C4622D" strokeWidth="1.5" strokeDasharray="4 3"/>
              <polygon points="225,238 230,248 235,238" fill="#C4622D"/>
              <rect x="90" y="256" width="280" height="80" rx="8" fill="#1A1814"/>
              <text x="230" y="283" fontFamily="sans-serif" fontSize="11" fill="rgba(255,255,255,.5)" textAnchor="middle" letterSpacing="1">USER PAIN POINT</text>
              <text x="230" y="305" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,.75)" textAnchor="middle">"I found the perfect plant online but had"</text>
              <text x="230" y="320" fontFamily="sans-serif" fontSize="10" fill="rgba(255,255,255,.75)" textAnchor="middle">"no idea how to care for it. I killed it."</text>
              <rect x="130" y="352" width="200" height="32" rx="6" fill="#2D5A1B"/>
              <text x="230" y="373" fontFamily="sans-serif" fontSize="10" fill="white" textAnchor="middle" letterSpacing="1">LEAFY — THE UNIFIED SOLUTION</text>
            </svg>
          </div>
        </div>
      </section>

      <div className="cs-divider"></div>

      {/* RESEARCH */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">02 — Research</div>
        <h2 className="cs-h2 reveal">Understanding the people before the pixels.</h2>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '24px 0 56px' }} className="reveal">
          {["8 User Interviews", "Competitive Analysis", "Affinity Mapping", "User Surveys", "Heuristic Evaluation"].map((m, i) => (
            <span key={i} style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid var(--accent-light)', background: 'var(--accent-light)', padding: '6px 14px' }}>
              {m}
            </span>
          ))}
        </div>

        <svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', border: '1px solid var(--border)', background: 'white', marginBottom: '48px' }} className="reveal">
          <text x="20" y="32" fontFamily="sans-serif" fontSize="11" fill="#9A9490" letterSpacing="2">COMPETITIVE ANALYSIS</text>
          <rect x="0" y="44" width="1000" height="28" fill="#F6F2EC"/>
          <text x="20" y="62" fontFamily="sans-serif" fontSize="9" fill="#9A9490" letterSpacing="1">PLATFORM</text>
          <text x="220" y="62" fontFamily="sans-serif" fontSize="9" fill="#9A9490" textAnchor="middle" letterSpacing="1">PLANT EDUCATION</text>
          <text x="380" y="62" fontFamily="sans-serif" fontSize="9" fill="#9A9490" textAnchor="middle" letterSpacing="1">E-COMMERCE</text>
          <text x="540" y="62" fontFamily="sans-serif" fontSize="9" fill="#9A9490" textAnchor="middle" letterSpacing="1">SELLER TOOLS</text>
          <text x="700" y="62" fontFamily="sans-serif" fontSize="9" fill="#9A9490" textAnchor="middle" letterSpacing="1">ACCESSIBILITY</text>
          <text x="860" y="62" fontFamily="sans-serif" fontSize="9" fill="#9A9490" textAnchor="middle" letterSpacing="1">MOBILE</text>
          <rect x="0" y="72" width="1000" height="30" fill="white"/>
          <text x="20" y="91" fontFamily="sans-serif" fontSize="10" fill="#2D2420">Lazada / Shopee</text>
          <text x="220" y="91" fontFamily="sans-serif" fontSize="13" fill="#C4622D" textAnchor="middle">✗</text>
          <text x="380" y="91" fontFamily="sans-serif" fontSize="13" fill="#3D8B3D" textAnchor="middle">✓</text>
          <text x="540" y="91" fontFamily="sans-serif" fontSize="13" fill="#3D8B3D" textAnchor="middle">✓</text>
          <text x="700" y="91" fontFamily="sans-serif" fontSize="13" fill="#C4622D" textAnchor="middle">✗</text>
          <text x="860" y="91" fontFamily="sans-serif" fontSize="13" fill="#3D8B3D" textAnchor="middle">✓</text>
          <rect x="0" y="102" width="1000" height="30" fill="#F9F7F3"/>
          <text x="20" y="121" fontFamily="sans-serif" fontSize="10" fill="#2D2420">Pantip / Plant forums</text>
          <text x="220" y="121" fontFamily="sans-serif" fontSize="13" fill="#3D8B3D" textAnchor="middle">✓</text>
          <text x="380" y="121" fontFamily="sans-serif" fontSize="13" fill="#C4622D" textAnchor="middle">✗</text>
          <text x="540" y="121" fontFamily="sans-serif" fontSize="13" fill="#C4622D" textAnchor="middle">✗</text>
          <text x="700" y="121" fontFamily="sans-serif" fontSize="13" fill="#C4622D" textAnchor="middle">✗</text>
          <text x="860" y="121" fontFamily="sans-serif" fontSize="13" fill="#E6A020" textAnchor="middle">~</text>
          <rect x="0" y="132" width="1000" height="30" fill="white"/>
          <text x="20" y="151" fontFamily="sans-serif" fontSize="10" fill="#2D2420">The Sill / Bloomscape (intl)</text>
          <text x="220" y="151" fontFamily="sans-serif" fontSize="13" fill="#3D8B3D" textAnchor="middle">✓</text>
          <text x="380" y="151" fontFamily="sans-serif" fontSize="13" fill="#3D8B3D" textAnchor="middle">✓</text>
          <text x="540" y="151" fontFamily="sans-serif" fontSize="13" fill="#C4622D" textAnchor="middle">✗</text>
          <text x="700" y="151" fontFamily="sans-serif" fontSize="13" fill="#E6A020" textAnchor="middle">~</text>
          <text x="860" y="151" fontFamily="sans-serif" fontSize="13" fill="#3D8B3D" textAnchor="middle">✓</text>
          <rect x="0" y="162" width="1000" height="42" fill="#2D5A1B"/>
          <text x="20" y="188" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="white">Leafy (our solution)</text>
          <text x="220" y="188" fontFamily="sans-serif" fontSize="13" fill="#7EC864" textAnchor="middle">✓</text>
          <text x="380" y="188" fontFamily="sans-serif" fontSize="13" fill="#7EC864" textAnchor="middle">✓</text>
          <text x="540" y="188" fontFamily="sans-serif" fontSize="13" fill="#7EC864" textAnchor="middle">✓</text>
          <text x="700" y="188" fontFamily="sans-serif" fontSize="13" fill="#7EC864" textAnchor="middle">✓</text>
          <text x="860" y="188" fontFamily="sans-serif" fontSize="13" fill="#7EC864" textAnchor="middle">✓</text>
        </svg>

        <div className="cs-two-col reveal">
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', overflow: 'hidden' }}>
            <div style={{ padding: '32px 32px 0', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#EFF7EE', color: '#2D5A1B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: '22px' }}>N</div>
              <div>
                <div style={{ fontWeight: 600 }}>Nara, 26</div>
                <div style={{ fontSize: '12px', color: 'var(--ink-muted)' }}>Graphic Designer · Buyer</div>
              </div>
            </div>
            <div style={{ fontStyle: 'italic', padding: '20px 32px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginTop: '20px' }}>
              "I keep killing my plants and I don't know why. I just want someone to tell me exactly what to do."
            </div>
            <div style={{ padding: '24px 32px' }}>
              <div style={{ color: 'var(--accent)', fontSize: '12px', marginBottom: '8px' }}>GOALS</div>
              <ul style={{ listStyle: 'none', fontSize: '13px', color: 'var(--ink-soft)' }}>
                <li>· Find the right plant for her condo</li>
                <li>· Learn care without feeling stupid</li>
              </ul>
            </div>
          </div>
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', overflow: 'hidden' }}>
            <div style={{ padding: '32px 32px 0', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#FEF3EC', color: '#C4622D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: '22px' }}>S</div>
              <div>
                <div style={{ fontWeight: 600 }}>Somchai, 38</div>
                <div style={{ fontSize: '12px', color: 'var(--ink-muted)' }}>Nursery Owner · Seller</div>
              </div>
            </div>
            <div style={{ fontStyle: 'italic', padding: '20px 32px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginTop: '20px' }}>
              "I know more about these plants than anyone. But on Shopee I'm invisible — I'm just a price tag."
            </div>
            <div style={{ padding: '24px 32px' }}>
              <div style={{ color: 'var(--accent)', fontSize: '12px', marginBottom: '8px' }}>GOALS</div>
              <ul style={{ listStyle: 'none', fontSize: '13px', color: 'var(--ink-soft)' }}>
                <li>· Reach urban buyers who value quality</li>
                <li>· Share expertise to build trust</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="cs-h3 reveal" style={{ marginTop: '72px', marginBottom: '8px' }}>User Journey — Nara (Buyer)</h3>
        <svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', minWidth: '700px', background: 'white', border: '1px solid var(--border)' }} className="reveal">
          <rect width="1000" height="44" fill="#2D5A1B"/>
          <text x="100" y="26" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,.6)" textAnchor="middle" letterSpacing="1.5">AWARE</text>
          <text x="300" y="26" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,.6)" textAnchor="middle" letterSpacing="1.5">RESEARCH</text>
          <text x="500" y="26" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,.6)" textAnchor="middle" letterSpacing="1.5">CONSIDER</text>
          <text x="700" y="26" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,.6)" textAnchor="middle" letterSpacing="1.5">PURCHASE</text>
          <text x="900" y="26" fontFamily="sans-serif" fontSize="9" fill="rgba(255,255,255,.6)" textAnchor="middle" letterSpacing="1.5">POST-PURCHASE</text>
          <line x1="200" y1="44" x2="200" y2="280" stroke="#E8E2D8" strokeWidth="1"/>
          <line x1="400" y1="44" x2="400" y2="280" stroke="#E8E2D8" strokeWidth="1"/>
          <line x1="600" y1="44" x2="600" y2="280" stroke="#E8E2D8" strokeWidth="1"/>
          <line x1="800" y1="44" x2="800" y2="280" stroke="#E8E2D8" strokeWidth="1"/>
          <polyline points="60,160 140,140 200,140 260,180 340,200 400,200 460,150 540,130 600,130 660,120 740,110 800,110 860,130 940,120" fill="none" stroke="#2D5A1B" strokeWidth="2.5" strokeLinejoin="round"/>
          <circle cx="100" cy="150" r="5" fill="#2D5A1B"/>
          <circle cx="300" cy="190" r="5" fill="#C4622D"/>
          <circle cx="500" cy="140" r="5" fill="#2D5A1B"/>
          <circle cx="700" cy="115" r="5" fill="#2D5A1B"/>
          <circle cx="900" cy="125" r="5" fill="#2D5A1B"/>
          <circle cx="300" cy="190" r="10" fill="none" stroke="#C4622D" strokeWidth="1" strokeDasharray="3 2"/>
          <text x="300" y="230" fontFamily="sans-serif" fontSize="8" fill="#C4622D" textAnchor="middle">No care info</text>
          <text x="300" y="242" fontFamily="sans-serif" fontSize="8" fill="#C4622D" textAnchor="middle">on listings</text>
        </svg>
      </section>

      {/* DEFINE */}
      <section className="cs-section">
        <div className="cs-section-label reveal">03 — Define</div>
        <h2 className="cs-h2 reveal">Turning research into design direction.</h2>
        <div className="cs-hmw-list reveal">
          <div className="cs-hmw-item">
            <span className="cs-hmw-num">HMW</span>
            <p>"How might we design a single platform where a buyer's curiosity and a seller's expertise meet — making every interaction feel both trustworthy and empowering?"</p>
          </div>
        </div>
        
        <div className="cs-metrics-row reveal">
          <div className="cs-metric">
            <div className="cs-metric-label">Usability</div>
            <div className="cs-metric-value">≥ 85% Task completion rate across core user flows</div>
          </div>
          <div className="cs-metric">
            <div className="cs-metric-label">Accessibility</div>
            <div className="cs-metric-value">WCAG AA targets for colour, contrast, and navigation</div>
          </div>
          <div className="cs-metric">
            <div className="cs-metric-label">Switching</div>
            <div className="cs-metric-value">{"<"} 2 taps to transition between Buyer and Seller modes</div>
          </div>
        </div>
      </section>

      {/* IDEATE */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">04 — Ideate</div>
        <h2 className="cs-h2 reveal">Information Architecture</h2>
        <svg viewBox="0 0 960 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', background: 'white', border: '1px solid var(--border)', marginTop: '40px' }} className="reveal">
          <rect width="960" height="300" fill="white"/>
          <rect x="390" y="20" width="180" height="40" rx="6" fill="#2D5A1B"/>
          <text x="480" y="44" fontFamily="sans-serif" fontSize="11" fill="white" textAnchor="middle" fontWeight="600">LEAFY HOME</text>
          <line x1="480" y1="60" x2="480" y2="90" stroke="#C8C0B5" strokeWidth="1.5"/>
          <line x1="140" y1="90" x2="820" y2="90" stroke="#C8C0B5" strokeWidth="1.5"/>
          <line x1="140" y1="90" x2="140" y2="110" stroke="#C8C0B5" strokeWidth="1.5"/>
          <line x1="340" y1="90" x2="340" y2="110" stroke="#C8C0B5" strokeWidth="1.5"/>
          <line x1="540" y1="90" x2="540" y2="110" stroke="#C8C0B5" strokeWidth="1.5"/>
          <line x1="740" y1="90" x2="740" y2="110" stroke="#C8C0B5" strokeWidth="1.5"/>
          <rect x="60" y="110" width="160" height="36" rx="5" fill="#EFF7EE" stroke="#A8C8A0" strokeWidth="1"/>
          <text x="140" y="132" fontFamily="sans-serif" fontSize="10" fill="#2D5A1B" textAnchor="middle">Shop (Buyer)</text>
          <rect x="260" y="110" width="160" height="36" rx="5" fill="#EFF7EE" stroke="#A8C8A0" strokeWidth="1"/>
          <text x="340" y="132" fontFamily="sans-serif" fontSize="10" fill="#2D5A1B" textAnchor="middle">Knowledge Hub</text>
          <rect x="460" y="110" width="160" height="36" rx="5" fill="#FEF3EC" stroke="#E8C0A8" strokeWidth="1"/>
          <text x="540" y="132" fontFamily="sans-serif" fontSize="10" fill="#C4622D" textAnchor="middle">Seller Dashboard</text>
          <rect x="660" y="110" width="160" height="36" rx="5" fill="#F0F4FB" stroke="#BDC8DC" strokeWidth="1"/>
          <text x="740" y="132" fontFamily="sans-serif" fontSize="10" fill="#1E3A6E" textAnchor="middle">Account / Profile</text>
          <text x="480" y="270" fontFamily="sans-serif" fontSize="9" fill="#2D5A1B" textAnchor="middle">↕ Role toggle available from any screen</text>
        </svg>

        <h3 className="cs-h3 reveal" style={{ marginTop: '72px', marginBottom: '24px' }}>Wireframe Explorations</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="reveal">
          <div>
            <svg viewBox="0 0 280 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', border: '1px solid var(--border)', background: 'white' }}>
              <rect width="280" height="400" fill="white"/>
              <rect width="280" height="36" fill="#E8E2D8"/>
              <rect x="10" y="46" width="260" height="28" rx="4" fill="#F0EDE8"/>
              <rect x="10" y="116" width="124" height="130" rx="6" fill="#F0EDE8"/>
              <rect x="146" y="116" width="124" height="130" rx="6" fill="#F0EDE8"/>
              <rect x="70" y="258" width="140" height="24" rx="12" fill="#E8E2D8"/>
              <rect x="72" y="260" width="68" height="20" rx="10" fill="#C8C0B5"/>
            </svg>
            <p className="cs-caption">Buyer Home</p>
          </div>
          <div>
            <svg viewBox="0 0 280 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', border: '1px solid var(--border)', background: 'white' }}>
              <rect width="280" height="400" fill="white"/>
              <rect width="280" height="140" fill="#D8D0C8" x="10" y="46" rx="6"/>
              <rect x="10" y="198" width="160" height="12" rx="2" fill="#C8C0B5"/>
              <rect x="10" y="276" width="60" height="22" rx="4" fill="#EFF7EE" stroke="#A8C8A0" strokeWidth="1"/>
              <rect x="10" y="354" width="260" height="36" rx="6" fill="#C8C0B5"/>
            </svg>
            <p className="cs-caption">Product Detail</p>
          </div>
          <div>
            <svg viewBox="0 0 280 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', border: '1px solid var(--border)', background: 'white' }}>
              <rect width="280" height="400" fill="white"/>
              <rect x="10" y="46" width="78" height="56" rx="4" fill="#F0EDE8"/>
              <rect x="101" y="46" width="78" height="56" rx="4" fill="#F0EDE8"/>
              <rect x="192" y="46" width="78" height="56" rx="4" fill="#F0EDE8"/>
              <rect x="10" y="132" width="260" height="52" rx="4" fill="#F0EDE8"/>
              <rect x="10" y="260" width="260" height="36" rx="4" fill="#E8E2D8" stroke="#C8C0B5" strokeWidth="1" strokeDasharray="4 2"/>
            </svg>
            <p className="cs-caption">Seller Dashboard</p>
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section className="cs-section">
        <div className="cs-section-label reveal">05 — Design</div>
        <h2 className="cs-h2 reveal">Design System & Visual Language</h2>
        <svg viewBox="0 0 960 340" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', border: '1px solid var(--border)', background: '#F6F2EC', marginTop: '40px' }} className="reveal">
          <text x="20" y="32" fontFamily="sans-serif" fontSize="9" fill="#9A9490" letterSpacing="2">COLOUR PALETTE</text>
          <rect x="20" y="44" width="70" height="56" rx="4" fill="#2D5A1B"/>
          <rect x="100" y="44" width="70" height="56" rx="4" fill="#5EA83E"/>
          <rect x="180" y="44" width="70" height="56" rx="4" fill="#EFF7EE"/>
          <rect x="260" y="44" width="70" height="56" rx="4" fill="#1A3B10"/>
          <rect x="340" y="44" width="70" height="56" rx="4" fill="#F5A623"/>
          <rect x="420" y="44" width="70" height="56" rx="4" fill="#D0021B"/>
          <line x1="20" y1="148" x2="940" y2="148" stroke="#E8E2D8" strokeWidth="1"/>
          <text x="20" y="172" fontFamily="sans-serif" fontSize="9" fill="#9A9490" letterSpacing="2">TYPOGRAPHY</text>
          <text x="20" y="204" fontFamily="Georgia,serif" fontSize="28" fill="#2D5A1B">Heading / Sarabun Bold</text>
          <text x="20" y="228" fontFamily="sans-serif" fontSize="16" fill="#1A3B10">Body text / Sarabun Regular — สวัสดี</text>
          <line x1="20" y1="268" x2="940" y2="268" stroke="#E8E2D8" strokeWidth="1"/>
          <rect x="20" y="302" width="100" height="28" rx="14" fill="#2D5A1B"/>
          <rect x="134" y="302" width="100" height="28" rx="14" fill="transparent" stroke="#2D5A1B" strokeWidth="1.5"/>
          <rect x="248" y="302" width="120" height="28" rx="4" fill="#F0EDE8" stroke="#C8C0B5" strokeWidth="1"/>
        </svg>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '48px' }} className="reveal">
          <div className="cs-insight-card"><div className="cs-insight-title">Accessibility First</div><p className="cs-insight-body">Primary green achieves 7.2:1 contrast ratio, exceeding WCAG AAA standard.</p></div>
          <div className="cs-insight-card"><div className="cs-insight-title">Role-switching UI</div><p className="cs-insight-body">Persistent toggle allows switching between Buyer and Seller modes with 1 tap.</p></div>
        </div>
      </section>

      {/* TEST */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">06 — Test & Iterate</div>
        <h2 className="cs-h2 reveal">Task Completion Rate — Before vs After</h2>
        <svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', background: 'white', border: '1px solid var(--border)', margin: '32px 0' }} className="reveal">
          <rect width="900" height="260" fill="white"/>
          <line x1="140" y1="50" x2="880" y2="50" stroke="#F0EDE8" strokeWidth="1"/>
          <line x1="140" y1="210" x2="880" y2="210" stroke="#F0EDE8" strokeWidth="1"/>
          <rect x="160" y="120" width="50" height="90" rx="3" fill="#C8C0B5"/>
          <rect x="220" y="68" width="50" height="142" rx="3" fill="#2D5A1B"/>
          <text x="205" y="228" fontFamily="sans-serif" fontSize="8" fill="#9A9490" textAnchor="middle">Find a plant</text>
          <rect x="340" y="130" width="50" height="80" rx="3" fill="#C8C0B5"/>
          <rect x="400" y="59" width="50" height="151" rx="3" fill="#2D5A1B"/>
          <text x="385" y="228" fontFamily="sans-serif" fontSize="8" fill="#9A9490" textAnchor="middle">Read care guide</text>
          <rect x="520" y="100" width="50" height="110" rx="3" fill="#C8C0B5"/>
          <rect x="580" y="68" width="50" height="142" rx="3" fill="#2D5A1B"/>
          <text x="565" y="228" fontFamily="sans-serif" fontSize="8" fill="#9A9490" textAnchor="middle">Complete checkout</text>
          <rect x="700" y="170" width="50" height="40" rx="3" fill="#C8C0B5"/>
          <rect x="760" y="75" width="50" height="135" rx="3" fill="#2D5A1B"/>
          <text x="745" y="228" fontFamily="sans-serif" fontSize="8" fill="#9A9490" textAnchor="middle">Switch to seller</text>
        </svg>

        <div style={{ marginTop: '48px' }} className="reveal">
          <div className="cs-decision-item">
            <div className="cs-decision-label">Role Toggle</div>
            <div className="cs-decision-body">Promoted to persistent pill in top navigation. Role-switch time dropped from avg. 22s to 4s.</div>
          </div>
          <div className="cs-decision-item">
            <div className="cs-decision-label">Integrated Care</div>
            <div className="cs-decision-body">Embedded care summary badges directly on product pages. Checkout completion improved by 28%.</div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="cs-section cs-outcome">
        <div className="cs-section-label reveal">07 — Outcome</div>
        <h2 className="cs-h2 reveal">What we shipped.</h2>
        <div className="cs-outcome-stats reveal">
          <div className="cs-stat"><div className="cs-stat-num">92%</div><div className="cs-stat-label">Task completion rate</div></div>
          <div className="cs-stat"><div className="cs-stat-num">AA</div><div className="cs-stat-label">WCAG accessibility reached</div></div>
          <div className="cs-stat"><div className="cs-stat-num">{"<"}4s</div><div className="cs-stat-label">Role-switch time</div></div>
        </div>
        <div className="cs-reflection reveal" style={{ marginTop: '56px' }}>
          <p>This project taught me that accessibility isn't a checklist — it's a mindset. Every design decision from colour selection to interaction timing has an accessibility dimension.</p>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <div className="cs-next">
        <div className="cs-next-label">Next Project</div>
        <Link href="/work/vansales" className="cs-next-link">
          Vansales — B2B Product Design <span>→</span>
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
