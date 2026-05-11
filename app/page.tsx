"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", onMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, .project-card, .process-step, .skill-row, .ach-card"
    );

    const onMouseEnter = () => cursor.classList.add("big");
    const onMouseLeave = () => cursor.classList.remove("big");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            e.target.querySelectorAll(".skill-fill[data-width]").forEach((b) => {
              setTimeout(() => {
                (b as HTMLElement).style.width = (b as HTMLElement).dataset.width || "0%";
              }, 400);
            });
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((r) => observer.observe(r));

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>

      <nav>
        <a href="#" className="nav-logo">
          Panalee Palasri
        </a>
        <ul className="nav-links">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

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
            <div className="hero-stat-num">6+</div>
            <div className="hero-stat-label">Projects delivered</div>
          </div>
          <div className="hero-stat-block">
            <div className="hero-stat-num">1st</div>
            <div className="hero-stat-label">Best Website Award</div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>scroll</span>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          <span className="marquee-item">User Research</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Wireframing & Prototyping</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Design Systems</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Usability Testing</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Figma</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Accessibility Design</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Information Architecture</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Responsive & Mobile</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">User Research</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Wireframing & Prototyping</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Design Systems</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Usability Testing</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Figma</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Accessibility Design</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Information Architecture</span>
          <span className="marquee-dot">·</span>
          <span className="marquee-item">Responsive & Mobile</span>
          <span className="marquee-dot">·</span>
        </div>
      </div>

      <section id="work">
        <div className="work-header reveal">
          <div>
            <div className="section-tag">Selected work</div>
            <h2 className="section-title">
              Projects that<br />
              shaped my craft.
            </h2>
          </div>
          <div className="work-count">03</div>
        </div>
        <div className="projects-grid">
          <div className="project-card reveal reveal-delay-1">
            <div className="proj-visual pv-1">
              <div className="pv-grid"></div>
              <div
                className="pv-ring"
                style={{ width: "150px", height: "150px" }}
              ></div>
              <div
                className="pv-ring"
                style={{
                  width: "260px",
                  height: "260px",
                  borderColor: "rgba(196,98,45,0.10)",
                }}
              ></div>
              <svg
                width="180"
                height="120"
                viewBox="0 0 180 120"
                style={{ position: "absolute", opacity: 0.15 }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="10" y="10" width="160" height="100" rx="8" stroke="#C4622D" strokeWidth="1" />
                <rect x="28" y="34" width="50" height="5" rx="2" fill="#C4622D" />
                <rect x="28" y="47" width="124" height="3" rx="1" fill="#C4622D" opacity=".4" />
                <rect x="28" y="58" width="90" height="3" rx="1" fill="#C4622D" opacity=".4" />
                <rect x="28" y="76" width="44" height="18" rx="4" fill="#C4622D" opacity=".5" />
                <rect x="80" y="76" width="44" height="18" rx="4" fill="#C4622D" opacity=".18" />
              </svg>
              Leafy
            </div>
            <div className="project-overlay">
              <div className="project-arrow">↗</div>
              <p className="project-tag">E-commerce · Capstone Project</p>
              <h3 className="project-name">
                Leafy — Adaptive E-commerce<br />
                & Knowledge Hub
              </h3>
              <p className="project-meta">
                2023–2024 · UX/UI Design, Project Management, Frontend
              </p>
            </div>
          </div>

          <div className="project-card tall reveal reveal-delay-2">
            <div
              className="proj-visual pv-2"
              style={{ height: "100%", minHeight: "560px" }}
            >
              <div className="pv-grid"></div>
              <svg
                width="200"
                height="320"
                viewBox="0 0 200 320"
                style={{ position: "absolute", opacity: 0.14 }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="30" y="10" width="140" height="300" rx="12" stroke="#C4622D" strokeWidth="1" />
                <rect x="30" y="10" width="140" height="36" rx="12" fill="#C4622D" opacity=".08" />
                <rect x="50" y="22" width="60" height="8" rx="3" fill="#C4622D" opacity=".4" />
                <rect x="46" y="64" width="108" height="60" rx="6" fill="#C4622D" opacity=".07" />
                <rect x="56" y="76" width="50" height="6" rx="2" fill="#C4622D" opacity=".5" />
                <rect x="56" y="90" width="80" height="4" rx="1" fill="#C4622D" opacity=".3" />
                <rect x="46" y="140" width="108" height="60" rx="6" fill="#C4622D" opacity=".05" />
                <rect x="56" y="152" width="40" height="6" rx="2" fill="#C4622D" opacity=".4" />
                <rect x="46" y="220" width="50" height="28" rx="6" fill="#C4622D" opacity=".4" />
                <rect x="104" y="220" width="50" height="28" rx="6" fill="#C4622D" opacity=".14" />
              </svg>
              Vansales
            </div>
            <div className="project-overlay">
              <div className="project-arrow">↗</div>
              <p className="project-tag">Web & Mobile · In-house Product</p>
              <h3 className="project-name">
                Vansales Application —<br />
                End-to-End Product Design
              </h3>
              <p className="project-meta">
                2025–Present · UX Strategy, Design Systems, Dev Handoff
              </p>
            </div>
          </div>

          <div className="project-card reveal reveal-delay-3">
            <div className="proj-visual pv-3">
              <div className="pv-grid"></div>
              <svg
                width="240"
                height="130"
                viewBox="0 0 240 130"
                style={{ position: "absolute", opacity: 0.16 }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="10" y="10" width="220" height="110" rx="6" stroke="#C4622D" strokeWidth="1" />
                <rect x="10" y="10" width="220" height="32" rx="6" fill="#C4622D" opacity=".07" />
                <rect x="28" y="20" width="80" height="8" rx="3" fill="#C4622D" opacity=".4" />
                <rect x="28" y="56" width="72" height="46" rx="4" fill="#C4622D" opacity=".07" />
                <rect x="112" y="58" width="100" height="6" rx="2" fill="#C4622D" opacity=".35" />
                <rect x="112" y="72" width="80" height="4" rx="1" fill="#C4622D" opacity=".22" />
                <rect x="112" y="84" width="90" height="4" rx="1" fill="#C4622D" opacity=".22" />
              </svg>
              PMSF
            </div>
            <div className="project-overlay">
              <div className="project-arrow">↗</div>
              <p className="project-tag">Web Redesign · Freelance</p>
              <h3 className="project-name">
                PMSF — Foundation<br />
                Website Redesign
              </h3>
              <p className="project-meta">
                2022 · Responsive Design, UX Research, Navigation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="section-tag reveal">About me</div>
        <div className="about-grid">
          <div className="about-portrait reveal">
            <div className="portrait-placeholder">PP</div>
            <div className="portrait-badge">KMUTT · B.Sc. IT · 2024</div>
            <div className="portrait-tag">Open to opportunities</div>
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
                experience — spanning freelance, in-house, and client-facing product
                development.
              </p>
              <p>
                I&apos;m skilled across the full design process — from user research and
                wireframing through to high-fidelity prototyping and usability testing —
                delivering accessible, user-centred interfaces that work across every
                device and context.
              </p>
              <p>
                Outside design, I&apos;m a former National Team Athlete representing Thailand
                in Modern Pentathlon — a discipline that shaped how I approach pressure,
                precision, and continuous improvement.
              </p>
            </div>
            <div className="about-pills">
              <span className="pill">Figma</span>
              <span className="pill">Adobe XD</span>
              <span className="pill">Framer</span>
              <span className="pill">HTML / CSS</span>
              <span className="pill">JavaScript</span>
              <span className="pill">Miro</span>
              <span className="pill">GitHub</span>
            </div>
            <div className="skills-list">
              <div className="skill-row">
                <span className="skill-name">UI / Visual Design</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "0%" }} data-width="95%"></div>
                </div>
              </div>
              <div className="skill-row">
                <span className="skill-name">Wireframing & Prototyping</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "0%" }} data-width="92%"></div>
                </div>
              </div>
              <div className="skill-row">
                <span className="skill-name">UX Research & Testing</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "0%" }} data-width="88%"></div>
                </div>
              </div>
              <div className="skill-row">
                <span className="skill-name">Design Systems</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "0%" }} data-width="85%"></div>
                </div>
              </div>
              <div className="skill-row">
                <span className="skill-name">Accessibility Design</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "0%" }} data-width="80%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="section-tag reveal">Work experience</div>
        <h2 className="section-title reveal">
          Where I&apos;ve been<br />
          and what I&apos;ve built.
        </h2>
        <div className="timeline reveal">
          <div className="tl-date">
            <div className="tl-date-text">
              Jan 2025<br />— Present
            </div>
          </div>
          <div className="tl-content">
            <div className="tl-dot"></div>
            <div className="tl-company">Vansales Application Co., Ltd.</div>
            <div className="tl-role">UX/UI Designer</div>
            <ul className="tl-bullets">
              <li>
                Own end-to-end UX/UI process across web and mobile — from discovery
                and wireframing to high-fidelity prototypes, design systems, and
                developer handoff.
              </li>
              <li>
                Collaborate with developers and stakeholders to clarify requirements
                and ensure smooth delivery through UAT and release cycles.
              </li>
              <li>
                Balance strategic design decisions with hands-on execution,
                advocating for user-centred solutions aligned with business goals.
              </li>
            </ul>
          </div>

          <div className="tl-date">
            <div className="tl-date-text">
              Aug 2023<br />— May 2024
            </div>
          </div>
          <div className="tl-content">
            <div className="tl-dot"></div>
            <div className="tl-company">Leafy — Senior Capstone Project</div>
            <div className="tl-role">UX/UI Designer & Project Manager</div>
            <ul className="tl-bullets">
              <li>
                Led a 3-person team through the full product lifecycle — from concept
                and user research to a complete visual system and high-fidelity Figma
                prototype.
              </li>
              <li>
                Designed an accessibility-focused e-commerce and knowledge hub with a
                role-based adaptive UI, seamlessly shifting layouts between buyer and
                seller views.
              </li>
              <li>
                Bridged design and code with a modular Figma component library built
                with Variants, supporting frontend delivery.
              </li>
            </ul>
          </div>

          <div className="tl-date">
            <div className="tl-date-text">Jan – Jul 2023</div>
          </div>
          <div className="tl-content">
            <div className="tl-dot"></div>
            <div className="tl-company">Marvelous Studio Co., Ltd.</div>
            <div className="tl-role">UX/UI Designer (Intern)</div>
            <ul className="tl-bullets">
              <li>
                Contributed to in-house digital products across the full UX/UI
                process — from research and wireframing to final delivery.
              </li>
              <li>
                Conducted usability testing, synthesised feedback into design
                improvements, and presented deliverables to stakeholders.
              </li>
            </ul>
          </div>

          <div className="tl-date">
            <div className="tl-date-text">Sep – Dec 2022</div>
          </div>
          <div className="tl-content">
            <div className="tl-dot"></div>
            <div className="tl-company">
              Princess Maha Chakri Sirindhorn Foundation (PMSF)
            </div>
            <div className="tl-role">UX/UI Designer (Freelance)</div>
            <ul className="tl-bullets">
              <li>
                Redesigned the foundation&apos;s public website with modern aesthetics,
                responsive design, and improved navigation.
              </li>
              <li>
                Streamlined user workflows to resolve usability pain points and
                delivered a fully mobile-responsive interface.
              </li>
            </ul>
          </div>

          <div className="tl-date">
            <div className="tl-date-text">Aug – Nov 2021</div>
          </div>
          <div className="tl-content">
            <div className="tl-dot"></div>
            <div className="tl-company">Hello World Ermine 2021</div>
            <div className="tl-role">Senior Staff · UX/UI & Graphic Designer</div>
            <ul className="tl-bullets">
              <li>
                Designed the event website and all graphic assets, ensuring
                responsive performance across desktop and mobile.
              </li>
              <li>
                Identified and resolved cross-device rendering challenges to
                maintain a consistent user experience.
              </li>
            </ul>
          </div>

          <div className="tl-date">
            <div className="tl-date-text">Oct – Nov 2020</div>
          </div>
          <div className="tl-content">
            <div className="tl-dot"></div>
            <div className="tl-company">Hello World Dolphin 2020</div>
            <div className="tl-role">UX/UI & Graphic Designer</div>
            <ul className="tl-bullets">
              <li>
                Developed the Easter festival website, winning 1st place for Best
                Website in the faculty event design competition.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="section-tag reveal">How I work</div>
        <h2 className="section-title reveal">
          A thoughtful<br />
          design process.
        </h2>
        <div className="process-steps">
          <div className="process-step reveal reveal-delay-1">
            <div className="step-num">01</div>
            <div className="step-label">Discover</div>
            <h3 className="step-title">Research & Listening</h3>
            <p className="step-body">
              User interviews, competitive audits, and desk research to understand
              the real problem — not just the stated one.
            </p>
          </div>
          <div className="process-step reveal reveal-delay-2">
            <div className="step-num">02</div>
            <div className="step-label">Define</div>
            <h3 className="step-title">Frame the Problem</h3>
            <p className="step-body">
              Insights synthesised into Information Architecture, user flows, and
              clear problem statements guiding every decision.
            </p>
          </div>
          <div className="process-step reveal reveal-delay-3">
            <div className="step-num">03</div>
            <div className="step-label">Design</div>
            <h3 className="step-title">Wireframe & Refine</h3>
            <p className="step-body">
              From rough wireframes to high-fidelity Figma prototypes, with usability
              testing and stakeholder checkpoints throughout.
            </p>
          </div>
          <div className="process-step reveal reveal-delay-4">
            <div className="step-num">04</div>
            <div className="step-label">Deliver</div>
            <h3 className="step-title">Handoff & Measure</h3>
            <p className="step-body">
              Component libraries, design documentation, and UAT support. Post-launch
              review closes the loop for the next iteration.
            </p>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="section-tag reveal">Skills & tools</div>
        <h2 className="section-title reveal">
          What&apos;s in<br />
          my toolkit.
        </h2>
        <div className="tools-grid reveal">
          <div className="tools-col">
            <div className="tools-col-title">Technical Skills</div>
            <ul className="tools-list">
              <li>User Research & Usability Testing</li>
              <li>Wireframing & Prototyping</li>
              <li>Information Architecture</li>
              <li>Responsive & Mobile Design</li>
              <li>Visual Design & Design Systems</li>
              <li>Accessibility Design</li>
            </ul>
          </div>
          <div className="tools-col">
            <div className="tools-col-title">Tools</div>
            <ul className="tools-list">
              <li>Figma, Adobe XD, Illustrator</li>
              <li>Framer, Notion</li>
              <li>HTML / CSS, JavaScript, SQL</li>
              <li>ClickUp, Miro, draw.io</li>
              <li>VS Code, GitHub</li>
              <li>Microsoft Office</li>
            </ul>
          </div>
          <div className="tools-col">
            <div className="tools-col-title">Soft Skills & Languages</div>
            <ul className="tools-list">
              <li>Cross-functional Collaboration</li>
              <li>Stakeholder Presentation</li>
              <li>Leadership & Project Management</li>
              <li>Critical Thinking & Research</li>
              <li>Thai — Native</li>
              <li>English — Conversational</li>
              <li>Chinese — Basic</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="section-tag reveal">Achievements</div>
        <h2 className="section-title reveal">Beyond the screen.</h2>
        <div className="ach-grid">
          <div className="ach-card reveal reveal-delay-1">
            <div className="ach-icon">★</div>
            <div className="ach-title">National Team Athlete — Thailand</div>
            <div className="ach-sub">
              Modern Pentathlon (Fencing, Swimming, Running, Riding, Shooting) · Jul
              2017–Dec 2019 &amp; Oct 2022–Mar 2023
            </div>
          </div>
          <div className="ach-card reveal reveal-delay-2">
            <div className="ach-icon">①</div>
            <div className="ach-title">1st Place · Best Website Award</div>
            <div className="ach-sub">
              Hello World Dolphin 2020 Faculty Event Competition · KMUTT
            </div>
          </div>
          <div className="ach-card reveal reveal-delay-3">
            <div className="ach-icon">◆</div>
            <div className="ach-title">Petchra Prajomklao Scholarship</div>
            <div className="ach-sub">
              Full Athletic Scholarship · King Mongkut&apos;s University of Technology
              Thonburi · 2020–2024
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="section-tag reveal">Get in touch</div>
        <h2 className="contact-headline reveal">
          Let&apos;s build something<br />
          <em>meaningful together.</em>
        </h2>
        <div className="contact-links reveal reveal-delay-1">
          <a href="mailto:panalee.wrk@gmail.com" className="contact-link">
            panalee.wrk@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/panalee-palasri"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          <a href="tel:+66992309111" className="contact-link">
            +66 9-9230-9111
          </a>
        </div>
      </section>

      <footer>
        <p className="footer-copy">© 2025 Panalee Palasri. All rights reserved.</p>
        <div className="footer-socials">
          <a
            href="https://linkedin.com/in/panalee-palasri"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:panalee.wrk@gmail.com">Email</a>
        </div>
      </footer>
    </>
  );
}
