"use client";

import React from 'react';
import Link from 'next/link';

interface CaseStudyItem {
  id: string;
  tag: string[];
  title: string;
  desc: string;
  year: string;
  sortDate: string;
  duration: string;
  impact: string;
  accent: string;
  link: string;
}

const hexToRgbString = (hex: string) => {
  const value = hex.replace('#', '');
  const normalized = value.length === 3
    ? value.split('').map((c) => c + c).join('')
    : value;
  const int = Number.parseInt(normalized, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `${r}, ${g}, ${b}`;
};

const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'ces',
    tag: ['Enterprise System', 'B2B', 'In-house Product'],
    title: 'CES — Gold Trading Platform Design',
    desc: 'ออกแบบระบบ Enterprise UX สำหรับแพลตฟอร์มซื้อขายทองคำแบบครบวงจร ครอบคลุม 12 โมดูลสำคัญ และระบบ Role-Based Design ที่รองรับผู้ใช้กว่า 9 บทบาท ช่วยลดความผิดพลาดในการทำงานและเพิ่มความเร็วในการเทรด',
    year: '2025',
    sortDate: '2025-01-01',
    duration: 'Jan 2025 – Present',
    impact: 'Live in Production',
    accent: '#C9A84C',
    link: '/work/ces',
  },
  {
    id: 'leafy',
    tag: ['E-Commerce', 'Garden Hub', 'Accessibility'],
    title: 'Leafy — Garden Commerce & Knowledge Hub',
    desc: 'แพลตฟอร์ม E-Commerce และศูนย์รวมความรู้ด้านการจัดสวนที่เน้น Accessibility รองรับระบบ Multi-supplier และ Adaptive UI ที่ปรับเปลี่ยนตามบทบาทผู้ใช้ (Buyer/Seller) ได้อย่างราบรื่น',
    year: '2024',
    sortDate: '2024-08-01',
    duration: '9 months',
    impact: '100% PBI Completion',
    accent: '#2d5a3d',
    link: '/work/leafy',
  },
  // {
  //   id: 'mediconnect',
  //   tag: ['HealthTech', 'Patient Portal', 'Accessibility'],
  //   title: 'MediConnect — Hospital Patient App',
  //   desc: 'ออกแบบ Patient Portal สำหรับโรงพยาบาลที่ให้บริการผู้สูงอายุและผู้พิการ โดยเน้น Accessibility ตาม WCAG 2.2 AA ช่วยลดเวลารอคิวเฉลี่ย 45 นาที และเพิ่ม NPS จาก 32 เป็น 71',
  //   year: '2023',
  //   sortDate: '2023-01-01',
  //   duration: '5 months',
  //   impact: 'NPS +39 pts',
  //   accent: '#6ECFB5',
  //   link: '#',
  // },
  {
    id: 'pmsf',
    tag: ['Foundation', 'Web Redesign', 'Responsive'],
    title: 'PMSF — Foundation Website Redesign',
    desc: 'ออกแบบและพัฒนาเว็บไซต์มูลนิธิใหม่ให้น่าเชื่อถือ เข้าถึงง่าย และรองรับการแสดงผลทุกอุปกรณ์ (Responsive Design) พร้อมปรับปรุงระบบ Navigation ให้ใช้งานสะดวกขึ้น',
    year: '2022',
    sortDate: '2022-09-01',
    duration: '2022',
    impact: 'UX Research & Navigation',
    accent: '#8B1A3A',
    link: '/work/pmsf',
  },
  // {
  //   id: 'learnify',
  //   tag: ['EdTech', 'Gamification', 'Web + Mobile'],
  //   title: 'Learnify — Online Learning Platform',
  //   desc: 'ออกแบบระบบ Gamification และ Learning Journey ที่ปรับให้เหมาะกับผู้เรียนแต่ละคน เพิ่ม Course Completion Rate จาก 18% เป็น 61% และลด Churn ลง 32% ภายใน 6 เดือน',
  //   year: '2022',
  //   sortDate: '2022-01-01',
  //   duration: '7 months',
  //   impact: '+43% Completion',
  //   accent: '#B87FE6',
  //   link: '#',
  // },
];

/* COMPONENT 1: The List Style */
export const CaseStudies: React.FC = () => {
  const sortedCaseStudiesData = [...caseStudiesData].sort(
    (a, b) => Date.parse(b.sortDate) - Date.parse(a.sortDate),
  );
  const workCount = String(sortedCaseStudiesData.length).padStart(2, '0');

  return (
    <section className="case-studies" id="case-studies-list">
      <div className="section-label reveal">
        <div className="section-label-line"></div>
        {/* <span className="section-label-text">Selected Work — 2022–2025</span> */}
        <div className="section-label-line"></div>
      </div>
      <div className="work-header reveal">
        <div>
          <div className="section-tag">Selected work</div>
          <h2 className="section-title">
            Case Studies & Projects that<br />
            shaped my craft.
          </h2>
        </div>
        <div className="work-count">{workCount}</div>
      </div>
      {/* <div className="cs-header">
        <h2 className="cs-title reveal">
          Case <em>Studies</em><br />
          & Projects
        </h2>
        <p className="cs-subtitle reveal reveal-delay-1">
          งานออกแบบแต่ละชิ้นเกิดจากการทำความเข้าใจปัญหาเชิงลึก ทดสอบกับผู้ใช้จริง และวัดผลลัพธ์ที่วัดได้
        </p>
      </div> */}

      <div className="cs-list">
        {sortedCaseStudiesData.map((item, index) => {
          const displayNum = String(index + 1).padStart(2, '0');

          return (
            <Link
              key={item.id}
              href={item.link}
              className={`cs-card reveal reveal-delay-${index}`}
              style={{
                '--card-accent': item.accent,
                '--card-accent-rgb': hexToRgbString(item.accent),
              } as React.CSSProperties}
            >
              <div className="cs-num">{displayNum}</div>
              <div className="cs-body">
                <div className="cs-tags">
                  {item.tag.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="cs-tag"
                      style={{
                        backgroundColor: `${item.accent}1F`, // Adds ~12% opacity (1F in hex)
                        color: item.accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="cs-card-title">{item.title}</div>
                <div className="cs-card-desc">{item.desc}</div>
              </div>
              <div className="cs-meta">
                <div className="cs-meta-items">
                  <div className="cs-meta-item">
                    <span className="cs-meta-label">Year</span>
                    <span className="cs-meta-value">{item.year}</span>
                  </div>
                  <div className="cs-meta-item">
                    <span className="cs-meta-label">Duration</span>
                    <span className="cs-meta-value">{item.duration}</span>
                  </div>
                  <div className="cs-meta-item">
                    <span className="cs-meta-label">Impact</span>
                    <span className="cs-meta-value">{item.impact}</span>
                  </div>
                </div>
                <div className="cs-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 13L13 3M13 3H5M13 3V11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="projects-grid">
        {/* <Link href="/work/leafy" className="project-card reveal reveal-delay-1" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="mockup-wrap">
            <img
              src="/images/work/leafy/thumbnail.png"
              alt="Leafy — Perfect Plant"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="project-overlay">
            <div className="project-arrow" style={{ fontSize: 11, width: 'auto', borderRadius: 4, padding: '6px 12px', letterSpacing: '0.1em', fontFamily: "var(--font-mono), monospace" }}>View case study →</div>
            <p className="project-tag">E-commerce · Capstone Project</p>
            <h3 className="project-name">
              Leafy — Adaptive E-commerce<br />
              & Knowledge Hub
            </h3>
            <p className="project-meta">
              2023–2024 · UX/UI Design, Project Management, Frontend
            </p>
          </div>
        </Link> */}

        {/* <Link href="/work/vansales" className="project-card tall reveal reveal-delay-2" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="mockup-wrap" style={{ height: '100%' }}>
            <img
              src="/images/work/vansales/thumbnail.png"
              alt="Vansales Application"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="project-overlay">
            <div className="project-arrow" style={{ fontSize: 11, width: 'auto', borderRadius: 4, padding: '6px 12px', letterSpacing: '0.1em', fontFamily: "var(--font-mono), monospace" }}>View case study →</div>
            <p className="project-tag">Web & Mobile · In-house Product</p>
            <h3 className="project-name">
              Vansales Application —<br />
              End-to-End Product Design
            </h3>
            <p className="project-meta">
              2025–Present · UX Strategy, Design Systems, Dev Handoff
            </p>
          </div>
        </Link> */}

        {/* <Link href="/work/pmsf" className="project-card reveal reveal-delay-3" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="mockup-wrap">
            <img
              src="/images/work/pmsf/thumbnail.png"
              alt="PMSF Redesign"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="project-overlay">
            <div className="project-arrow" style={{ fontSize: 11, width: 'auto', borderRadius: 4, padding: '6px 12px', letterSpacing: '0.1em', fontFamily: "var(--font-mono), monospace" }}>View case study →</div>
            <p className="project-tag">Web Redesign · Freelance</p>
            <h3 className="project-name">
              PMSF — Foundation<br />
              Website Redesign
            </h3>
            <p className="project-meta">
              2022 · Responsive Design, UX Research, Navigation
            </p>
          </div>
        </Link> */}

        {/* <Link href="/work/ces" className="project-card reveal reveal-delay-4" style={{ textDecoration: 'none', display: 'block' }}>
          <div className="mockup-wrap">
            <div className="proj-visual pv-3" style={{ background: '#16140F' }}>
              <div className="pv-grid"></div>
              <span style={{ color: 'rgba(201,168,76,0.15)', zIndex: 1, position: 'relative' }}>CES</span>
            </div>
          </div>
          <div className="project-overlay">
            <div className="project-arrow" style={{ fontSize: 11, width: 'auto', borderRadius: 4, padding: '6px 12px', letterSpacing: '0.1em', fontFamily: "var(--font-mono), monospace" }}>View case study →</div>
            <p className="project-tag">Enterprise System · In-house Product</p>
            <h3 className="project-name">
              CES — Gold Trading<br />
              Platform Design
            </h3>
            <p className="project-meta">
              2025–Present · Enterprise UX, 12 Modules, Role-Based Design
            </p>
          </div>
        </Link> */}
      </div>
    </section>
  );
};
