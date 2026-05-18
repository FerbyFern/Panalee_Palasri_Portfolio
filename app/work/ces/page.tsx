"use client";

import Link from "next/link";
import { useEffect } from "react";
import CaseStudyHero, { CaseStudyPreview } from "../../../components/CaseStudyHero";

export default function CESCaseStudy() {
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
          CES Gold Shop — Case Study
        </span>
      </nav>

      {/* HERO — dark brand colour */}
      <CaseStudyHero
        background="#16140F"
        eyebrow="Case Study 04 · Enterprise System · Vansales Application Co., Ltd."
        title={<>CES — Designing for<br /><em style={{ color: '#C9A84C' }}>gold, speed,<br />and zero margin for error.</em></>}
        subtitle="End-to-end UX/UI design of the Gold Enterprise System — a 12-module gold trading platform covering price management, buy/sell transactions, Deal/Ticket settlement, NOP tracking, container inventory, and financial reporting."
        chips={[
          { label: 'Timeline', value: 'Jan 2025 – Present' },
          { label: 'Role', value: 'UX/UI Designer (Solo)' },
          { label: 'Client', value: 'Gold Seng Heng' },
          { label: 'Platform', value: 'Web (Desktop + Tablet)' },
          { label: 'Spec', value: 'FSD v1.1 · 139 pages' },
        ]}
        stats={[
          { num: '12', label: 'System modules' },
          { num: '9', label: 'User roles designed for' },
          { num: '139', label: 'Pages of FSD studied' },
          { num: 'Live', label: 'In production' },
        ]}
        media={
          <CaseStudyPreview
            url="ces.goldshop.local"
            accent="#C9A84C"
            title="Gold trading dashboard"
            subtitle="Live pricing, settlement states, and role-aware modules."
            cards={[
              { label: 'Modules', value: '12' },
              { label: 'Roles', value: '9' },
              { label: 'Status', value: 'Live' },
            ]}
          />
        }
      />

      {/* NDA NOTICE */}
      <section className="cs-section" style={{ background: 'var(--white)', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="cs-nda reveal">
          <span className="cs-nda-icon">🔒</span>
          <div>
            <div className="cs-nda-title">NDA Notice</div>
            <p className="cs-nda-text">
              This project is protected under a non-disclosure agreement. Actual UI screens are replaced with representative mockups. Business data has been anonymised. All process documentation, research methodology, and design decisions described here are real. To discuss this work further, please contact me directly.
            </p>
          </div>
        </div>
      </section>

      <div className="cs-divider" />

      {/* PROBLEM */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">01 — The Challenge</div>
        <div className="cs-two-col" style={{ marginTop: '20px' }}>
          <div>
            <h2 className="cs-h2 reveal">A gold shop running on instinct,<br />WhatsApp, and paper ledgers.</h2>
            <div className="cs-overview reveal">
              <p>
                Gold Seng Heng is a professional gold trading business operating in Thailand. Their daily work involves buying and selling gold across multiple product types, managing physical inventory by container, sending gold for refining, and settling net positions with trading partners — all while gold prices fluctuate by the second.
              </p>
              <p>
                Before CES, this entire operation ran on a mixture of spreadsheets, manual paper records, and verbal price agreements. Errors were costly. There was no real-time view of their Net Open Position (NOP). Settlement calculations were done by hand. Audit trails were non-existent.
              </p>
            </div>
          </div>
          <div className="cs-problem-statement reveal" style={{ borderLeftColor: '#C9A84C' }}>
            <div className="cs-domain-label" style={{ color: '#C9A84C', marginBottom: '16px' }}>Core Design Challenge</div>
            <p>
              "How do we translate a deeply specialised gold trading workflow — built on decades of tacit knowledge — into a system that's fast enough for real-time trading, accurate enough to trust with millions of baht, and clear enough that nine different roles can use it without training manuals?"
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="cs-section" style={{ background: 'var(--white)' }}>
        <div className="cs-section-label reveal">02 — Domain Research</div>
        <h2 className="cs-h2 reveal">Learning an industry<br />before designing for it.</h2>
        <p className="cs-lead reveal">
          Gold trading is not a generic retail context. Before sketching a single screen, I had to deeply understand the business domain — price spreads, Deal/Ticket workflows, the meaning of Net Open Position, what &quot;มาทอง / ไปเงิน&quot; means operationally, and how a 139-page FSD translates into user needs.
        </p>

        <div className="cs-methods reveal">
          {['FSD Review (139 pages)', 'Stakeholder Workshops', 'Workflow Shadowing', 'Business Rule Mapping', 'Domain Glossary Building', 'Competitive Audit'].map((m) => (
            <span key={m} className="cs-method-chip">{m}</span>
          ))}
        </div>

        <h3 className="cs-h3 reveal" style={{ marginBottom: '24px' }}>Key Domain Concepts Learned</h3>
        <div className="cs-domain-grid reveal">
          {[
            { term: 'Deal / Ticket', def: 'A Deal locks a gold price and quantity. A Ticket is the physical transaction that settles against it. These two layers must always match exactly.' },
            { term: 'NOP (Net Open Position)', def: 'The net difference between gold owned and gold owed. Must stay within predefined risk limits. Any exceedance triggers an alert.' },
            { term: 'มาทอง / ไปเงิน', def: '"Come gold / Go money" — the Thai trading shorthand for buying. Critical terminology that shaped all UI labels and workflow naming.' },
            { term: 'Container Inventory', def: 'Gold is tracked not by weight alone but by physical container. A container has a status lifecycle that must be reflected in the UI at every step.' },
            { term: 'Gold Spread', def: 'The difference between buy and sell price at any given moment. The system must display live spreads and lock them at deal confirmation.' },
            { term: 'Settlement', def: 'End-of-day or per-deal financial reconciliation. Requires matching Deals with Tickets and calculating net obligations in THB and gold weight.' },
          ].map((c) => (
            <div key={c.term} className="cs-domain-card">
              <div className="cs-domain-label" style={{ color: '#C9A84C' }}>{c.term}</div>
              <p className="cs-domain-body">{c.def}</p>
            </div>
          ))}
        </div>

        <h3 className="cs-h3 reveal" style={{ marginBottom: '24px' }}>9 Roles, 1 System</h3>
        <p className="cs-lead reveal" style={{ marginBottom: '32px' }}>
          Each role needs a fundamentally different view of the same data. Designing the RBAC (Role-Based Access Control) information architecture was one of the core UX challenges.
        </p>
        <div className="cs-domain-grid resp-grid-3 reveal" style={{ marginBottom: '0' }}>
          {[
            { role: 'Owner / Director', access: 'Full read + financial reports + overrides' },
            { role: 'Accountant', access: 'Settlement, P&L, audit trail, reconciliation' },
            { role: 'Dealer', access: 'Price management, Deal creation, NOP monitoring' },
            { role: 'Sales Rep', access: 'Buy/sell transactions, price lookup, customer records' },
            { role: 'Cashier', access: 'Payment confirmation, receipt generation' },
            { role: 'Warehouse', access: 'Container tracking, refining dispatch, inventory' },
            { role: 'QC', access: 'Weight verification, purity recording' },
            { role: 'Admin', access: 'User management, system configuration' },
            { role: 'Auditor', access: 'Read-only across all modules + export' },
          ].map((r) => (
            <div key={r.role} className="cs-domain-card" style={{ background: 'var(--white)' }}>
              <div className="cs-domain-label">{r.role}</div>
              <p className="cs-domain-body">{r.access}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEFINE */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">03 — Define</div>
        <h2 className="cs-h2 reveal">Four core design<br />principles for the whole system.</h2>
        <p className="cs-lead reveal">
          Before designing any module, I established four non-negotiable principles that would govern every screen, every interaction, and every piece of information hierarchy in the system.
        </p>

        <div className="cs-insight-grid reveal">
          {[
            { p: 'Principle 01 — Speed over completeness', t: "Gold prices change every minute. The most frequent actions — recording a sale, checking a price, creating a Deal — must take under 30 seconds. Every additional click is a cost measured in money." },
            { p: 'Principle 02 — Error prevention over error recovery', t: "A wrong gold weight or a missed Deal confirmation can mean six-figure losses. The UI must validate early, confirm clearly, and lock records (like Deal prices) the moment they are confirmed." },
            { p: 'Principle 03 — Role-appropriate information density', t: "A Sales rep needs 5 fields. An Accountant needs 20. The system must show each role exactly what they need — no more, no less — even when the underlying data model is the same record." },
            { p: 'Principle 04 — Full auditability by design', t: "Every action — price overrides, settlement approvals, container moves — must leave a traceable record with timestamp, user, and before/after values. This isn't just a feature; it's the trust foundation of the whole system." },
          ].map((d) => (
            <div key={d.p} className="cs-insight-card" style={{ borderLeft: '3px solid #C9A84C' }}>
              <div className="cs-insight-label" style={{ color: '#C9A84C' }}>{d.p}</div>
              <p className="cs-insight-body">{d.t}</p>
            </div>
          ))}
        </div>

        <div className="cs-metrics-row reveal" style={{ marginTop: '56px' }}>
          {[
            { label: 'Speed Target', val: '< 30s', desc: 'Sales transaction entry time' },
            { label: 'Risk Control', val: '0 errors', desc: 'Target for Deal/Ticket mismatches' },
            { label: 'Coverage', val: '12', desc: 'Modules covering full trading lifecycle' },
          ].map((m) => (
            <div key={m.label} className="cs-metric">
              <div className="cs-metric-label">{m.label}</div>
              <div className="cs-metric-value" style={{ fontFamily: "var(--font-display), serif", fontSize: 'var(--fs-36)', fontWeight: 300, color: '#C9A84C', lineHeight: 1 }}>{m.val}</div>
              <p style={{ fontSize: 'var(--fs-12)', color: 'var(--ink-soft)', marginTop: '8px', lineHeight: 1.6 }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN */}
      <section className="cs-section" style={{ background: 'var(--white)' }}>
        <div className="cs-section-label reveal">04 — System Architecture &amp; Design</div>
        <h2 className="cs-h2 reveal">12 modules, one<br />coherent design language.</h2>
        <p className="cs-lead reveal">
          Each module was designed independently but shares a unified component system — ensuring that data presentation, action patterns, and status indicators feel consistent whether a user is in Price Management or Settlement Reports.
        </p>

        <h3 className="cs-h3 reveal" style={{ marginBottom: '24px' }}>System Module Map</h3>
        <div className="cs-domain-grid resp-grid-4 reveal">
          {[
            { mod: '01', name: 'Price Management', desc: 'Live gold price feed, spread configuration, price history' },
            { mod: '02', name: 'Buy / Sell', desc: 'Customer transactions, product selection, weight entry, receipt' },
            { mod: '03', name: 'Deal Management', desc: 'Dealer deals, price locking, counterparty tracking' },
            { mod: '04', name: 'Ticket Settlement', desc: 'Deal-to-ticket matching, settlement confirmation, audit' },
            { mod: '05', name: 'NOP Dashboard', desc: 'Real-time net position, risk threshold alerts, history' },
            { mod: '06', name: 'Container Inventory', desc: 'Physical gold tracking, container lifecycle, location' },
            { mod: '07', name: 'Refinery', desc: 'Refining dispatch, return weight reconciliation, purity records' },
            { mod: '08', name: 'Financial Reports', desc: 'P&L, daily summary, tax reporting, export to accounting' },
            { mod: '09', name: 'Customer Records', desc: 'Customer profiles, transaction history, credit limits' },
            { mod: '10', name: 'Audit Log', desc: 'Immutable action history, user attribution, timestamp' },
            { mod: '11', name: 'User Management', desc: 'Role assignment, permission configuration, access control' },
            { mod: '12', name: 'System Configuration', desc: 'Business rules, thresholds, integration settings' },
          ].map((m) => (
            <div key={m.mod} className="cs-domain-card">
              <div className="cs-domain-label" style={{ color: '#C9A84C' }}>Module {m.mod}</div>
              <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 'var(--fs-14)', fontWeight: 500, color: 'var(--ink)', marginBottom: '8px' }}>{m.name}</div>
              <p className="cs-domain-body" style={{ fontSize: 'var(--fs-11)' }}>{m.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="cs-h3 reveal" style={{ marginTop: '72px', marginBottom: '20px' }}>The SKU Hierarchy Problem</h3>
        <p className="cs-lead reveal" style={{ marginBottom: '32px' }}>
          One of the hardest design problems was representing gold products. Gold comes in multiple purity grades, unit types (baht weight, gram, tael), and physical forms (bar, ornament, coin). The SKU hierarchy had to be simple enough for a cashier but precise enough for an accountant.
        </p>
        <div className="cs-insight-grid reveal">
          {[
            { label: 'Product Taxonomy', text: 'Created a 3-level hierarchy: Category (Buy/Sell/Refine) → Type (Gold 96.5%, 99.99%, Ornament) → Unit (Baht weight / gram). Each level drives different fields and validation rules.' },
            { label: 'Price Display Logic', text: 'Live prices are shown in both THB/baht-weight and THB/gram simultaneously. Dealers see spread; cashiers see customer price; the system calculates the difference automatically.' },
          ].map((d) => (
            <div key={d.label} className="cs-insight-card">
              <div className="cs-insight-title">{d.label}</div>
              <p className="cs-insight-body">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEST */}
      <section className="cs-section" style={{ background: 'var(--cream)' }}>
        <div className="cs-section-label reveal">05 — UAT &amp; Iteration</div>
        <h2 className="cs-h2 reveal">What real traders told us<br />to change.</h2>
        <p className="cs-lead reveal">
          UAT sessions were conducted with actual dealers and cashiers during their live trading hours. Feedback was fast and unambiguous — these users measure everything in seconds and baht.
        </p>

        <div className="cs-test-grid reveal">
          {[
            { round: 'UAT Round 01', finding: 'Price confirmation was too slow', quote: '"I need to lock the price the moment we agree — every second the market moves."', fix: 'Reduced Deal confirmation from 4 steps to a single modal with one confirmation tap. Price locks on first tap, confirmation happens in background.' },
            { round: 'UAT Round 02', finding: 'Container status was confusing', quote: '"I don\'t know if this container is in the vault, at the refinery, or already settled — it all looks the same."', fix: 'Redesigned container cards with a 5-state visual lifecycle system. Each state has a distinct colour, icon, and allowed action set.' },
            { round: 'UAT Round 03', finding: 'NOP dashboard missed urgency', quote: '"When we\'re close to our NOP limit, I need to see that from across the room, not only when I\'m looking at the screen."', fix: 'Added ambient status bar at the top of all dealer views. Turns amber at 80% of NOP limit, red at 95%. Cannot be dismissed.' },
          ].map((t) => (
            <div key={t.round} className="cs-test-card">
              <div className="cs-test-round" style={{ color: '#C9A84C' }}>{t.round}</div>
              <div className="cs-test-finding">{t.finding}</div>
              <div className="cs-test-quote">{t.quote}</div>
              <div className="cs-test-fix">
                <span className="cs-fix-label" style={{ color: '#C9A84C' }}>Fix: </span>{t.fix}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOME */}
      <section className="cs-section cs-outcome">
        <div className="cs-section-label reveal">06 — Outcome</div>
        <h2 className="cs-h2 reveal">From manual chaos<br />to a single source of truth.</h2>
        <div className="cs-outcome-stats reveal">
          {[
            { num: '< 30s', label: 'Target transaction time met' },
            { num: '12', label: 'Modules delivered and live' },
            { num: '9', label: 'Roles fully mapped and designed' },
            { num: 'Live', label: 'In daily production use' },
          ].map((s) => (
            <div key={s.label} className="cs-stat">
              <div className="cs-stat-num" style={{ color: '#C9A84C' }}>{s.num}</div>
              <div className="cs-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="cs-reflection reveal" style={{ marginTop: '56px' }}>
          <p>CES was the most technically and domain-complex project I&apos;ve owned. It required me to become fluent in a specialised industry before designing anything — and to make design decisions that had real financial consequences if they were wrong.</p>
          <p>The biggest lesson: complexity in business logic must translate to simplicity in the UI. The system is sophisticated beneath the surface, but every screen was designed so that the right person sees exactly what they need — and nothing more.</p>
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
        <p className="footer-copy" style={{ color: 'var(--ink)' }}>© 2025 Panalee Palasri</p>
        <div className="footer-socials">
          <Link href="/" style={{ color: 'var(--ink)' }}>Back to Home</Link>
        </div>
      </footer>
      <div id="cursor"></div>
    </div>
  );
}
