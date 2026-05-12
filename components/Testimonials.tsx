import React from 'react';

const Testimonials: React.FC = () => {
  const quotes = [
    {
      initials: "S.K.",
      name: "Supervisor, Marvelous Studio",
      desc: "UX/UI Intern · 2023",
      text: "Panalee delivered designs that were both visually refined and deeply considered from a user perspective. She asked the right questions and never needed to be told twice."
    },
    {
      initials: "P.T.",
      name: "Project Lead, PMSF",
      desc: "Freelance Collaboration · 2022",
      text: "The redesign genuinely changed how visitors experience our website. Panalee brought both strong design craft and real empathy for the communities we serve."
    },
    {
      initials: "A.R.",
      name: "Faculty Advisor, KMUTT",
      desc: "Leafy Capstone · 2024",
      text: "What impressed me most was how she led the team without losing sight of the user. The accessibility work on Leafy showed a level of care I rarely see in student projects."
    }
  ];

  return (
    <section id="testimonials" style={{ background: 'var(--white)' }}>
      <div className="section-tag reveal">Kind words</div>
      <h2 className="section-title reveal">What collaborators say.</h2>
      
      <div className="testimonial-grid reveal">
        {quotes.map((quote, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-quote-icon">"</div>
            <p className="testimonial-text">{quote.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{quote.initials}</div>
              <div>
                <div className="testimonial-info-name">{quote.name}</div>
                <div className="testimonial-info-desc">{quote.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
