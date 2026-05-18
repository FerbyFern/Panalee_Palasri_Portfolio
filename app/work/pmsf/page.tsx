"use client";

import Link from "next/link";
import { useEffect } from "react";
import CaseStudyHero, { CaseStudyPreview } from "../../../components/CaseStudyHero";

export default function PMSFCaseStudy() {
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
        <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 'var(--fs-11)', color: 'var(--ink-muted)' }}>
          Case Study 03
        </div>
      </nav>

      {/* HERO */}
      <CaseStudyHero
        background="var(--ink)"
        eyebrow="Case Study 03 · Web Redesign · Freelance"
        title={<>PMSF — <em style={{ color: 'rgba(255,255,255,0.55)' }}>Redesigning for<br />royal credibility.</em></>}
        subtitle="A full responsive redesign of the Princess Maha Chakri Sirindhorn Foundation website — reducing navigation from 11 items to 5, and making programmes findable in under 2 clicks."
        chips={[
          { label: 'Timeline', value: 'Sep – Dec 2022' },
          { label: 'Role', value: 'UX/UI Designer (Freelance)' },
          { label: 'Platform', value: 'Responsive Web' },
          { label: 'Focus', value: 'IA + Visual Identity' },
        ]}
        stats={[
          { num: '11→5', label: 'Navigation items reduced' },
          { num: '< 2', label: 'Clicks to any programme' },
          { num: '100%', label: 'Mobile responsive coverage' },
        ]}
        statsColumns={3}
        media={
          <CaseStudyPreview
            url="pmsf.org"
            accent="var(--accent)"
            title="Royal foundation site"
            subtitle="Information architecture and trust signals designed for clarity."
            imageSrc="/images/work/pmsf/thumbnail.png"
            imageAlt="PMSF redesign preview"
            cards={[
              { label: 'Navigation', value: '11 → 5' },
              { label: 'Access', value: '< 2 clicks' },
              { label: 'Coverage', value: 'Responsive' },
            ]}
          />
        }
      />

      {/* PROBLEM */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">01 — The Challenge</div>
        <h2 className="cs-h2 reveal">11 navigation items.<br />No clear hierarchy. Zero mobile.</h2>
        <div className="cs-two-col reveal" style={{ marginTop: '48px' }}>
          <div>
            <p style={{ fontSize: 'var(--fs-16)', lineHeight: 1.85, color: 'var(--ink)', marginBottom: '16px' }}>
              The Princess Maha Chakri Sirindhorn Foundation (PMSF) is one of Thailand's most prominent royal foundations. But its digital presence hadn't kept pace with its stature — 11 top-level navigation items, no mobile layout, and content buried 4 clicks deep.
            </p>
            <p style={{ fontSize: 'var(--fs-16)', lineHeight: 1.85, color: 'var(--ink)' }}>
              Stakeholders needed the site to communicate royal patronage and institutional credibility at a glance, while making programmes — the Foundation's core offering — easy to discover and act on.
            </p>
          </div>
          <div style={{ background: 'var(--ink)', padding: '48px', borderLeft: '3px solid var(--accent)' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "var(--font-display), serif", fontSize: 'var(--fs-20)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.6 }}>
              "How might we bring the Foundation's website up to the standard of its reputation — while making it simple enough for any visitor to find what they need in under two clicks?"
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="cs-section" style={{ background: 'var(--white)' }}>
        <div className="cs-section-label reveal">02 — Research &amp; Discovery</div>
        <h2 className="cs-h2 reveal">Understanding who visits<br />and what they need.</h2>

        <div className="cs-methods reveal">
          {['Stakeholder Interviews', 'Analytics Review', 'Heuristic Evaluation', 'Competitor Benchmarking', 'Content Audit'].map((m) => (
            <span key={m} className="cs-method-chip">{m}</span>
          ))}
        </div>

        <h3 className="cs-h3 reveal" style={{ marginBottom: '24px' }}>Navigation Restructure</h3>
        <p className="reveal" style={{ marginBottom: '32px', maxWidth: '640px', fontSize: 'var(--fs-16)', lineHeight: 1.85, color: 'var(--ink-soft)' }}>
          The original site had 11 top-level navigation items with no clear priority order. The redesign reduced this to 5 primary items with logical sub-groups.
        </p>

        {/* Nav comparison SVG */}
        <svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', border: '1px solid var(--border)', marginBottom: '48px' }} className="reveal">
          <rect width="500" height="260" fill="#FEF9F6"/>
          <text x="250" y="28" fontFamily="sans-serif" fontSize="9" fill="#9A9490" textAnchor="middle" letterSpacing="2">BEFORE — 11 TOP-LEVEL ITEMS, NO HIERARCHY</text>
          <line x1="0" y1="36" x2="500" y2="36" stroke="#E8C0A8" strokeWidth="1"/>
          {['About', 'News', 'Gallery', 'Annual Report', 'Contact', 'Programmes', 'Activities', 'Projects', 'Publications', 'Downloads', 'FAQ'].map((item, i) => (
            <g key={item}>
              <rect x={16 + (i % 4) * 116} y={48 + Math.floor(i / 4) * 32} width="100" height="22" rx="3" fill="#E8C0A8" opacity={i < 4 ? 0.7 : 0.4}/>
              <text x={66 + (i % 4) * 116} y={63 + Math.floor(i / 4) * 32} fontFamily="sans-serif" fontSize="8" fill="#8B1A3A" textAnchor="middle">{item}</text>
            </g>
          ))}
          <rect x="16" y="152" width="458" height="36" rx="4" fill="#FEF3EC" stroke="#E8C0A8" strokeWidth="1"/>
          <text x="32" y="168" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D">Problems: No priority order · Items duplicated across sections</text>
          <text x="32" y="182" fontFamily="sans-serif" fontSize="8.5" fill="#C4622D">No clear difference between primary and secondary navigation</text>
          <rect x="510" y="0" width="490" height="260" fill="#F8F5FD"/>
          <text x="755" y="28" fontFamily="sans-serif" fontSize="9" fill="#3D8B3D" textAnchor="middle" letterSpacing="2">AFTER — 5 ITEMS WITH LOGICAL GROUPINGS</text>
          <line x1="510" y1="36" x2="1000" y2="36" stroke="#A8C8A0" strokeWidth="1"/>
          {['About', 'Programmes', 'News', 'Resources', 'Contact'].map((item, i) => (
            <g key={item}>
              <rect x={526 + i * 88} y="48" width="80" height="24" rx="5" fill={i === 4 ? '#C4622D' : '#8B1A3A'}/>
              <text x={566 + i * 88} y="64" fontFamily="sans-serif" fontSize="9" fill="white" textAnchor="middle">{item}</text>
            </g>
          ))}
          <rect x="526" y="152" width="458" height="36" rx="4" fill="#EEF7EE" stroke="#A8C8A0" strokeWidth="1"/>
          <text x="542" y="168" fontFamily="sans-serif" fontSize="8.5" fill="#3D8B3D">Result: Clear hierarchy · Dropdown groups related content</text>
          <text x="542" y="182" fontFamily="sans-serif" fontSize="8.5" fill="#3D8B3D">Mobile-friendly collapsed menu · Logical reading order</text>
          <line x1="500" y1="0" x2="500" y2="260" stroke="#E8E2D8" strokeWidth="1.5"/>
          <text x="500" y="138" fontFamily="sans-serif" fontSize="16" fill="#C8C0B5" textAnchor="middle">→</text>
        </svg>

        <h3 className="cs-h3 reveal" style={{ marginBottom: '24px' }}>Research Insights</h3>
        <div className="resp-grid-3 reveal" style={{ gap: '16px', marginTop: '24px' }}>
          {[
            { label: 'Insight 01 — Audience is diverse', text: "Visitors range from media and government officials to school students and general public. The redesign needed to serve both formal and casual reading contexts simultaneously." },
            { label: 'Insight 02 — Programmes are the core', text: "80% of meaningful visits were programme-related. Yet programmes were buried 3–4 levels deep. Making them front-and-centre was the single highest-impact structural change." },
            { label: 'Insight 03 — Trust signals matter', text: "The Foundation's royal patronage is its core credibility. The redesign needed to communicate gravitas and official standing immediately — without feeling cold or inaccessible." },
          ].map((c) => (
            <div key={c.label} className="cs-insight-card">
              <div className="cs-insight-label">{c.label}</div>
              <p className="cs-insight-body">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEFINE */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">03 — Define</div>
        <h2 className="cs-h2 reveal">Three clear goals<br />before any design work.</h2>
        <div className="cs-metrics-row reveal">
          <div className="cs-metric">
            <div className="cs-metric-label">Goal 01</div>
            <div className="cs-metric-value" style={{ fontFamily: "var(--font-display), serif", fontSize: 'var(--fs-36)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Mobile</div>
            <p className="cs-metric-value" style={{ fontSize: 'var(--fs-13)', marginTop: '8px', lineHeight: 1.6, color: 'var(--ink-soft)', fontFamily: 'inherit', fontWeight: 400 }}>Full mobile-responsive layout — every page, every interaction, every content type works on any screen size</p>
          </div>
          <div className="cs-metric">
            <div className="cs-metric-label">Goal 02</div>
            <div className="cs-metric-value" style={{ fontFamily: "var(--font-display), serif", fontSize: 'var(--fs-36)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>&lt; 2 clicks</div>
            <p className="cs-metric-value" style={{ fontSize: 'var(--fs-13)', marginTop: '8px', lineHeight: 1.6, color: 'var(--ink-soft)', fontFamily: 'inherit', fontWeight: 400 }}>Any visitor should reach any programme or key content within two interactions from the homepage</p>
          </div>
          <div className="cs-metric">
            <div className="cs-metric-label">Goal 03</div>
            <div className="cs-metric-value" style={{ fontFamily: "var(--font-display), serif", fontSize: 'var(--fs-36)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>Credible</div>
            <p className="cs-metric-value" style={{ fontSize: 'var(--fs-13)', marginTop: '8px', lineHeight: 1.6, color: 'var(--ink-soft)', fontFamily: 'inherit', fontWeight: 400 }}>Visual identity must reflect the Foundation's royal patronage — formal, trustworthy, and distinctly Thai institutional</p>
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section className="cs-section" style={{ background: 'var(--white)' }}>
        <div className="cs-section-label reveal">04 — Design</div>
        <h2 className="cs-h2 reveal">A visual identity worthy<br />of royal patronage.</h2>
        <p className="cs-lead reveal">
          The design direction drew from Thai institutional visual language — dignified, structured, and warm — using a deep maroon primary colour referencing the Foundation's official palette, paired with white space and clear typographic hierarchy.
        </p>

        <h3 className="cs-h3 reveal" style={{ marginBottom: '24px' }}>Key Design Decisions</h3>
        <div className="resp-grid-2 reveal" style={{ gap: '2px', background: 'var(--border)' }}>
          {[
            { label: 'Colour System', text: 'Deep maroon (#8B1A3A) as the primary brand colour — drawn from the Foundation\'s official palette — paired with clean white space. Warm secondary tones for programme categories (green, amber, blue) provide differentiation without fragmentation.' },
            { label: 'Typography', text: 'A single type family with clear size hierarchy: display heading at 40px+ for authority, body at 16px for readability, labels in uppercase monospace for categorisation. Thai and English text handled with appropriate line-height for both scripts.' },
            { label: 'Programme Card Pattern', text: 'Reusable card component for all programmes — colour-coded by category, always showing title, brief description, and a clear "read more" action. Used consistently across homepage, listing, and detail pages.' },
            { label: 'Responsive Grid', text: 'CSS Grid-based layout with three breakpoints: 4-column desktop (1200px+), 2-column tablet (768–1199px), single-column mobile (under 768px). All images fluid-resized. Navigation collapses to a hamburger below 768px.' },
          ].map((d) => (
            <div key={d.label} className="cs-insight-card">
              <div className="cs-insight-label">{d.label}</div>
              <p className="cs-insight-body">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEST */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">05 — Test &amp; Iterate</div>
        <h2 className="cs-h2 reveal">What the team surfaced<br />in review rounds.</h2>
        <p className="cs-lead reveal">
          Working within a cross-functional team with developers and foundation stakeholders, I participated in three review rounds before final delivery.
        </p>

        <div className="cs-change-list reveal">
          {[
            {
              before: "The hero banner used a large static image with text overlaid directly. On smaller screens the text became unreadable against the image.",
              after: "Switched to a solid brand-colour hero with a subtle radial gradient. Text is always legible regardless of screen size, and load time improved significantly by removing the large hero image."
            },
            {
              before: "Programme detail pages had no clear call-to-action. Stakeholders noted visitors were reading about programmes but had no obvious next step (enquire, apply, donate).",
              after: "Added a persistent sticky CTA panel on all programme detail pages with contextually appropriate actions. \"Learn more\", \"Get involved\", and \"Contact us\" buttons tailored per programme type."
            },
            {
              before: "Thai-language body text was using the same line-height as English. The result was lines colliding with each other because Thai characters have taller ascenders.",
              after: "Increased line-height for Thai body text from 1.5 to 1.8 across all pages. A small but critical change that dramatically improved legibility for the primary-language audience."
            },
          ].map((item, i) => (
            <div key={i} className="cs-change-item">
              <div className="cs-change-before">
                <div className="cs-change-label before">Before</div>
                <p>{item.before}</p>
              </div>
              <div className="cs-change-arrow">→</div>
              <div className="cs-change-after">
                <div className="cs-change-label after">After</div>
                <p>{item.after}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOME */}
      <section className="cs-section cs-outcome">
        <div className="cs-section-label reveal">06 — Outcome</div>
        <h2 className="cs-h2 reveal">Delivered on time,<br />credible at first glance.</h2>
        <div className="cs-outcome-stats reveal">
          {[
            { num: '11→5', label: 'Navigation items simplified' },
            { num: '< 2', label: 'Clicks to any programme' },
            { num: '100%', label: 'Responsive across all devices' },
            { num: '2022', label: 'Delivered on schedule' },
          ].map((s) => (
            <div key={s.label} className="cs-stat">
              <div className="cs-stat-num">{s.num}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="cs-reflection reveal" style={{ marginTop: '56px' }}>
          <p>Designing for an institution with royal patronage required a balance rarely needed in commercial work: the visual language had to feel authoritative and formal, yet the UX had to feel simple and welcoming to a general public audience.</p>
          <p style={{ marginTop: '14px' }}>The biggest lesson was that navigation architecture is never just a UX problem — it's a content strategy problem. The site didn't need a new design system so much as it needed someone to make decisions about what mattered most.</p>
        </div>
      </section>

      {/* NEXT */}
      <div className="cs-next">
        <div className="cs-next-label">Next Project</div>
        <Link href="/work/ces" className="cs-next-link">
          CES — Gold Trading System <span>→</span>
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
