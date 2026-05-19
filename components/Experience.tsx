export default function Experience() {
  const jobs = [
    {
      company: "Vansales Application Co., Ltd.",
      role: "UX/UI Designer",
      date: "Jan 2025 — Present",
      bullets: [
        "Own end-to-end UX/UI process across web and mobile — from discovery and wireframing to high-fidelity prototypes, design systems, and developer handoff.",
        "Collaborate with developers and stakeholders to clarify requirements and ensure smooth delivery through UAT and release cycles.",
        "Balance strategic design with hands-on execution, advocating for user-centred solutions aligned with business goals."
      ]
    },
    {
      company: "Leafy — Senior Capstone Project",
      role: "UX/UI Designer & Project Manager",
      date: "Aug 2023 — May 2024",
      bullets: [
        "Led a 3-person team through the full product lifecycle — from concept and user research to a complete visual system and high-fidelity Figma prototype.",
        "Designed an accessibility-focused e-commerce and knowledge hub with a role-based adaptive UI, seamlessly shifting between buyer and seller views.",
        "Bridged design and code with a modular Figma component library built with Variants, supporting frontend delivery."
      ]
    },
    {
      company: "Marvelous Studio Co., Ltd.",
      role: "UX/UI Designer (Intern)",
      date: "Jan – Jul 2023",
      bullets: [
        "Contributed to in-house digital products across the full UX/UI process — from research and wireframing to final delivery.",
        "Conducted usability testing, synthesised feedback into design improvements, and presented deliverables to stakeholders."
      ]
    },
    {
      company: "Princess Maha Chakri Sirindhorn Foundation (PMSF)",
      role: "UX/UI Designer (Freelance)",
      date: "Sep – Dec 2022",
      bullets: [
        "Redesigned the foundation's public website with modern aesthetics, responsive design, and improved navigation.",
        "Streamlined user workflows to resolve usability pain points and delivered a fully mobile-responsive interface."
      ]
    },
    {
      company: "Hello World Ermine 2021",
      role: "Senior Staff · UX/UI & Graphic Designer",
      date: "Aug – Nov 2021",
      bullets: [
        "Designed the event website and all graphic assets, ensuring responsive performance across desktop and mobile."
      ]
    },
    {
      company: "Hello World Dolphin 2020",
      role: "UX/UI & Graphic Designer",
      date: "Oct – Nov 2020",
      bullets: [
        "Developed the Easter festival website, winning 1st place for Best Website in the competition."
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="section-tag reveal">Work experience</div>
      <h2 className="section-title reveal">
        Where I&apos;ve been<br />
        and what I&apos;ve built.
      </h2>
      <div className="experience-cards reveal">
        {jobs.map((job, index) => (
          <div key={index} className="exp-card">
            <div className="exp-card-header">
              <div>
                <h3 className="exp-company">{job.company}</h3>
                <div className="exp-role">{job.role}</div>
              </div>
              <div className="exp-date">{job.date}</div>
            </div>
            <ul className="exp-bullets">
              {job.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
