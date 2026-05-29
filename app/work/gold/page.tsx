"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Lock } from "lucide-react";
import CaseStudyHero, { CaseStudyPreview } from "../../../components/CaseStudyHero";

export default function GoldCaseStudy() {
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
        <Link href="/" className="cs-back">← Back to Portfolio</Link>
        <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 'var(--fs-11)', color: 'var(--ink-muted)' }}>
          Gold CES — Case Study
        </span>
      </nav>

      {/* HERO */}
      <CaseStudyHero
        background="#0A1628"
        eyebrow="Case Study 05 · Enterprise System · Gold Trading"
        title={<>Gold Enterprise<br /><em style={{ color: '#C9943A' }}>System (CES)</em></>}
        subtitle="An end-to-end gold trading operations platform — designed to manage real-time price matching, multi-role transaction workflows, inventory tracking, Net Settlement, and NOP risk management for a Thai gold trading business."
        chips={[
          { label: 'System', value: 'CES v1.1' },
          { label: 'Timeline', value: 'Jan 2026 – Present' },
          { label: 'Modules', value: '11 Functional' },
          { label: 'User Roles', value: '9 RBAC Roles' },
        ]}
        stats={[
          { num: '11', label: 'Functional Modules' },
          { num: '9', label: 'User Roles' },
          { num: 'Jan 26', label: 'Timeline Start' },
          { num: 'Dev', label: 'Current Status' },
        ]}
        media={
          <CaseStudyPreview
            url="ces.gold.th"
            accent="#C9943A"
            title="Gold Trading Dashboard"
            subtitle="Real-time Net Open Position (NOP) and transaction tracking."
            cards={[
              { label: 'NET POSITION', value: '+62.5 บาท' },
              { label: 'OPEN TICKETS', value: '8' },
              { label: 'PENDING SETTLE', value: '3' },
            ]}
          />
        }
      />

      {/* NDA NOTICE */}
      <section className="cs-section" style={{ background: 'var(--white)', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="cs-nda reveal">
          <span className="cs-nda-icon"><Lock size={20} strokeWidth={1.5} /></span>
          <div>
            <div className="cs-nda-title">NDA Notice</div>
            <p className="cs-nda-text">
              This project is protected under a non-disclosure agreement. Actual UI screens are replaced with representative mockups. Business data has been anonymised. All process documentation, research methodology, and design decisions described here are real.
            </p>
          </div>
        </div>
      </section>

      <div className="cs-divider" />

      {/* 01 — OVERVIEW */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">01 — Project Overview</div>
        <h2 className="cs-h2 reveal">Setting the Stage</h2>
        <p className="cs-lead reveal">
          Gold Seng Heng is a prominent Thai gold trading business. Their operations span multiple departments, 9 user roles, and thousands of daily transactions — all requiring a unified, real-time system.
        </p>

        <div className="cs-domain-grid reveal" style={{ marginTop: '48px' }}>
          {[
            { label: 'System Name', val: 'Gold Enterprise System (CES) — Gold' },
            { label: 'My Role', val: 'UX/UI Designer — UI_D2 & UI_Final Figma Pages' },
            { label: 'Client / End User', val: 'Gold Seng Heng — Thai Gold Trading Business' },
            { label: 'Technical Team', val: 'Lead Dev: Mr. Preeyapol · Principal Software: Mr. Monthon' },
            { label: 'Timeline & Status', val: 'Jan 2026 – Present · FSD v1.1 · In Development' },
            { label: 'Key Modules', val: '11 Modules including Price Mgmt, Net Settlement, NOP' },
          ].map((item) => (
            <div key={item.label} className="cs-domain-card">
              <div className="cs-domain-label">{item.label}</div>
              <p className="cs-domain-body" style={{ color: 'var(--ink)', fontWeight: 500 }}>{item.val}</p>
            </div>
          ))}
        </div>

        <div className="cs-methods reveal" style={{ marginTop: '48px' }}>
          {['Figma', 'FSD v1.1', 'RBAC Design', 'Enterprise UX', 'Gold Trading Domain', 'Process Flow Mapping', 'Multi-Role UI Patterns', 'Data-Dense Dashboards'].map((m) => (
            <span key={m} className="cs-method-chip">{m}</span>
          ))}
        </div>
      </section>

      {/* 02 — PROBLEM */}
      <section className="cs-section" style={{ background: 'var(--white)' }}>
        <div className="cs-section-label reveal">02 — Problem Statement</div>
        <h2 className="cs-h2 reveal">A Volatile Business<br />Without a System to Match</h2>

        <div className="cs-two-col reveal" style={{ marginTop: '48px' }}>
          <div>
            <p className="cs-lead" style={{ marginBottom: '24px' }}>
              Gold trading is fast, high-value, and high-risk. Every second of price delay or data inconsistency is a business liability.
            </p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '16px' }}>
              {[
                'Price Volatility: Prices change every few seconds. Discrepancies create financial risk.',
                'Fragmented Workflow: Departments (Sales, Accounting, Finance) worked from fragmented info.',
                'Invisible Risk: NOP could not be tracked in real-time, leaving management unable to hedge.',
                'Audit Trail: No structured log made resolving disputes nearly impossible.',
              ].map((p) => (
                <li key={p} style={{ display: 'flex', gap: '12px', fontSize: 'var(--fs-14)', color: 'var(--ink-soft)' }}>
                  <span style={{ color: '#C9943A' }}>◆</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="cs-problem-statement" style={{ borderLeftColor: '#C9943A' }}>
            <p>
              "Gold Seng Heng's operations span multiple departments and 9 user roles — all managed without a unified, real-time system capable of locking deal prices and tracking net positions."
            </p>
          </div>
        </div>
      </section>

      {/* 03 — RESEARCH */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">03 — Research & Discovery</div>
        <h2 className="cs-h2 reveal">Building Understanding First</h2>
        <p className="cs-lead reveal">
          Designing a gold trading system requires deep domain knowledge. We invested heavily in understanding the business before designing the solution.
        </p>

        <div className="cs-domain-grid reveal" style={{ marginTop: '48px' }}>
          {[
            { term: 'Research Goals', def: 'Understand the gold trading workflow end-to-end — from price setting to NOP calculation.' },
            { term: 'Stakeholder Interviews', def: 'Conducted interviews with Business Owner, Advisors, and users across all departments.' },
            { term: 'Domain Research', def: 'Deep research into Thai gold trading terminology and industry standards (1 บาท = 15.2440g).' },
            { term: 'Hardware Integration', def: 'Research on scanner and weighing machine integration for speed and accuracy.' },
            { term: 'Process Mapping', def: 'Mapped all 11 core business workflows as process flow diagrams before UI design.' },
            { term: 'Security Analysis', def: 'Analysed permission requirements for all 9 roles across 11 modules.' },
          ].map((c) => (
            <div key={c.term} className="cs-domain-card">
              <div className="cs-domain-label" style={{ color: '#C9943A' }}>{c.term}</div>
              <p className="cs-domain-body">{c.def}</p>
            </div>
          ))}
        </div>

        <div className="cs-insight-grid reveal" style={{ marginTop: '48px' }}>
          <div className="cs-insight-card" style={{ borderLeft: '3px solid #C9943A' }}>
            <div className="cs-insight-label" style={{ color: '#C9943A' }}>Critical Finding — Price Lock</div>
            <p className="cs-insight-body">"Once a Deal or Ticket is confirmed, the price must be locked and immutable. Any market change cannot retroactively affect it."</p>
          </div>
          <div className="cs-insight-card" style={{ borderLeft: '3px solid #C9943A' }}>
            <div className="cs-insight-label" style={{ color: '#C9943A' }}>Critical Finding — FIFO Complexity</div>
            <p className="cs-insight-body">"Net Settlement must process account ledger entries in FIFO order, but users need flexibility to override allocation operationally."</p>
          </div>
        </div>
      </section>

      {/* 04 — DEFINE */}
      <section className="cs-section" style={{ background: 'var(--white)' }}>
        <div className="cs-section-label reveal">04 — Define & Ideate</div>
        <h2 className="cs-h2 reveal">Translating Knowledge<br />Into Direction</h2>

        <h3 className="cs-h3 reveal" style={{ marginTop: '48px', marginBottom: '24px' }}>Design Principles</h3>
        <div className="cs-insight-grid reveal">
          {[
            { p: 'Speed Above All', t: "Sales interfaces must be optimised for speed — keyboard-first, minimal clicks — because seconds cost money." },
            { p: 'Data Density', t: "Information-rich without being visually chaotic — clear hierarchy and decisive use of colour to encode status." },
            { p: 'Role-Adaptive', t: "One design system adapts to 9 roles by showing or hiding modules based on permissions." },
            { p: 'Immutability', t: "Once a Deal is confirmed, it is locked. The UI must visually communicate this read-only state." },
          ].map((d) => (
            <div key={d.p} className="cs-insight-card" style={{ borderLeft: '3px solid #C9943A' }}>
              <div className="cs-insight-label" style={{ color: '#C9943A' }}>{d.p}</div>
              <p className="cs-insight-body">{d.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — DESIGN PROCESS */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">05 — Design Process</div>
        <h2 className="cs-h2 reveal">From Process to Interface</h2>

        <div className="cs-domain-grid resp-grid-5 reveal" style={{ marginTop: '48px' }}>
          {[
            { n: '01', t: 'FSD → Flow', d: 'Mapping 11 modules as process diagrams.' },
            { n: '02', t: 'Architecture', d: 'Nav structure designed around RBAC.' },
            { n: '03', t: 'Wireframes', d: 'Mid-fidelity layouts for data density.' },
            { n: '04', t: 'Components', d: 'Reusable gold trading UI patterns.' },
            { n: '05', t: 'Final Screens', d: 'High-fidelity Figma screens + annotations.' },
          ].map((p) => (
            <div key={p.n} className="cs-domain-card" style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display), serif', fontSize: '2rem', color: '#C9943A', opacity: 0.3 }}>{p.n}</div>
              <div style={{ fontWeight: 600, fontSize: 'var(--fs-14)', margin: '8px 0' }}>{p.t}</div>
              <p style={{ fontSize: 'var(--fs-11)', color: 'var(--ink-soft)' }}>{p.d}</p>
            </div>
          ))}
        </div>

        <h3 className="cs-h3 reveal" style={{ marginTop: '72px', marginBottom: '24px' }}>Representative Modules</h3>
        <div className="cs-two-col reveal">
          <div style={{ background: '#0A1628', padding: '32px', borderRadius: '12px', border: '1px solid rgba(201, 148, 58, 0.2)' }}>
            <div style={{ color: '#C9943A', fontSize: 'var(--fs-11)', letterSpacing: '0.1em', marginBottom: '8px' }}>MODULE 02</div>
            <div style={{ color: 'white', fontSize: 'var(--fs-18)', fontWeight: 500, marginBottom: '16px' }}>Price Management</div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.5)', fontSize: '10px', marginBottom: '8px' }}>
                <span>GOLD TYPE</span><span>BUY</span><span>SELL</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#5CDB95', fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: '4px' }}>
                <span>99.99%</span><span>฿47,800</span><span>฿47,900</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#E07070', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
                <span>96.5%</span><span>฿46,350</span><span>฿47,150</span>
              </div>
            </div>
          </div>
          <div style={{ background: '#0A1628', padding: '32px', borderRadius: '12px', border: '1px solid rgba(201, 148, 58, 0.2)' }}>
            <div style={{ color: '#C9943A', fontSize: 'var(--fs-11)', letterSpacing: '0.1em', marginBottom: '8px' }}>MODULE 06</div>
            <div style={{ color: 'white', fontSize: 'var(--fs-18)', fontWeight: 500, marginBottom: '16px' }}>NOP Management</div>
            <div style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ color: '#5CDB95', fontSize: '24px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>+62.5 บาท</div>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', marginTop: '4px' }}>CURRENT NET POSITION</div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginTop: '12px', overflow: 'hidden' }}>
                <div style={{ width: '62%', height: '100%', background: '#5CDB95' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — TESTING */}
      <section className="cs-section" style={{ background: 'var(--white)' }}>
        <div className="cs-section-label reveal">06 — Testing & Iteration</div>
        <h2 className="cs-h2 reveal">Ensuring Precision</h2>
        <div className="cs-two-col reveal" style={{ marginTop: '48px' }}>
          <div style={{ background: 'rgba(201, 148, 58, 0.05)', padding: '32px', border: '1px solid rgba(201, 148, 58, 0.2)', borderRadius: '8px' }}>
            <p style={{ fontSize: 'var(--fs-15)', color: 'var(--ink-soft)', lineHeight: 1.7 }}>
              Testing focused on <strong>speed of data entry</strong> and <strong>role-specific visibility</strong>. We simulated high-pressure trading scenarios to ensure the price-locking mechanism remained robust.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { t: 'RBAC Validation', d: 'Verified that only authorized roles could manual override prices.' },
              { t: 'Scanner Integration', d: 'Tested QR/Barcode container scanning for zero-manual-entry flows.' },
              { t: 'Calculation Accuracy', d: 'Validated solder deduction and FIFO settlement math.' },
            ].map((i) => (
              <div key={i.t} style={{ padding: '16px', border: '1px solid var(--border)' }}>
                <div style={{ fontWeight: 600, fontSize: 'var(--fs-13)' }}>{i.t}</div>
                <div style={{ fontSize: 'var(--fs-12)', color: 'var(--ink-soft)' }}>{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — OUTCOME */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">07 — Outcomes</div>
        <h2 className="cs-h2 reveal">From Manual Chaos<br />to a Single Source of Truth</h2>
        <div className="cs-outcome-stats reveal" style={{ marginTop: '56px' }}>
          {[
            { num: '11', label: 'Functional Modules Designed' },
            { num: '9', label: 'RBAC Roles Supported' },
            { num: 'Live', label: 'In Active Development' },
            { num: 'FSD 1.1', label: 'Current Spec Version' },
          ].map((s) => (
            <div key={s.label} className="cs-stat">
              <div className="cs-stat-num" style={{ color: '#C9943A' }}>{s.num}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 08 — REFLECTION */}
      <section className="cs-section" style={{ background: 'var(--white)' }}>
        <div className="cs-section-label reveal">08 — Reflection</div>
        <h2 className="cs-h2 reveal">Complexity Made Simple</h2>
        <div className="cs-reflection reveal" style={{ marginTop: '48px' }}>
          <p>CES was a deeply technical domain challenge. It taught me that enterprise UX isn't just about making things look clean — it's about mirroring the user's mental model of their business perfectly, while abstracting away the unnecessary complexity of the underlying database.</p>
          <p style={{ marginTop: '24px' }}>The biggest lesson: in high-frequency trading contexts, every pixel of space and every millisecond of interaction counts. Designing for speed is designing for trust.</p>
        </div>
      </section>

      {/* NEXT */}
      <div className="cs-next">
        <div className="cs-next-label">Next Project</div>
        <Link href="/work/vansales" className="cs-next-link">
          Vansales — Field Sales App <span>→</span>
        </Link>
      </div>

      <footer style={{ background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <p className="footer-copy" style={{ color: 'var(--ink)' }}>© 2026 Panalee Palasri</p>
        <div className="footer-socials">
          <Link href="/" style={{ color: 'var(--ink)' }}>Back to Home</Link>
        </div>
      </footer>
      <div id="cursor"></div>
    </div>
  );
}
