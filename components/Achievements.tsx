import React from 'react';
import { Trophy, Award, GraduationCap } from 'lucide-react';

const Achievements: React.FC = () => {
  const items = [
    {
      icon: <Trophy size={28} strokeWidth={1.5} />,
      title: "National Team Athlete — Thailand",
      sub: "Modern Pentathlon (Fencing, Swimming, Running, Riding, Shooting) · Jul 2017–Dec 2019 & Oct 2022–Mar 2023"
    },
    {
      icon: <Award size={28} strokeWidth={1.5} />,
      title: "1st Place · Best Website Award",
      sub: "Hello World Dolphin 2020 Faculty Event Competition · KMUTT"
    },
    {
      icon: <GraduationCap size={28} strokeWidth={1.5} />,
      title: "Petchra Prajomklao Scholarship",
      sub: "Full Athletic Scholarship · King Mongkut's University of Technology Thonburi · 2020–2024"
    }
  ];

  return (
    <section id="achievements">
      <div className="section-tag reveal">Achievements</div>
      <h2 className="section-title reveal">Beyond the screen.</h2>
      
      <div className="ach-grid">
        {items.map((item, index) => (
          <div key={index} className={`ach-card reveal reveal-delay-${index + 1}`}>
            <div className="ach-icon">{item.icon}</div>
            <div className="ach-title">{item.title}</div>
            <div className="ach-sub">{item.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
