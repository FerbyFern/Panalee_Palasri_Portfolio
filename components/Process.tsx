import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      label: "Discover",
      title: "Research & Listening",
      body: "User interviews, competitive audits, and desk research to understand the real problem — not just the stated one."
    },
    {
      num: "02",
      label: "Define",
      title: "Frame the Problem",
      body: "Insights synthesised into Information Architecture, user flows, and clear problem statements guiding every decision."
    },
    {
      num: "03",
      label: "Design",
      title: "Wireframe & Refine",
      body: "From rough wireframes to high-fidelity Figma prototypes, with usability testing and stakeholder checkpoints throughout."
    },
    {
      num: "04",
      label: "Deliver",
      title: "Handoff & Measure",
      body: "Component libraries, design documentation, and UAT support. Post-launch review closes the loop for the next iteration."
    }
  ];

  return (
    <section id="process">
      <div className="section-tag reveal">How I work</div>
      <h2 className="section-title reveal">A thoughtful<br />design process.</h2>
      
      <div className="process-steps">
        {steps.map((step, index) => (
          <div key={index} className={`process-step reveal reveal-delay-${index + 1}`}>
            <div className="step-num">{step.num}</div>
            <div className="step-label">{step.label}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-body">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
