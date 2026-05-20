import React from "react";

export default function Education() {
  const educationList = [
    {
      institution: "King Mongkut's University of Technology Thonburi (KMUTT)",
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      department: "School of Information Technology (SIT)",
      date: "2020 — 2024",
      bullets: [
        "Specialised in Human-Computer Interaction (HCI), UI Design, and Web Systems development.",
        "Led Capstone Project 'Leafy' (Accessibility-focused Garden Commerce & Knowledge Hub) as Project Manager and Lead UX/UI Designer.",
        "Active in student activities: Designed and developed award-winning digital solutions for KMUTT faculty events."
      ]
    }
  ];

  return (
    <section id="education">
      <div className="section-tag reveal">Education</div>
      <h2 className="section-title reveal">
        Academic<br />
        foundation.
      </h2>
      <div className="education-cards reveal">
        {educationList.map((edu, index) => (
          <div key={index} className="edu-card">
            <div className="edu-card-header">
              <div>
                <h3 className="edu-institution">{edu.institution}</h3>
                <div className="edu-degree">
                  {edu.degree} <span className="edu-dept-sep">·</span> {edu.department}
                </div>
              </div>
              <div className="edu-date">{edu.date}</div>
            </div>
            <ul className="edu-bullets">
              {edu.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
