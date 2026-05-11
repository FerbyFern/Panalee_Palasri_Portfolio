"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function CaseStudyLeafy() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;
    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", onMove);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((r) => observer.observe(r));
    return () => { document.removeEventListener("mousemove", onMove); observer.disconnect(); };
  }, []);

  return (
    <>
      <div id="cursor" />

      {/* ── NAV ── */}
      <nav className="cs-nav">
        <Link href="/" className="nav-logo">Panalee Palasri</Link>
        <Link href="/#work" className="cs-back">← Back to work</Link>
      </nav>

      {/* ── HERO ── */}
      <header className="cs-hero">
        <div className="cs-hero-inner">
          <p className="cs-eyebrow reveal">E-commerce · Capstone Project · 2023–2024</p>
          <h1 className="cs-title reveal">
            Leafy — Perfect Plant<br /><em>Bring Nature Home</em>
          </h1>
          <p className="cs-subtitle reveal">
            Designing a premium, nature-first e-commerce experience that bridges the gap between curated houseplant retail and landscape design inspiration.
          </p>
          <div className="cs-meta-row reveal">
            <div className="cs-meta-block">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">UX/UI Designer · Project Manager</span>
            </div>
            <div className="cs-meta-block">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">3 people</span>
            </div>
            <div className="cs-meta-block">
              <span className="cs-meta-label">Tools</span>
              <span className="cs-meta-value">Figma · Miro · FigJam</span>
            </div>
            <div className="cs-meta-block">
              <span className="cs-meta-label">Duration</span>
              <span className="cs-meta-value">9 months</span>
            </div>
          </div>
        </div>
      </header>

      <div className="cs-hero-image reveal" style={{ backgroundColor: '#F8F6F1' }}>
        <img 
          src="/images/work/leafy/landing.png" 
          alt="Leafy Landing Page Design" 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      <main className="cs-body">

        {/* ── OVERVIEW ── */}
        <section className="cs-section cs-overview reveal">
          <div className="cs-section-label">Overview</div>
          <div className="cs-two-col">
            <div>
              <h2 className="cs-h2">The challenge</h2>
              <p>Thailand's plant market boomed post-pandemic, yet buyers struggled to find a single source for both high-quality indoor plants and professional landscape inspiration. Small local nurseries often lacked a digital presence that reflected their expertise in garden design.</p>
              <p>The challenge was to create <strong>Leafy</strong>: a platform that doesn't just sell plants, but inspires a lifestyle of greener living through professional landscape styles and curated inspiration.</p>
            </div>
            <div className="cs-callout">
              <div className="cs-callout-num">67%</div>
              <p className="cs-callout-text">of Thai plant buyers surveyed trusted no single platform for both purchasing <em>and</em> care information</p>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        {/* ── RESEARCH ── */}
        <section className="cs-section reveal">
          <div className="cs-section-label">01 — Research</div>
          <h2 className="cs-h2">Understanding both sides of the marketplace</h2>
          <p className="cs-lead">We ran 12 user interviews across 3 weeks — 8 buyers and 4 sellers — plus a competitive analysis of Shopee, Lazada, and international platforms like Etsy.</p>

          <div className="cs-insight-grid">
            {[
              { emoji: "🪴", title: "Buyers wanted trust signals", body: "\"I've been sent the wrong plant twice. I need photos at every growth stage, not just the final product.\"" },
              { emoji: "📚", title: "Buyers needed education", body: "\"I kill every plant I buy because the app just shows a price tag. No care info, no community tips.\"" },
              { emoji: "🛒", title: "Sellers needed professionalism", body: "\"Selling in Facebook groups feels embarrassing. I want a real storefront that makes me look legit.\"" },
              { emoji: "🔄", title: "Context-switching killed flow", body: "Competitors forced users to leave the app to find care guides — breaking the purchase journey entirely." },
            ].map((item, i) => (
              <div className="cs-insight-card" key={i}>
                <span className="cs-insight-emoji">{item.emoji}</span>
                <h3 className="cs-insight-title">{item.title}</h3>
                <p className="cs-insight-body">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="cs-image-caption">
            <div className="cs-wireframe-block cs-bg-light reveal">
              <svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
                <rect width="800" height="340" fill="#F0F4F0" />
                <text x="400" y="30" fontFamily="sans-serif" fontSize="13" fill="#4A7A36" textAnchor="middle" fontWeight="600">User Journey Map — Plant Buyer</text>
                {["Awareness","Research","Decision","Purchase","Post-care"].map((stage, i) => (
                  <g key={i}>
                    <rect x={20 + i * 152} y="50" width="140" height="30" rx="6" fill="#2D5A1B" opacity=".85" />
                    <text x={90 + i * 152} y="70" fontFamily="sans-serif" fontSize="11" fill="white" textAnchor="middle">{stage}</text>
                    <rect x={20 + i * 152} y="92" width="140" height="60" rx="6" fill="white" />
                    <rect x={30 + i * 152} y="100" width="120" height="8" rx="3" fill="#C8DFC5" />
                    <rect x={30 + i * 152} y="114" width="100" height="8" rx="3" fill="#C8DFC5" />
                    <rect x={30 + i * 152} y="128" width="80" height="8" rx="3" fill="#C8DFC5" />
                    <rect x={20 + i * 152} y="165" width="140" height="50" rx="6" fill="#FEF9F6" stroke="#F0D9CE" strokeWidth="1" />
                    <rect x={30 + i * 152} y="173" width="100" height="8" rx="3" fill="#C4622D" opacity=".3" />
                    <rect x={30 + i * 152} y="187" width="80" height="8" rx="3" fill="#C4622D" opacity=".2" />
                    <rect x={20 + i * 152} y="228" width="140" height="50" rx="6" fill="#EFF7EE" />
                    <rect x={30 + i * 152} y="236" width="110" height="8" rx="3" fill="#5EA83E" opacity=".5" />
                    <rect x={30 + i * 152} y="250" width="90" height="8" rx="3" fill="#5EA83E" opacity=".35" />
                    <text x={90 + i * 152} y="308" fontFamily="sans-serif" fontSize="9" fill="#7A9E76" textAnchor="middle">Pain point</text>
                    <text x={90 + i * 152} y="326" fontFamily="sans-serif" fontSize="9" fill="#5EA83E" textAnchor="middle">Opportunity</text>
                  </g>
                ))}
              </svg>
            </div>
            <p className="cs-caption">User journey map across 5 stages for the primary buyer persona, highlighting trust and education gaps</p>
          </div>
        </section>

        <div className="cs-divider" />

        {/* ── DEFINE ── */}
        <section className="cs-section reveal">
          <div className="cs-section-label">02 — Define</div>
          <h2 className="cs-h2">Turning insights into design direction</h2>
          <div className="cs-hmw-list">
            {[
              "How might we let buyers verify plant quality without seeing it in person?",
              "How might we surface care guidance at the exact moment a buyer needs it?",
              "How might we give sellers a professional identity without requiring technical skills?",
              "How might we switch context between buyer and seller seamlessly — without confusion?",
            ].map((hmw, i) => (
              <div className="cs-hmw-item" key={i}>
                <span className="cs-hmw-num">HMW {i + 1}</span>
                <p>{hmw}</p>
              </div>
            ))}
          </div>
          <div className="cs-metrics-row">
            <div className="cs-metric">
              <div className="cs-metric-label">Primary KPI</div>
              <div className="cs-metric-value">Task completion rate for purchase flow</div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-label">Secondary KPI</div>
              <div className="cs-metric-value">Time-on-task for seller onboarding</div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-label">Guardrail</div>
              <div className="cs-metric-value">Role confusion — users must always know which mode they're in</div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        {/* ── IDEATE ── */}
        <section className="cs-section reveal">
          <div className="cs-section-label">03 — Ideate</div>
          <h2 className="cs-h2">From rough sketches to validated concepts</h2>
          <p>We explored three distinct navigation models before settling on the <strong>role-toggle approach</strong> — a persistent top-bar switch that transforms the entire UI context while keeping account data unified.</p>

          <div className="cs-wireframes-grid">
            {["Concept A — Separate Apps","Concept B — Tab-based Switcher","Concept C — Role Toggle ✓"].map((label, i) => (
              <div className="cs-wireframe-thumb" key={i} style={{ opacity: i === 2 ? 1 : 0.5 }}>
                <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
                  <rect width="280" height="200" fill={i === 2 ? "#EFF7EE" : "#F5F5F5"} rx="8" />
                  <rect x="10" y="10" width="260" height="32" rx="6" fill={i === 2 ? "#2D5A1B" : "#DDD"} />
                  {i === 2 && <>
                    <rect x="70" y="16" width="80" height="20" rx="10" fill="rgba(255,255,255,.15)" />
                    <rect x="72" y="18" width="38" height="16" rx="8" fill="#5EA83E" />
                    <text x="91" y="30" fontFamily="sans-serif" fontSize="8" fill="white" textAnchor="middle">Buyer</text>
                    <text x="131" y="30" fontFamily="sans-serif" fontSize="8" fill="rgba(255,255,255,.5)" textAnchor="middle">Seller</text>
                  </>}
                  {[52,92,132,160].map((y, j) => (
                    <rect key={j} x="10" y={y} width={200 - j * 20} height="10" rx="3" fill={i === 2 ? "#C8DFC5" : "#E0E0E0"} />
                  ))}
                  {i === 2 && <rect x="10" y="176" width="260" height="14" rx="4" fill="#2D5A1B" opacity=".8" />}
                </svg>
                <p className="cs-wireframe-label">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="cs-divider" />

        {/* ── DESIGN ── */}
        <section className="cs-section reveal">
          <div className="cs-section-label">04 — Design</div>
          <h2 className="cs-h2">Building the system, not just the screens</h2>
          <p className="cs-lead">A Figma component library with 120+ components, built with Variants and Auto Layout, covering both buyer and seller states across every breakpoint.</p>

          <div className="cs-design-showcase">
            {/* Design System preview */}
            <div className="cs-ds-preview reveal">
              <svg viewBox="0 0 960 480" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
                <rect width="960" height="480" fill="#FAFAFA" rx="12" />
                <text x="32" y="36" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#2D3B2A">Leafy Design System</text>
                {/* Colour swatches */}
                <text x="32" y="62" fontFamily="sans-serif" fontSize="10" fill="#9A9490" letterSpacing="2">COLOUR</text>
                {[["#2D5A1B","Primary"],["#5EA83E","Secondary"],["#EFF7EE","Surface"],["#C8DFC5","Border"],["#2D3B2A","Ink"],["#7A9E76","Muted"]].map(([color, name], i) => (
                  <g key={i}>
                    <rect x={32 + i * 80} y="70" width="64" height="40" rx="6" fill={color} />
                    <text x={64 + i * 80} y="124" fontFamily="sans-serif" fontSize="9" fill="#6B7A80" textAnchor="middle">{name}</text>
                  </g>
                ))}
                {/* Type scale */}
                <text x="32" y="150" fontFamily="sans-serif" fontSize="10" fill="#9A9490" letterSpacing="2">TYPE</text>
                {[["H1 — Display","28px / 700"],["H2 — Heading","22px / 600"],["Body — Regular","16px / 400"],["Caption — Mono","12px / 400"]].map(([label, spec], i) => (
                  <g key={i}>
                    <text x={32 + i * 230} y="172" fontFamily="sans-serif" fontSize={[18,14,12,10][i]} fontWeight={[700,600,400,400][i]} fill="#2D3B2A">{label}</text>
                    <text x={32 + i * 230} y="188" fontFamily="sans-serif" fontSize="9" fill="#9A9490">{spec}</text>
                  </g>
                ))}
                {/* Components */}
                <text x="32" y="218" fontFamily="sans-serif" fontSize="10" fill="#9A9490" letterSpacing="2">COMPONENTS</text>
                {/* Button states */}
                {[["Primary",true],["Secondary",false],["Ghost",false],["Disabled",false]].map(([label, primary], i) => (
                  <g key={i}>
                    <rect x={32 + i * 120} y="226" width="108" height="34" rx="8"
                      fill={primary ? "#2D5A1B" : "none"}
                      stroke={primary ? "#2D5A1B" : i === 3 ? "#DDD" : "#2D5A1B"}
                      strokeWidth="1.5" />
                    <text x={86 + i * 120} y="248" fontFamily="sans-serif" fontSize="11"
                      fill={primary ? "white" : i === 3 ? "#CCC" : "#2D5A1B"}
                      textAnchor="middle">{String(label)}</text>
                  </g>
                ))}
                {/* Input */}
                <rect x="32" y="276" width="360" height="36" rx="8" fill="white" stroke="#C8DFC5" strokeWidth="1.5" />
                <text x="50" y="298" fontFamily="sans-serif" fontSize="12" fill="#9A9490">Search plants, guides…</text>
                {/* Cards mini */}
                {[0,1,2].map((i) => (
                  <g key={i}>
                    <rect x={32 + i * 132} y="328" width="120" height="136" rx="10" fill="white" stroke="#E2EFE0" strokeWidth="1" />
                    <rect x={32 + i * 132} y="328" width="120" height="80" rx="10" fill={["#D4EAD0","#C8DFC5","#B8D4B4"][i]} />
                    <ellipse cx={92 + i * 132} cy={368} rx="22" ry="30" fill="#5EA83E" opacity=".6" />
                    <rect x={42 + i * 132} y="420" width="80" height="8" rx="3" fill="#C8DFC5" />
                    <rect x={42 + i * 132} y="434" width="50" height="8" rx="3" fill="#2D5A1B" opacity=".6" />
                  </g>
                ))}
                <text x="440" y="360" fontFamily="sans-serif" fontSize="11" fill="#6B7A80">120+ components</text>
                <text x="440" y="380" fontFamily="sans-serif" fontSize="11" fill="#6B7A80">Auto Layout throughout</text>
                <text x="440" y="400" fontFamily="sans-serif" fontSize="11" fill="#6B7A80">Figma Variants for states</text>
                <text x="440" y="420" fontFamily="sans-serif" fontSize="11" fill="#6B7A80">Token-based colours</text>
                <text x="440" y="440" fontFamily="sans-serif" fontSize="11" fill="#6B7A80">3 breakpoints</text>
              </svg>
            </div>
            <p className="cs-caption">Design system snapshot — colour tokens, type scale, and core components</p>
          </div>

          <div className="cs-decision-list">
            <h3 className="cs-h3">Key design decisions</h3>
            {[
              { decision: "Nature-First Aesthetic", rationale: "Using a muted cream and forest green palette to evoke a sense of calm and organic growth, moving away from typical 'techy' e-commerce looks." },
              { decision: "Landscape Style Integration", rationale: "We categorized products not just by species, but by landscape style (Modern, Tropical, Japanese) to help users visualize plants in their own space." },
              { decision: "Curated 'Plant Inspo' Hub", rationale: "Instead of a simple product list, we designed high-impact visual grids for 'Plant Inspo' to drive discovery through aesthetic aspiration." },
              { decision: "Modular Landing Page", rationale: "A modular structure allows for flexible content updates — from seasonal garden styles to new nursery spotlights — keeping the platform fresh and engaging." },
            ].map((item, i) => (
              <div className="cs-decision-item" key={i}>
                <div className="cs-decision-label">{item.decision}</div>
                <div className="cs-decision-body">{item.rationale}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="cs-divider" />

        {/* ── VISUAL SHOWCASE ── */}
        <section className="cs-section reveal">
          <div className="cs-section-label">High-Fidelity Visuals</div>
          <h2 className="cs-h2">The Final Landing Page</h2>
          <p className="cs-lead">The final result is a clean, immersive e-commerce experience that feels like a premium lifestyle magazine, designed to convert through inspiration.</p>
          
          <div className="cs-visual-scroll" style={{ backgroundColor: '#F8F6F1', border: '1px solid var(--border)', overflow: 'hidden', borderRadius: '8px' }}>
            <img 
              src="/images/work/leafy/landing.png" 
              alt="Leafy Full Landing Page" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </section>

        <div className="cs-divider" />

        {/* ── TEST ── */}
        <section className="cs-section reveal">
          <div className="cs-section-label">05 — Test &amp; Iterate</div>
          <h2 className="cs-h2">What we got wrong — and fixed</h2>

          <div className="cs-test-grid">
            {[
              {
                round: "Round 1 — Lo-fi (5 users)",
                finding: "Role confusion persisted",
                quote: "\"I don't know if I'm buying or selling right now.\"",
                fix: "Added a persistent role indicator badge in the nav and changed the active-role background colour to reinforce context.",
              },
              {
                round: "Round 2 — Mid-fi (6 users)",
                finding: "Cart and wishlist felt disconnected",
                quote: "\"I saved things I want to buy later but I can't find them near the cart.\"",
                fix: "Merged saved items into a unified 'Bag' with tabs (Buy Now / Saved), reducing the path from 4 taps to 2.",
              },
              {
                round: "Round 3 — Hi-fi (8 users)",
                finding: "Seller onboarding was too long",
                quote: "\"This is like filling out a tax form. I gave up halfway.\"",
                fix: "Restructured onboarding from 11 steps to 5 using progressive disclosure — non-essential fields moved to profile settings post-signup.",
              },
            ].map((item, i) => (
              <div className="cs-test-card" key={i}>
                <div className="cs-test-round">{item.round}</div>
                <div className="cs-test-finding">Finding: {item.finding}</div>
                <blockquote className="cs-test-quote">{item.quote}</blockquote>
                <div className="cs-test-fix">
                  <span className="cs-fix-label">Fix →</span> {item.fix}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="cs-divider" />

        {/* ── OUTCOME ── */}
        <section className="cs-section cs-outcome reveal">
          <div className="cs-section-label">06 — Outcome</div>
          <h2 className="cs-h2">Results &amp; reflection</h2>
          <div className="cs-outcome-stats">
            {[
              { num: "92%", label: "Task completion rate on purchase flow (Round 3 testing)" },
              { num: "−63%", label: "Seller onboarding time vs. Round 1 baseline (11 steps → 5)" },
              { num: "120+", label: "Components in the final Figma design system" },
              { num: "1st", label: "Highest committee score in faculty capstone cohort" },
            ].map((s, i) => (
              <div className="cs-stat" key={i}>
                <div className="cs-stat-num">{s.num}</div>
                <div className="cs-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="cs-reflection">
            <h3 className="cs-h3">What I'd do differently</h3>
            <p>We spent too long in lo-fi before testing — two weeks of wireframing that a 3-day paper prototype sprint could have covered. In hindsight, I'd validate the role-toggle concept with a clickable prototype in week 2, not week 6. The core insight (toggle &gt; separate tabs) was there in our research; we just took too long to act on it.</p>
            <p style={{ marginTop: 16 }}>I also underestimated how much the Knowledge Hub needed its own IA — articles, guides, and community posts ended up competing for the same space, and a cleaner taxonomy would have reduced that friction without a full design round.</p>
          </div>
        </section>

        {/* ── NEXT CASE STUDIES ── */}
        <section className="cs-next">
          <p className="cs-next-label">Next case study</p>
          <Link href="/" className="cs-next-link">
            Back to all work <span>→</span>
          </Link>
        </section>

      </main>
    </>
  );
}
