"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Work from "../components/Work";
import About from "../components/About";
import Experience from "../components/Experience";
import Process from "../components/Process";
import SkillsGrid from "../components/SkillsGrid";
import Testimonials from "../components/Testimonials";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", onMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, .project-card, .process-step, .skill-row, .ach-card, .testimonial-card"
    );

    const onMouseEnter = () => cursor.classList.add("big");
    const onMouseLeave = () => cursor.classList.remove("big");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            e.target.querySelectorAll(".skill-fill[data-width]").forEach((b) => {
              setTimeout(() => {
                (b as HTMLElement).style.width = (b as HTMLElement).dataset.width || "0%";
              }, 400);
            });
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((r) => observer.observe(r));

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <Navbar />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Experience />
      <Process />
      <SkillsGrid />
      <Testimonials />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
