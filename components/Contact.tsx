import React from 'react';
import { Download, BookOpen } from 'lucide-react';

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
          <Download size={14} strokeWidth={1.6} />
          Download CV
        </a>

        <a href="/documents/Resume_Panalee_Palasri.pdf" target="_blank" className="contact-btn-base contact-btn-primary">
          <Download size={14} strokeWidth={1.6} />
          Download Resume
        </a>

        <a href="/documents/Portfolio_Panalee_Palasri.pdf" target="_blank" className="contact-btn-base contact-btn-secondary">
          <BookOpen size={14} strokeWidth={1.6} />
          Save Portfolio as PDF
        </a>
      </div>
    </section>
  );
};

export default Contact;
