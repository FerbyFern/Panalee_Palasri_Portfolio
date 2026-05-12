import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="section-tag reveal">Get in touch</div>
      <h2 className="contact-headline reveal">
        Let&apos;s build something<br />
        <em>meaningful together.</em>
      </h2>
      
      <div className="contact-links reveal reveal-delay-1">
        <a href="mailto:panalee.wrk@gmail.com" className="contact-link">panalee.wrk@gmail.com</a>
        <a href="https://linkedin.com/in/panalee-palasri" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        <a href="tel:+66992309111" className="contact-link">+66 9-9230-9111</a>
      </div>

      <div className="btn-group reveal reveal-delay-2">
        <a href="/documents/CV_Panalee_Palasri.pdf" target="_blank" className="contact-btn-base contact-btn-primary">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1v9M3 7l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download CV
        </a>

        <a href="/documents/Resume_Panalee_Palasri.pdf" target="_blank" className="contact-btn-base contact-btn-primary">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1v9M3 7l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download Resume
        </a>

        <a href="/documents/Portfolio_Panalee_Palasri.pdf" target="_blank" className="contact-btn-base contact-btn-secondary">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="5" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M4 5V3a1 1 0 011-1h4a1 1 0 011 1v2M4 12v1.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5V12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            <circle cx="10" cy="8.5" r=".75" fill="currentColor"/>
          </svg>
          Save Portfolio as PDF
        </a>
      </div>
    </section>
  );
};

export default Contact;
