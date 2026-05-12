import React from 'react';

const SkillsGrid: React.FC = () => {
  const groups = [
    {
      title: "Technical Skills",
      skills: [
        "User Research & Usability Testing",
        "Wireframing & Prototyping",
        "Information Architecture",
        "Responsive & Mobile Design",
        "Visual Design & Design Systems",
        "Accessibility Design"
      ]
    },
    {
      title: "Tools",
      skills: [
        "Figma, Adobe XD, Illustrator",
        "Framer, Notion",
        "HTML / CSS, JavaScript, SQL",
        "ClickUp, Miro, draw.io",
        "VS Code, GitHub",
        "Microsoft Office"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Cross-functional Collaboration",
        "Stakeholder Presentation",
        "Leadership & Project Management",
        "Critical Thinking & Research"
      ]
    },
    {
      title: "Languages",
      skills: [
        "Thai — Native",
        "English — Conversational",
        "Chinese — Basic"
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="section-tag reveal">Skills & tools</div>
      <h2 className="section-title reveal">What's in<br />my toolkit.</h2>

      <div className="tools-grid reveal">
        {groups.map((group, index) => (
          <div key={index} className="tools-col">
            <div className="tools-col-title">{group.title}</div>
            <ul className="tools-list">
              {group.skills.map((skill, sIndex) => (
                <li key={sIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
