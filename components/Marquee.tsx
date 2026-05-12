import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "User Research", "Wireframing", "Prototyping", "Visual Design",
    "Design Systems", "Accessibility", "Information Architecture",
    "User Interviews", "Usability Testing"
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {/* First set */}
        {items.map((item, index) => (
          <span key={`m1-${index}`} className="marquee-item">
            {item} <span className="marquee-dot">●</span>
          </span>
        ))}
        {/* Second set for infinite scroll */}
        {items.map((item, index) => (
          <span key={`m2-${index}`} className="marquee-item">
            {item} <span className="marquee-dot">●</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
