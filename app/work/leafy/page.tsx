"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import CaseStudyHero, { CaseStudyPreview } from "../../../components/CaseStudyHero";
import {
  ShoppingCart, Package, Handshake, Timer,
  Target, MessageSquare, Users, Search, Zap, Database,
  ClipboardList, Plug, Monitor, Smartphone,
  FolderKanban, Puzzle, Accessibility, RefreshCw, Microscope, Sprout,
  Calendar, BookOpen, Map, User, Link2, BarChart2,
  CheckCircle2, AlertTriangle, ArrowLeft, ArrowRight,
} from 'lucide-react';

const LeafyFullCaseStudy = () => {
  useEffect(() => {
    // ── Reveal Animations Logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // ── Custom Cursor Logic
    const cursor = document.getElementById("cursor");
    const onMouseMove = (e: MouseEvent) => {
      if (!cursor) return;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", onMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, .o-card, .r-card, .impact-card, .comp-card, .finding-card, .metric-card, .next-item"
    );

    const onMouseEnter = () => cursor?.classList.add("big");
    const onMouseLeave = () => cursor?.classList.remove("big");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    // ── Scroll Progress Logic
    const handleScroll = () => {
      const progressFill = document.getElementById('progress');
      if (progressFill) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressFill.style.width = scrolled + "%";
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="leafy-case-study-container">
      <div id="cursor"></div>
      <style jsx global>{`
        :root {
          --green-deep: var(--ink);
          --green-mid: #2d5a3d;
          --green-light: #4a8c5c;
          --green-pale: #a8c9a5;
          --cream: #f4efe6;
          --cream-dark: var(--border);
          --gold: var(--accent);
          --gold-light: var(--accent-light);
          --charcoal: var(--ink);
          --text-muted: var(--ink-soft);
          --white: #ffffff;
          --section-pad: 100px 60px;
        }

        .leafy-case-study-container {
          background: var(--cream);
          color: var(--charcoal);
          font-family: var(--font-body), sans-serif;
          line-height: 1.6;
        }

        .leafy-case-study-container section:not(.cs-hero) {
          padding: 96px 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── NAV OVERRIDE ── */
        /* Using main system Navbar */

        /* ── COMMON ELEMENTS ── */
        .section-num {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: var(--font-mono), monospace;
          font-size: var(--fs-12);
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 28px;
        }
        .section-num::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: var(--gold);
        }
        .section-title {
          font-family: var(--font-display), serif;
          font-size: clamp(calc(32px * var(--type-scale)), calc(3.5vw * var(--type-scale)), calc(48px * var(--type-scale)));
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin-bottom: 28px;
        }
        .section-lead {
          font-size: var(--fs-18);
          color: var(--text-muted);
          max-width: 680px;
          line-height: 1.8;
          margin-bottom: 56px;
        }
        .divider { width: 32px; height: 1px; background: var(--gold); margin-bottom: 20px; }

        /* ── S1 OVERVIEW ── */
        #overview { background: var(--cream); }
        .overview-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 80px; align-items: start; }
        .overview-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: var(--border); }
        .o-card {
          background: var(--cream); border-radius: 0; padding: 22px 24px;
          position: relative; overflow: hidden;
          transition: transform 0.25s, border-color 0.25s;
        }
        .o-card:hover { transform: translateY(-1px); }
        .o-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--green-mid); }
        .o-card-label { font-family: var(--font-mono), monospace; font-size: var(--fs-10); letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 8px; }
        .o-card-value { font-size: var(--fs-15); font-weight: 500; color: var(--charcoal); line-height: 1.6; }
        .overview-story h3 { font-family: var(--font-display), serif; font-size: 1.6rem; margin-bottom: 16px; }
        .overview-story p { font-size: var(--fs-16); color: var(--text-muted); line-height: 1.85; margin-bottom: 16px; }
        .tool-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
        .tag { background: var(--green-deep); color: white; font-size: 0.72rem; padding: 5px 14px; border-radius: 4px; font-weight: 500; }
        .tag.gold { background: rgba(201,168,76,0.12); color: var(--gold); border: 1px solid rgba(201,168,76,0.3); }

        /* ── S2 PROBLEM ── */
        #problem { background: var(--green-deep); color: white; }
        #problem .section-title, #problem .section-num { color: white; }
        #problem .section-lead { color: rgba(255,255,255,0.6); }
        #problem .section-num { color: var(--gold); }
        .problem-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: start; }
        .problem-statement-box { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-left: 4px solid var(--gold); border-radius: 0; padding: 32px 36px; margin-bottom: 32px; }
        .psb-label { font-family: var(--font-mono), monospace; font-size: var(--fs-10); letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 14px; }
        .psb-text { font-family: var(--font-display), serif; font-size: 1.25rem; line-height: 1.6; color: rgba(255,255,255,0.9); }
        .problem-bullets { list-style: none; }
        .problem-bullets li { display: flex; gap: 14px; align-items: flex-start; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 0.92rem; color: rgba(255,255,255,0.75); line-height: 1.6; }
        .problem-bullets li::before { content: ''; flex-shrink: 0; width: 8px; height: 8px; border-radius: 50%; background: var(--gold); margin-top: 7px; }
        .impact-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: var(--border); }
        .impact-card { background: var(--cream); border-radius: 0; padding: 20px; }
        .impact-icon { font-size: 1.4rem; margin-bottom: 10px; }
        .impact-title { font-family: var(--font-body), sans-serif; font-size: var(--fs-14); font-weight: 600; color: var(--ink); margin-bottom: 6px; }
        .impact-desc { font-size: var(--fs-13); color: var(--text-muted); line-height: 1.7; }

        /* ── S3 RESEARCH ── */
        .research-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; margin-bottom: 56px; background: var(--border); }
        .r-card { background: var(--cream); border-radius: 0; padding: 28px 24px; }
        .r-icon { font-size: 1.6rem; margin-bottom: 14px; }
        .r-title { font-family: var(--font-body), sans-serif; font-weight: 600; font-size: var(--fs-15); margin-bottom: 8px; }
        .r-body { font-size: var(--fs-13); color: var(--text-muted); line-height: 1.7; }
        .insight-row { display: grid; grid-template-columns: repeat(2,1fr); gap: 2px; margin-bottom: 40px; background: var(--border); }
        .insight-card { background: var(--green-deep); border-radius: 0; padding: 28px; color: white; }
        .insight-label { font-family: var(--font-mono), monospace; font-size: var(--fs-10); letter-spacing: 0.2em; text-transform: uppercase; color: var(--green-pale); margin-bottom: 10px; }
        .insight-quote { font-family: var(--font-display), serif; font-size: 1.05rem; line-height: 1.6; color: rgba(255,255,255,0.9); font-style: italic; }
        .artefact-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 2px; background: var(--border); }
        .artefact-pill { background: var(--cream); border-radius: 0; padding: 14px 16px; text-align: center; font-size: 0.8rem; font-weight: 500; color: var(--green-deep); }

        /* ── S4 DEFINE ── */
        #define { background: var(--green-deep); color: white; }
        #define .section-title, #define .section-num { color: white; }
        #define .section-num { color: var(--gold); }
        #define .section-lead { color: rgba(255,255,255,0.55); }
        .hmw-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; margin-bottom: 56px; background: rgba(255,255,255,0.08); }
        .hmw-card { background: rgba(255,255,255,0.05); border-radius: 0; padding: 24px; }
        .hmw-tag { font-family: var(--font-mono), monospace; font-size: var(--fs-10); letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; }
        .hmw-text { font-size: var(--fs-14); color: rgba(255,255,255,0.8); line-height: 1.7; }
        .principles-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; margin-bottom: 40px; background: rgba(255,255,255,0.08); }
        .principle { border-top: 2px solid var(--gold); padding-top: 16px; }
        .principle-num { font-size: 2rem; font-weight: 700; color: rgba(201,168,76,0.2); font-family: var(--font-display), serif; }
        .principle-title { font-family: var(--font-body), sans-serif; font-weight: 600; font-size: var(--fs-14); color: white; margin-bottom: 6px; }
        .principle-body { font-size: var(--fs-13); color: rgba(255,255,255,0.5); line-height: 1.6; }
        .user-stories { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: rgba(255,255,255,0.08); }
        .us-card { background: rgba(255,255,255,0.04); border-radius: 0; padding: 20px; font-size: var(--fs-14); color: rgba(255,255,255,0.75); line-height: 1.65; }
        .us-card strong { color: var(--green-pale); }

        /* ── S5 DESIGN ── */
        .design-phases { display: flex; gap: 0; margin-bottom: 56px; border: 1px solid var(--border); border-radius: 0; overflow: hidden; }
        .phase { flex: 1; padding: 20px 22px; border-right: 1px solid var(--border); position: relative; }
        .phase:last-child { border-right: none; }
        .phase-num { font-size: 1.8rem; font-weight: 700; color: rgba(28,58,40,0.08); font-family: var(--font-display), serif; line-height: 1; }
        .phase-title { font-family: var(--font-body), sans-serif; font-size: var(--fs-14); font-weight: 600; color: var(--green-deep); margin-bottom: 6px; }
        .phase-body { font-size: var(--fs-13); color: var(--text-muted); line-height: 1.6; }
        .design-screens { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-bottom: 40px; background: var(--border); }
        .screen-card { background: white; border: 1px solid var(--border); border-radius: 0; overflow: hidden; box-shadow: none; }
        .screen-header { background: var(--green-deep); padding: 10px 14px; display: flex; align-items: center; gap: 8px; }
        .screen-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.2); }
        .screen-url { flex: 1; background: rgba(255,255,255,0.1); height: 16px; border-radius: 3px; }
        .screen-body { padding: 14px; min-height: 160px; }
        .screen-label { font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 8px; }
        .screen-name { font-weight: 600; font-size: 0.9rem; margin-bottom: 6px; }
        .screen-desc { font-size: 0.78rem; color: var(--text-muted); line-height: 1.6; }
        .cart-mock { background: #f4efe6; border-radius: 6px; padding: 10px; margin-top: 10px; }
        .cart-row { display: flex; align-items: center; gap: 8px; background: white; border-radius: 4px; padding: 6px 8px; margin-bottom: 4px; }
        .cart-img { width: 28px; height: 28px; background: linear-gradient(135deg, #a8c9a5, #4a8c5c); border-radius: 3px; flex-shrink: 0; }
        .cart-info { flex: 1; }
        .cart-name { font-size: 0.55rem; font-weight: 600; color: #333; }
        .cart-sub { font-size: 0.5rem; color: #999; }
        .cart-price { font-size: 0.6rem; font-weight: 600; color: var(--green-mid); }
        .payment-mock { background: #f4efe6; border-radius: 6px; padding: 10px; margin-top: 10px; }
        .pay-addr { background: white; border-radius: 4px; padding: 8px; margin-bottom: 6px; }
        .pay-addr-title { font-size: 0.5rem; font-weight: 700; color: var(--green-mid); margin-bottom: 3px; }
        .pay-addr-text { font-size: 0.48rem; color: #666; line-height: 1.5; }
        .pay-methods { display: flex; gap: 4px; margin-bottom: 6px; }
        .pay-method { background: white; border-radius: 3px; padding: 4px 8px; font-size: 0.5rem; font-weight: 600; color: #555; }
        .pay-total { background: var(--green-mid); color: white; text-align: center; border-radius: 4px; padding: 6px; font-size: 0.55rem; font-weight: 600; }
        .order-mock { background: #f4efe6; border-radius: 6px; padding: 10px; margin-top: 10px; }
        .order-tabs { display: flex; gap: 4px; margin-bottom: 8px; }
        .order-tab { font-size: 0.5rem; padding: 3px 8px; border-radius: 3px; background: white; color: #888; }
        .order-tab.active { background: var(--green-mid); color: white; }
        .order-row { display: flex; align-items: center; justify-content: space-between; background: white; border-radius: 3px; padding: 5px 7px; margin-bottom: 3px; }
        .order-id { font-size: 0.5rem; color: #666; }
        .order-status { font-size: 0.48rem; padding: 2px 6px; border-radius: 10px; }
        .status-pending { background: #fff3e0; color: #e65100; }
        .status-complete { background: #e8f5e9; color: #2e7d32; }
        .status-transit { background: #e3f2fd; color: #1565c0; }
        .component-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 2px; background: var(--border); }
        .comp-card { background: white; border-radius: 0; padding: 20px; }
        .comp-title { font-family: var(--font-body), sans-serif; font-weight: 600; font-size: var(--fs-14); margin-bottom: 8px; color: var(--green-deep); }
        .comp-body { font-size: var(--fs-13); color: var(--text-muted); line-height: 1.7; }

        /* ── S6 TESTING ── */
        #testing { background: var(--green-deep); color: white; }
        #testing .section-title, #testing .section-num { color: white; }
        #testing .section-num { color: var(--gold); }
        #testing .section-lead { color: rgba(255,255,255,0.55); }
        .testing-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 60px; }
        .test-methods { display: grid; gap: 14px; }
        .test-method { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 20px 22px; display: flex; gap: 14px; align-items: flex-start; }
        .test-method-icon { font-size: 1.3rem; flex-shrink: 0; }
        .test-method-title { font-size: 0.88rem; font-weight: 600; color: white; margin-bottom: 6px; }
        .test-method-body { font-size: 0.8rem; color: rgba(255,255,255,0.55); line-height: 1.65; }
        .findings-list { display: grid; gap: 14px; }
        .finding-card { background: rgba(255,255,255,0.04); border-radius: 10px; padding: 20px; border-left: 3px solid; }
        .finding-card.positive { border-color: var(--green-pale); }
        .finding-card.negative { border-color: #e07070; }
        .finding-card.neutral { border-color: var(--gold); }
        .finding-label { font-size: 0.6rem; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 8px; }
        .finding-card.positive .finding-label { color: var(--green-pale); }
        .finding-card.negative .finding-label { color: #e07070; }
        .finding-card.neutral .finding-label { color: var(--gold); }
        .finding-text { font-size: 0.88rem; color: rgba(255,255,255,0.8); line-height: 1.65; }
        .changes-table { margin-top: 40px; width: 100%; border-collapse: collapse; }
        .changes-table th { text-align: left; font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); padding: 0 16px 14px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .changes-table td { padding: 14px 16px; font-size: 0.85rem; color: rgba(255,255,255,0.75); border-bottom: 1px solid rgba(255,255,255,0.06); vertical-align: top; line-height: 1.6; }
        .changes-table td:first-child { color: rgba(255,255,255,0.4); font-size: 0.78rem; }

        /* ── S7 OUTCOMES ── */
        .metrics-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 2px; margin-bottom: 56px; background: var(--border); }
        .metric-card { background: white; border-radius: 0; padding: 28px 22px; text-align: center; }
        .metric-num { font-family: var(--font-display), serif; font-size: 2.6rem; font-weight: 700; color: var(--green-mid); line-height: 1; margin-bottom: 8px; }
        .metric-label { font-size: var(--fs-13); color: var(--text-muted); line-height: 1.5; }
        .outcomes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        .outcomes-col h3 { font-family: var(--font-display), serif; font-size: 1.2rem; margin-bottom: 20px; }
        .outcome-list { list-style: none; display: grid; gap: 12px; }
        .outcome-list li { display: flex; gap: 12px; align-items: flex-start; font-size: var(--fs-14); color: var(--text-muted); line-height: 1.7; }
        .outcome-list li::before { content: '✓'; flex-shrink: 0; width: 20px; height: 20px; border-radius: 50%; background: var(--green-mid); color: white; font-size: 0.65rem; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-top: 2px; }
        .sprint-overview { margin-top: 40px; background: white; border: 1px solid var(--border); border-radius: 0; overflow: hidden; }
        .sprint-header { background: var(--green-deep); color: white; padding: 16px 24px; font-family: var(--font-mono), monospace; font-size: var(--fs-10); font-weight: 600; letter-spacing: 0.2em; display: grid; grid-template-columns: 1fr 1.5fr 1fr 1.5fr 1fr; gap: 10px; text-transform: uppercase; }
        .sprint-row { display: grid; grid-template-columns: 1fr 1.5fr 1fr 1.5fr 1fr; gap: 10px; padding: 14px 24px; border-bottom: 1px solid var(--border); font-size: var(--fs-13); color: var(--charcoal); align-items: center; }
        .sprint-row:last-child { border-bottom: none; }
        .sprint-bar-wrap { background: var(--cream-dark); border-radius: 3px; height: 8px; overflow: hidden; }
        .sprint-bar { height: 100%; border-radius: 3px; background: var(--green-mid); }
        .completion-badge { display: inline-block; font-size: 0.7rem; font-weight: 600; padding: 3px 10px; border-radius: 100px; }
        .badge-full { background: #e8f5e9; color: #2e7d32; }
        .badge-partial { background: #fff3e0; color: #e65100; }
        .badge-none { background: #fce4ec; color: #c62828; }

        /* ── S8 REFLECTION ── */
        #reflection { background: var(--green-deep); color: white; }
        #reflection .section-title, #reflection .section-num { color: white; }
        #reflection .section-num { color: var(--gold); }
        #reflection .section-lead { color: rgba(255,255,255,0.55); }
        .reflection-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-bottom: 56px; }
        .reflection-col h3 { font-family: var(--font-display), serif; font-size: 1.1rem; color: white; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .ref-list { list-style: none; display: grid; gap: 12px; }
        .ref-list li { display: flex; gap: 12px; font-size: var(--fs-14); color: rgba(255,255,255,0.7); line-height: 1.7; }
        .ref-list li .ref-icon { flex-shrink: 0; font-size: 1rem; margin-top: 1px; }
        .learnings-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; margin-bottom: 48px; background: rgba(255,255,255,0.08); }
        .learning-card { background: rgba(255,255,255,0.05); border-radius: 0; padding: 24px; }
        .learning-icon { font-size: 1.4rem; margin-bottom: 12px; }
        .learning-title { font-family: var(--font-body), sans-serif; font-size: var(--fs-14); font-weight: 600; color: white; margin-bottom: 8px; }
        .learning-body { font-size: var(--fs-13); color: rgba(255,255,255,0.55); line-height: 1.7; }
        .next-steps { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 0; padding: 36px; }
        .next-steps h3 { font-family: var(--font-display), serif; font-size: 1.3rem; color: white; margin-bottom: 24px; }
        .next-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 2px; background: rgba(255,255,255,0.08); }
        .next-item { display: flex; gap: 14px; align-items: flex-start; }
        .next-num { width: 28px; height: 28px; border-radius: 50%; background: rgba(201,168,76,0.2); color: var(--gold); font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .next-text { font-size: 0.88rem; color: rgba(255,255,255,0.7); line-height: 1.65; }
        .next-text strong { color: white; display: block; margin-bottom: 3px; }

        /* ── FOOTER OVERRIDE ── */
        /* Using main system footer */

        /* ── ANIMATIONS ── */
        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }

        .progress-bar { position: fixed; top: 0; left: 0; right: 0; height: 3px; background: rgba(255,255,255,0.1); z-index: 101; }
        .progress-fill { height: 100%; background: var(--gold); width: 0%; transition: width 0.1s; }

        @media (max-width: 900px) {
          /* Navbar links are handled by main system */
          .leafy-case-study-container section:not(.cs-hero) { padding: 64px 24px; }
          .overview-grid, .problem-grid, .testing-grid, .outcomes-grid, .reflection-cols { grid-template-columns: 1fr; }
          .overview-cards, .impact-cards, .research-grid, .insight-row, .artefact-row, .hmw-grid, .principles-row, .user-stories, .design-screens, .component-grid, .metrics-row, .learnings-grid, .next-grid { grid-template-columns: 1fr; }
          .design-screens { grid-template-columns: 1fr; }
          .design-phases { flex-direction: column; }
          .phase { border-right: none; border-bottom: 1px solid var(--cream-dark); }
          .sprint-header, .sprint-row { grid-template-columns: 1fr 1fr 1fr; }
          .sprint-header span:nth-child(4), .sprint-header span:nth-child(5), .sprint-row span:nth-child(4), .sprint-row span:nth-child(5) { display: none; }
          .leafy-footer { flex-direction: column; gap: 16px; text-align: center; }
        }
        @media (max-width: 600px) {
          .overview-cards, .impact-cards, .research-grid, .insight-row, .artefact-row, .hmw-grid, .principles-row, .user-stories, .design-screens, .component-grid, .metrics-row, .learnings-grid, .next-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Progress Bar */}
      <div className="progress-bar"><div className="progress-fill" id="progress"></div></div>

      <nav className="cs-nav">
        <Link href="/" className="cs-back" style={{display:'flex',alignItems:'center',gap:'8px'}}><ArrowLeft size={14} strokeWidth={1.5} /> Back to Portfolio</Link>
        <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 'var(--fs-11)', color: 'var(--ink-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Leafy — Case Study
        </span>
      </nav>

      {/* HERO */}
      <CaseStudyHero
        background="var(--ink)"
        eyebrow="UX/UI Case Study — Senior Capstone Project"
        title={<>Leafy — <em style={{ color: 'var(--green-pale)' }}>Garden Commerce</em></>}
        subtitle="An accessibility-focused e-commerce and knowledge hub for gardening enthusiasts — with a role-based adaptive UI that shifts seamlessly between buyer and seller experiences."
        chips={[
          { label: 'Category', value: 'E-Commerce' },
          { label: 'System', value: 'Garden Hub' },
          { label: 'Focus', value: 'Accessibility' },
        ]}
        stats={[
          { num: 'Aug 2023 — May 2024', label: 'Timeline' },
          { num: 'UX/UI Designer & Project Manager', label: 'My Role' },
          { num: '3-person team · SIT · KMUTT', label: 'Team' },
        ]}
        statsColumns={3}
        media={
          <CaseStudyPreview
            url="leafy.shop"
            accent="var(--green-pale)"
            title="Leafy storefront"
            subtitle="Plants, tools, and garden design — all in one place."
            imageSrc="/images/work/leafy/landing.png"
            imageAlt="Leafy landing page preview"
            cards={[
              { label: 'Category', value: 'E-Commerce' },
              { label: 'System', value: 'Garden Hub' },
              { label: 'Focus', value: 'Accessibility' },
            ]}
          />
        }
      />

      {/* S1: PROJECT OVERVIEW */}
      <section id="overview">
        <div className="section-num">01 — Project Overview</div>
        <h2 className="section-title reveal">Set the Stage</h2>
        <p className="section-lead reveal">What is this project, who built it, and why does it exist?</p>

        <div className="overview-grid">
          <div>
            <div className="overview-cards reveal">
              <div className="o-card">
                <div className="o-card-label">Project Title</div>
                <div className="o-card-value">Leafy — Senior Capstone Project · E-Commerce &amp; Knowledge Hub</div>
              </div>
              <div className="o-card">
                <div className="o-card-label">My Role</div>
                <div className="o-card-value">UX/UI Designer &amp; Project Manager</div>
              </div>
              <div className="o-card">
                <div className="o-card-label">Team &amp; Stakeholders</div>
                <div className="o-card-value">3-person team · CP23PL4 · SIT · KMUTT · Consultant Advisor</div>
              </div>
              <div className="o-card">
                <div className="o-card-label">Timeline &amp; Scope</div>
                <div className="o-card-value">Aug 2023 — May 2024 · 4 Releases · 58 Product Backlog Items</div>
              </div>
              <div className="o-card">
                <div className="o-card-label">Project Context</div>
                <div className="o-card-value">B2C &amp; B2B · Web (Desktop + Mobile) · Thai Market · Accessibility-Focused</div>
              </div>
              <div className="o-card">
                <div className="o-card-label">Design Deliverables</div>
                <div className="o-card-value">High-Fidelity Figma Prototype · Modular Component Library with Variants</div>
              </div>
            </div>
            <div className="tool-tags reveal" style={{marginTop:'20px'}}>
              <span className="tag">Figma</span>
              <span className="tag">Figma Variants</span>
              <span className="tag">React</span>
              <span className="tag">Django REST</span>
              <span className="tag">MySQL</span>
              <span className="tag">Postman</span>
              <span className="tag gold">Component Library</span>
              <span className="tag gold">Usability Testing</span>
              <span className="tag gold">User Research</span>
              <span className="tag gold">Project Management</span>
              <span className="tag gold">Sprint Planning</span>
            </div>
          </div>
          <div className="overview-story reveal">
            <h3>About Leafy</h3>
            <p>Leafy is an accessibility-focused e-commerce and knowledge hub built for the general public who enjoy planting, gardening, and landscaping design. It connects buyers with multiple suppliers in a single, cohesive marketplace — and adapts its interface dynamically depending on whether a user is shopping as a buyer or managing a storefront as a seller.</p>
            <p>As <strong>UX/UI Designer and Project Manager</strong>, I led a 3-person team through the full product lifecycle — from initial concept and user research all the way through to a complete visual system and high-fidelity Figma prototype. I was responsible for setting the design direction, facilitating team alignment across sprints, and ensuring design quality held across every release.</p>
            <p>A core part of my contribution was building a <strong>modular Figma component library using Variants</strong> — creating reusable, state-aware components for buttons, form fields, status badges, cards, and navigation elements. This library became the single source of truth that bridged design decisions with frontend delivery, reducing inconsistency and speeding up handoff.</p>
            <p>The platform supports four user roles — <strong>User</strong>, <strong>Supplier</strong>, <strong>Garden Designer</strong>, and <strong>Admin</strong> — with a role-based adaptive UI that shifts seamlessly between buyer and seller views without requiring separate interfaces or page structures.</p>
          </div>
        </div>
      </section>

      {/* S2: PROBLEM STATEMENT */}
      <section id="problem">
        <div className="section-num">02 — Problem Statement</div>
        <h2 className="section-title reveal">Define the Challenge</h2>
        <p className="section-lead reveal">Before building a single screen, we had to understand the gap we were filling.</p>

        <div className="problem-grid">
          <div>
            <div className="problem-statement-box reveal">
              <div className="psb-label">Core Problem</div>
              <div className="psb-text">"Gardening enthusiasts in Thailand lack a centralized, trustworthy online platform that supports multi-supplier purchasing, order tracking, and community-driven garden design inspiration — all in one place."</div>
            </div>

            <ul className="problem-bullets reveal">
              <li>Existing e-commerce platforms are generic and not tailored to the needs of plant buyers — missing SKU-level variance management (size, species, style) that gardening products require.</li>
              <li>Buyers shopping from multiple suppliers must manage multiple separate carts and order confirmations, creating fragmented, frustrating experiences.</li>
              <li>Suppliers have no dedicated storefront to showcase their catalog, manage incoming orders, and update inventory stock in real time.</li>
              <li>There is no integrated community or gallery space for users to share garden designs, find inspiration, or connect with garden designers.</li>
              <li>Frontend and backend teams encountered technical misalignments mid-sprint due to infrequent communication and unclear API contracts, causing delays.</li>
            </ul>
          </div>

          <div>
            <div className="impact-cards reveal">
              <div className="impact-card">
                <div className="impact-icon"><ShoppingCart size={22} strokeWidth={1.5} color="var(--green-mid)" /></div>
                <div className="impact-title">Fragmented Cart Experience</div>
                <div className="impact-desc">Multi-supplier orders with no grouped checkout flow led to confusion during the order confirmation journey.</div>
              </div>
              <div className="impact-card">
                <div className="impact-icon"><Package size={22} strokeWidth={1.5} color="var(--green-mid)" /></div>
                <div className="impact-title">SKU Complexity</div>
                <div className="impact-desc">Plant products vary by size, species, and style — existing platforms had no structured model for managing these variants.</div>
              </div>
              <div className="impact-card">
                <div className="impact-icon"><Handshake size={22} strokeWidth={1.5} color="var(--green-mid)" /></div>
                <div className="impact-title">Supplier Visibility</div>
                <div className="impact-desc">Suppliers lacked a professional storefront to list products, manage pricing, and handle incoming orders efficiently.</div>
              </div>
              <div className="impact-card">
                <div className="impact-icon"><Timer size={22} strokeWidth={1.5} color="var(--green-mid)" /></div>
                <div className="impact-title">Team Alignment Gaps</div>
                <div className="impact-desc">Mismatched schedules and technical errors between frontend and backend caused sprint delays and rework.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S3: RESEARCH */}
      <section id="research">
        <div className="section-num">03 — Research & Discovery</div>
        <h2 className="section-title reveal">Building Understanding First</h2>
        <p className="section-lead reveal">We combined qualitative and technical research to understand both users and system constraints before designing anything.</p>

        <div className="research-grid reveal">
          <div className="r-card">
            <div className="r-icon"><Target size={24} strokeWidth={1.5} color="var(--green-deep)" /></div>
            <div className="r-title">Research Goals</div>
            <div className="r-body">Understand how plant buyers discover and purchase products online, what friction they encounter in multi-seller scenarios, and what features suppliers need to manage their business effectively.</div>
          </div>
          <div className="r-card">
            <div className="r-icon"><MessageSquare size={24} strokeWidth={1.5} color="var(--green-deep)" /></div>
            <div className="r-title">Research Methods</div>
            <div className="r-body">User interviews with gardening enthusiasts, competitive analysis of platforms like Shopee and Lazada, heuristic evaluation, and collaborative UAT (User Acceptance Testing) from Product Backlog Items.</div>
          </div>
          <div className="r-card">
            <div className="r-icon"><Users size={24} strokeWidth={1.5} color="var(--green-deep)" /></div>
            <div className="r-title">Participants & Recruitment</div>
            <div className="r-body">Recruited participants from gardening communities. Two distinct personas targeted: everyday plant buyers (Somjai) and multi-product suppliers (Somchai), each with different workflows and mental models.</div>
          </div>
          <div className="r-card">
            <div className="r-icon"><Search size={24} strokeWidth={1.5} color="var(--green-deep)" /></div>
            <div className="r-title">Competitive Analysis</div>
            <div className="r-body">Reviewed Shopee, Lazada, and specialist sites. Key gaps found: no plant-specific SKU variance management, no multi-supplier grouped cart, and no community gallery or garden designer discovery feature.</div>
          </div>
          <div className="r-card">
            <div className="r-icon"><Zap size={24} strokeWidth={1.5} color="var(--green-deep)" /></div>
            <div className="r-title">Technical Research (POC)</div>
            <div className="r-body">Conducted Spike/POC research on Stock Keeping Units (SKU) — alphanumeric codes unique per retailer — to validate how to model product variance (size, style, species) in the database between item and item_details tables.</div>
          </div>
          <div className="r-card">
            <div className="r-icon"><Database size={24} strokeWidth={1.5} color="var(--green-deep)" /></div>
            <div className="r-title">Backend Discovery</div>
            <div className="r-body">Explored temporary cart management via MySQL Event Scheduler — a key finding that resolved how to handle session-based carts for non-authenticated users before they proceed to checkout.</div>
          </div>
        </div>

        <div className="insight-row reveal">
          <div className="insight-card">
            <div className="insight-label">Key Finding — Somjai's Journey</div>
            <div className="insight-quote">"When a user buys from multiple suppliers, they need to see items grouped by shop in their cart — with individual order totals — before they can confidently proceed to a single checkout."</div>
          </div>
          <div className="insight-card">
            <div className="insight-label">Key Finding — Somchai's Supply Side</div>
            <div className="insight-quote">"Suppliers need to manage products at the variant level (size, style, stock, price) and see orders grouped by their shop — separate from other sellers' orders in the same transaction."</div>
          </div>
        </div>

        <div className="artefact-row reveal">
          <div className="artefact-pill" style={{display:'flex',alignItems:'center',gap:'6px',justifyContent:'center'}}><Map size={14} strokeWidth={1.5} color="var(--green-deep)" /> User Journey Map</div>
          <div className="artefact-pill" style={{display:'flex',alignItems:'center',gap:'6px',justifyContent:'center'}}><User size={14} strokeWidth={1.5} color="var(--green-deep)" /> User Personas</div>
          <div className="artefact-pill" style={{display:'flex',alignItems:'center',gap:'6px',justifyContent:'center'}}><Link2 size={14} strokeWidth={1.5} color="var(--green-deep)" /> API Contract Map</div>
          <div className="artefact-pill" style={{display:'flex',alignItems:'center',gap:'6px',justifyContent:'center'}}><BarChart2 size={14} strokeWidth={1.5} color="var(--green-deep)" /> ERD Analysis</div>
        </div>
      </section>

      {/* S4: DEFINE & IDEATE */}
      <section id="define">
        <div className="section-num">04 — Define & Ideate</div>
        <h2 className="section-title reveal">Translating Insights Into Direction</h2>
        <p className="section-lead reveal">We transformed research findings into design principles, How Might We questions, and concrete user stories that guided every screen.</p>

        <h3 style={{color:'var(--green-pale)',fontFamily:'var(--font-display), serif',fontSize:'1rem',marginBottom:'20px',letterSpacing:'0.04em'}}>How Might We Questions</h3>
        <div className="hmw-grid reveal">
          <div className="hmw-card">
            <div className="hmw-tag">Cart & Orders</div>
            <div className="hmw-text">How might we help users review, select, and confirm purchases from multiple suppliers — without losing the sense of a single, unified checkout?</div>
          </div>
          <div className="hmw-card">
            <div className="hmw-tag">Product Management</div>
            <div className="hmw-text">How might we enable suppliers to manage complex product variants (size, species, style, stock) without the interface feeling overwhelming or technical?</div>
          </div>
          <div className="hmw-card">
            <div className="hmw-tag">Community & Discovery</div>
            <div className="hmw-text">How might we create a space where users can share their garden designs, discover inspiration, and find garden designers organically?</div>
          </div>
          <div className="hmw-card">
            <div className="hmw-tag">Trust & Transparency</div>
            <div className="hmw-text">How might we give buyers clear visibility into order status, shipping progress, and review outcomes — so they feel in control after placing an order?</div>
          </div>
          <div className="hmw-card">
            <div className="hmw-tag">Team Coordination</div>
            <div className="hmw-text">How might we keep frontend and backend teams aligned on API contracts so that UI changes and data model changes don't create rework?</div>
          </div>
          <div className="hmw-card">
            <div className="hmw-tag">Accessibility</div>
            <div className="hmw-text">How might we design visual cues and interaction patterns that feel intuitive even for users who are not experienced online shoppers?</div>
          </div>
        </div>

        <h3 style={{color:'var(--green-pale)',fontFamily:'var(--font-display), serif',fontSize:'1rem',margin:'40px 0 20px',letterSpacing:'0.04em'}}>Design Principles</h3>
        <div className="principles-row reveal">
          <div className="principle">
            <div className="principle-num">01</div>
            <div className="principle-title">Understand the User</div>
            <div className="principle-body">Every screen must reflect a real user need, not just a feature requirement. We led with empathy maps and user stories before wireframing.</div>
          </div>
          <div className="principle">
            <div className="principle-num">02</div>
            <div className="principle-title">Focus on Accessibility</div>
            <div className="principle-body">Design for all — clear typography, sufficient contrast ratios, and touch-friendly interaction targets for mobile web users.</div>
          </div>
          <div className="principle">
            <div className="principle-num">03</div>
            <div className="principle-title">Use Visual Cues</div>
            <div className="principle-body">Status indicators, color-coded order states, and icon-supported labels guide users without requiring them to read every word.</div>
          </div>
          <div className="principle">
            <div className="principle-num">04</div>
            <div className="principle-title">Keep It Simple</div>
            <div className="principle-body">Complex multi-step flows (cart → checkout → payment → tracking) must feel like a natural progression, not a form marathon.</div>
          </div>
          <div className="principle">
            <div className="principle-num">05</div>
            <div className="principle-title">Experiment and Repeat</div>
            <div className="principle-body">We iterated rapidly — sketching, testing, and refining — rather than waiting for a "perfect" design before showing it to users.</div>
          </div>
          <div className="principle">
            <div className="principle-num">06</div>
            <div className="principle-title">Usability Testing First</div>
            <div className="principle-body">UAT scenarios were built directly from Product Backlog Items, ensuring every designed feature was validated against a real test case.</div>
          </div>
        </div>

        <h3 style={{color:'var(--green-pale)',fontFamily:'var(--font-display), serif',fontSize:'1rem',margin:'40px 0 20px',letterSpacing:'0.04em'}}>User Stories</h3>
        <div className="user-stories reveal">
          <div className="us-card"><strong>As a buyer (Somjai),</strong> I want to add plants from multiple suppliers into a single cart, so I can review all items and confirm my order without switching between stores.</div>
          <div className="us-card"><strong>As a buyer,</strong> I want to select my default delivery address and payment method at checkout, so my order is placed correctly without re-entering details every time.</div>
          <div className="us-card"><strong>As a supplier (Somchai),</strong> I want to create products with multiple SKU variants (size, style, price, stock), so buyers can choose exactly what they need from my store.</div>
          <div className="us-card"><strong>As a supplier,</strong> I want to manage incoming orders and update their status (Pending → In Progress → Delivered → Complete), so buyers know exactly where their order is at all times.</div>
        </div>
      </section>

      {/* S5: DESIGN PROCESS */}
      <section id="design">
        <div className="section-num">05 — Design Process</div>
        <h2 className="section-title reveal">From Sketches to Screens</h2>
        <p className="section-lead reveal">Our design process moved through structured phases — keeping the team aligned and ensuring each screen had a clear rationale before it was built.</p>

        <div className="design-phases reveal">
          <div className="phase">
            <div className="phase-num">01</div>
            <div className="phase-title">Information Architecture</div>
            <div className="phase-body">Mapped out navigation, page hierarchy, and user role access levels for User, Supplier, Designer, and Admin.</div>
          </div>
          <div className="phase">
            <div className="phase-num">02</div>
            <div className="phase-title">Lo-Fi Wireframes</div>
            <div className="phase-body">Rough layout sketches for key flows: cart grouping, checkout steps, supplier product creation, and order status pages.</div>
          </div>
          <div className="phase">
            <div className="phase-num">03</div>
            <div className="phase-title">Interaction Design</div>
            <div className="phase-body">Defined state changes for cart quantity updates, order status transitions, address selection modals, and SKU variant selectors.</div>
          </div>
          <div className="phase">
            <div className="phase-num">04</div>
            <div className="phase-title">High-Fidelity Mockups</div>
            <div className="phase-body">Produced full-color, annotated Figma screens for Cart, Payment, MyPurchase, Supplier Products, and Orders pages.</div>
          </div>
          <div className="phase">
            <div className="phase-num">05</div>
            <div className="phase-title">Frontend Build</div>
            <div className="phase-body">Implemented in React with CSS layering. Discovered new CSS techniques during development and integrated design system tokens.</div>
          </div>
        </div>

        <div className="design-screens reveal">
          {/* Cart Page */}
          <div className="screen-card">
            <div className="screen-header">
              <div className="screen-dot"></div><div className="screen-dot"></div><div className="screen-dot"></div>
              <div className="screen-url"></div>
            </div>
            <div className="screen-body">
              <div className="screen-label">Desktop + Mobile</div>
              <div className="screen-name">Cart Page</div>
              <div className="screen-desc">Items grouped by shop name with per-supplier subtotals, quantity adjusters, item removal confirmation modal, and a persistent checkout CTA at the bottom.</div>
              <div className="cart-mock">
                <div className="cart-row">
                  <div style={{fontSize:'0.5rem',color:'#999',width:'70px'}}>✓ ShopName</div>
                </div>
                <div className="cart-row">
                  <div className="cart-img"></div>
                  <div className="cart-info">
                    <div className="cart-name">Polyscias Fabian</div>
                    <div className="cart-sub">Variation: Yellow, Red</div>
                  </div>
                  <div>
                    <div style={{fontSize:'0.5rem',color:'#999',marginBottom:'2px'}}>฿25.99 × 1</div>
                    <div className="cart-price">฿25.99</div>
                  </div>
                </div>
                <div className="cart-row">
                  <div className="cart-img" style={{background:'linear-gradient(135deg,#c9a84c,#a07832)'}}></div>
                  <div className="cart-info">
                    <div className="cart-name">Polyscias Fabian</div>
                    <div className="cart-sub">Variation: Yellow, Red</div>
                  </div>
                  <div>
                    <div style={{fontSize:'0.5rem',color:'#999',marginBottom:'2px'}}>฿32.99 × 2</div>
                    <div className="cart-price">฿65.98</div>
                  </div>
                </div>
                <div style={{background:'var(--green-mid)',color:'white',textAlign:'center',borderRadius:'4px',padding:'5px',fontSize:'0.55rem',fontWeight:'600',marginTop:'6px'}}>Check Out (4)</div>
              </div>
            </div>
          </div>

          {/* Payment Page */}
          <div className="screen-card">
            <div className="screen-header">
              <div className="screen-dot"></div><div className="screen-dot"></div><div className="screen-dot"></div>
              <div className="screen-url"></div>
            </div>
            <div className="screen-body">
              <div className="screen-label">Desktop + Mobile</div>
              <div className="screen-name">Payment / Confirmation Page</div>
              <div className="screen-desc">Shows delivery address with a "Change" option, order breakdown by shop, total with shipping and tax, and supported payment methods (Visa, Mastercard, PromptPay, etc.).</div>
              <div className="payment-mock">
                <div className="pay-addr">
                  <div className="pay-addr-title">📍 Delivery Address (Default)</div>
                  <div className="pay-addr-text">Apple Juice · (+66) 991234567<br/>KMUTT, 126 Pracha Uthit Rd, Bang Mot, Bangkok 10140</div>
                </div>
                <div className="pay-methods">
                  <div className="pay-method">VISA</div>
                  <div className="pay-method">MC</div>
                  <div className="pay-method">PayPal</div>
                  <div className="pay-method">฿Pay</div>
                </div>
                <div style={{fontSize:'0.5rem',color:'#888',marginBottom:'4px',display:'flex',justifyContent:'space-between',padding:'0 4px'}}>
                  <span>Price: ฿155.94</span><span>Ship: ฿0</span><span>Tax: ฿0</span>
                </div>
                <div className="pay-total">Place Order · Total ฿155.94</div>
              </div>
            </div>
          </div>

          {/* Orders Supplier */}
          <div className="screen-card">
            <div className="screen-header">
              <div className="screen-dot"></div><div className="screen-dot"></div><div className="screen-dot"></div>
              <div className="screen-url"></div>
            </div>
            <div className="screen-body">
              <div className="screen-label">Supplier Dashboard</div>
              <div className="screen-name">MyShop — Orders Management</div>
              <div className="screen-desc">Suppliers see all incoming orders filterable by status (All / Completed / Pending / Cancelled) with per-order expandable detail showing SKU breakdown, customer info, and status controls.</div>
              <div className="order-mock">
                <div className="order-tabs">
                  <div className="order-tab active">All orders 6</div>
                  <div className="order-tab">Completed 3</div>
                  <div className="order-tab">Pending</div>
                </div>
                <div className="order-row">
                  <div>
                    <div className="order-id">Order #123456 · Apple Juice</div>
                    <div style={{fontSize:'0.48rem',color:'#aaa'}}>10/03/2024 · ฿376.00</div>
                  </div>
                  <span className="order-status status-pending">Pending</span>
                </div>
                <div className="order-row">
                  <div>
                    <div className="order-id">Order #123456 · Jane Cooper</div>
                    <div style={{fontSize:'0.48rem',color:'#aaa'}}>09/03/2024 · ฿99.00</div>
                  </div>
                  <span className="order-status status-transit">In progress</span>
                </div>
                <div className="order-row">
                  <div>
                    <div className="order-id">Order #123456 · Jane Cooper</div>
                    <div style={{fontSize:'0.48rem',color:'#aaa'}}>06/03/2024 · ฿600.00</div>
                  </div>
                  <span className="order-status status-complete">Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="component-grid reveal">
          <div className="comp-card">
            <div className="comp-title">Modular Figma Component Library (Variants)</div>
            <div className="comp-body">Built a reusable component library using Figma Variants — covering status badges (Pending, In Progress, Delivered, Complete, Cancelled), form inputs, SKU variant selectors, modal overlays, product cards, and navigation elements. Each component was built with multiple states (default, hover, focused, disabled, error) so the frontend team could implement from a single, authoritative source of truth. This significantly reduced design inconsistency and accelerated handoff across sprints.</div>
          </div>
          <div className="comp-card">
            <div className="comp-title">Role-Based Adaptive UI</div>
            <div className="comp-body">Designed a single interface system that shifts contextually between buyer and seller modes — rather than building two separate products. A user logged in as a Supplier sees a "My Shop" panel with product management and order controls; the same user switching to buyer mode sees the standard storefront. Navigation, sidebar items, and available actions all adapt based on role — with no jarring context breaks.</div>
          </div>
          <div className="comp-card">
            <div className="comp-title">MyPurchase — Buyer Order Tracking</div>
            <div className="comp-body">Buyers can view all purchase history filtered by status, expand individual orders to see SKU-level breakdown, track shipping progress through a 5-step visual timeline, and submit product + service reviews directly from the order detail page — all within a single, unified account view.</div>
          </div>
          <div className="comp-card">
            <div className="comp-title">Accessibility-First Interaction Design</div>
            <div className="comp-body">Applied accessibility principles throughout: sufficient colour contrast across all status badge combinations, touch-friendly target sizes for mobile (minimum 44×44px), keyboard-navigable modals, and semantic labelling in all form components. Status information was never conveyed by colour alone — icons and text labels were always paired with colour cues.</div>
          </div>
        </div>
      </section>

      {/* S6: TESTING */}
      <section id="testing">
        <div className="section-num">06 — Testing & Validation</div>
        <h2 className="section-title reveal">Evidence the Design Works</h2>
        <p className="section-lead reveal">We validated our designs through structured UAT scenarios built directly from Product Backlog Items, plus backend API testing via Postman.</p>

        <div className="testing-grid reveal">
          <div>
            <div className="test-methods">
              <div className="test-method">
                <div className="test-method-icon"><ClipboardList size={20} strokeWidth={1.5} color="rgba(255,255,255,0.75)" /></div>
                <div>
                  <div className="test-method-title">Scenario-Based UAT</div>
                  <div className="test-method-body">Test cases were derived directly from PBI acceptance criteria. Testers were given realistic user stories (Somjai buying plants from multiple suppliers) and asked to complete the full checkout journey.</div>
                </div>
              </div>
              <div className="test-method">
                <div className="test-method-icon"><Plug size={20} strokeWidth={1.5} color="rgba(255,255,255,0.75)" /></div>
                <div>
                  <div className="test-method-title">Backend API Testing (Postman)</div>
                  <div className="test-method-body">All API endpoints (Authentication, Users, Addresses, Payments, Products, Carts, Orders) were tested via Postman collections — validating JWT auth flows, status codes, and response payloads against the API document.</div>
                </div>
              </div>
              <div className="test-method">
                <div className="test-method-icon"><Monitor size={20} strokeWidth={1.5} color="rgba(255,255,255,0.75)" /></div>
                <div>
                  <div className="test-method-title">Frontend Demo Testing</div>
                  <div className="test-method-body">Live demo walkthroughs of the frontend were conducted with team members and the consultant, covering login, cart, checkout, supplier product creation, and order management flows.</div>
                </div>
              </div>
              <div className="test-method">
                <div className="test-method-icon"><Smartphone size={20} strokeWidth={1.5} color="rgba(255,255,255,0.75)" /></div>
                <div>
                  <div className="test-method-title">Responsive & Cross-Device</div>
                  <div className="test-method-body">Cart and Payment pages were tested on both desktop and mobile breakpoints, verifying that layout, touch targets, and checkout flows worked correctly on narrow screens.</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="findings-list">
              <div className="finding-card positive">
                <div className="finding-label" style={{display:'flex',alignItems:'center',gap:'6px'}}><CheckCircle2 size={14} strokeWidth={1.5} /> What Worked Well</div>
                <div className="finding-text">The grouped cart UI (items sorted by shop) was immediately understood by testers — they could easily identify which items were from which supplier and select only certain shops for checkout.</div>
              </div>
              <div className="finding-card positive">
                <div className="finding-label" style={{display:'flex',alignItems:'center',gap:'6px'}}><CheckCircle2 size={14} strokeWidth={1.5} /> What Worked Well</div>
                <div className="finding-text">Order status color-coding (Pending = orange, In Progress = blue, Delivered = green, Cancelled = red) reduced cognitive load — testers instantly understood order states without reading labels.</div>
              </div>
              <div className="finding-card negative">
                <div className="finding-label" style={{display:'flex',alignItems:'center',gap:'6px'}}><AlertTriangle size={14} strokeWidth={1.5} /> Issue Found</div>
                <div className="finding-text">Sprint 2–4 of Release 4 were significantly incomplete (1/8, 1/14, 0/20) — Gallery, Chat, and Notification features could not be tested. This was partly due to misaligned schedules between team members.</div>
              </div>
              <div className="finding-card neutral">
                <div className="finding-label" style={{display:'flex',alignItems:'center',gap:'6px'}}><RefreshCw size={14} strokeWidth={1.5} /> Adjusted from Testing</div>
                <div className="finding-text">The SKU variant display in the cart was initially showing only the style code (XX231). After testing, we updated it to show a human-readable Variation label (e.g. "Yellow, Red") for clearer identification.</div>
              </div>
            </div>
          </div>
        </div>

        <table className="changes-table reveal">
          <thead>
            <tr>
              <th>Area</th>
              <th>Before Testing</th>
              <th>Change Made</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cart Item Variant Label</td>
              <td>Displayed raw SKU code (XX231) only</td>
              <td>Added human-readable "Variation: Yellow, Red" label beneath the product name</td>
            </tr>
            <tr>
              <td>Order Removal Confirmation</td>
              <td>Items deleted immediately on button click</td>
              <td>Added a "Do you want to remove this item?" modal with Cancel / Delete options</td>
            </tr>
            <tr>
              <td>Supplier Order Status</td>
              <td>Status was a plain text label</td>
              <td>Converted to dropdown selector with color-coded badge — Pending, In Progress, Delivered, Complete, Cancelled</td>
            </tr>
            <tr>
              <td>Address Default Indicator</td>
              <td>No visual differentiation for default address</td>
              <td>Added a "Default" green badge to the primary address card in both checkout and account settings</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* S7: OUTCOMES */}
      <section id="outcomes">
        <div className="section-num">07 — Outcomes & Impact</div>
        <h2 className="section-title reveal">What the Work Delivered</h2>
        <p className="section-lead reveal">A snapshot of what was shipped, what we measured, and what the project achieved across four releases.</p>

        <div className="metrics-row reveal">
          <div className="metric-card">
            <div className="metric-num">58</div>
            <div className="metric-label">Total Product Backlog Items across Release 4</div>
          </div>
          <div className="metric-card">
            <div className="metric-num">37</div>
            <div className="metric-label">PBI Items completed across all Release 4 sprints</div>
          </div>
          <div className="metric-card">
            <div className="metric-num">21/21</div>
            <div className="metric-label">Release 3 PBIs fully completed (100%)</div>
          </div>
          <div className="metric-card">
            <div className="metric-num">4</div>
            <div className="metric-label">User roles supported: User, Supplier, Designer, Admin</div>
          </div>
        </div>

        <div className="outcomes-grid reveal">
          <div className="outcomes-col">
            <h3>Qualitative Outcomes</h3>
            <ul className="outcome-list">
              <li>Led the team through the full product lifecycle — from concept and user research to a complete visual system and high-fidelity Figma prototype — with no prior PM structure in place.</li>
              <li>The modular Figma component library (built with Variants) became the team's single source of truth for UI, reducing handoff friction and keeping visual consistency intact across all four releases.</li>
              <li>The role-based adaptive UI successfully unified buyer and seller experiences within one coherent interface — verified through UAT sessions where testers navigated both modes without confusion.</li>
              <li>Accessibility-focused design decisions (contrast ratios, touch targets, icon + label pairing) were consistently applied across delivered screens and noted positively in the consultant review.</li>
              <li>The grouped multi-supplier cart eliminated confusion around "which item belongs to which shop" — verified through UAT walkthroughs with realistic test scenarios.</li>
            </ul>
          </div>
          <div className="outcomes-col">
            <h3>Technical & Business Outcomes</h3>
            <ul className="outcome-list">
              <li>REST API document finalized with endpoints for Authentication, Users, Addresses, Payments, Products (with SKU), Carts (with session support), and Orders.</li>
              <li>ER Diagram updated to reflect all new tables: cart, session_cart, order, order_detail, item_sku, item_details — with isDefault flags on address and payment.</li>
              <li>MySQL Event Scheduler implemented to handle temporary cart expiry for non-authenticated sessions — solving a key architectural challenge identified in research.</li>
              <li>MyPurchase page delivered with full 5-step order tracking timeline, status filtering, and inline product + service review submission.</li>
              <li>Responsive design validated across desktop and mobile for Cart, Payment, and MyPurchase — the three highest-traffic user-facing flows.</li>
            </ul>
          </div>
        </div>

        <div className="sprint-overview reveal">
          <div className="sprint-header">
            <span>Sprint</span>
            <span>Feature Focus</span>
            <span>Completed</span>
            <span>Progress</span>
            <span>Status</span>
          </div>
          <div className="sprint-row">
            <span>R3 (All)</span>
            <span>Profile, Product Detail, Security</span>
            <span>21 / 21</span>
            <div className="sprint-bar-wrap"><div className="sprint-bar" style={{width:'100%'}}></div></div>
            <span className="completion-badge badge-full">Complete</span>
          </div>
          <div className="sprint-row">
            <span>R4 · S1</span>
            <span>Account Settings, Address, Bank, Password</span>
            <span>16 / 16</span>
            <div className="sprint-bar-wrap"><div className="sprint-bar" style={{width:'100%'}}></div></div>
            <span className="completion-badge badge-full">Complete</span>
          </div>
          <div className="sprint-row">
            <span>R4 · S2</span>
            <span>MyShop Products & Orders Management</span>
            <span>1 / 8</span>
            <div className="sprint-bar-wrap"><div className="sprint-bar" style={{width:'12%'}}></div></div>
            <span className="completion-badge badge-partial">In Progress</span>
          </div>
          <div className="sprint-row">
            <span>R4 · S3</span>
            <span>Cart, Payment, MyPurchase, Tracking, Reviews</span>
            <span>1 / 14</span>
            <div className="sprint-bar-wrap"><div className="sprint-bar" style={{width:'7%'}}></div></div>
            <span className="completion-badge badge-partial">In Progress</span>
          </div>
          <div className="sprint-row">
            <span>R4 · S4</span>
            <span>Gallery, Chat, Notifications, UI Improvements</span>
            <span>0 / 20</span>
            <div className="sprint-bar-wrap"><div className="sprint-bar" style={{width:'0%'}}></div></div>
            <span className="completion-badge badge-none">Planned</span>
          </div>
        </div>
      </section>

      {/* S8: REFLECTION */}
      <section id="reflection">
        <div className="section-num">08 — Reflection & Learnings</div>
        <h2 className="section-title reveal">Looking Back, Looking Forward</h2>
        <p className="section-lead reveal">Honest reflections on what we got right, where we fell short, and what this project taught us about building real products as a team.</p>

        <div className="reflection-cols reveal">
          <div className="reflection-col">
            <h3 style={{display:'flex',alignItems:'center',gap:'8px'}}><CheckCircle2 size={18} strokeWidth={1.5} color="rgba(255,255,255,0.7)" /> What Went Well</h3>
            <ul className="ref-list">
              <li><span className="ref-icon"><Target size={16} strokeWidth={1.5} color="rgba(255,255,255,0.65)" /></span>Leading the team through the full product lifecycle — from concept and research to a complete visual system and working prototype — gave me genuine end-to-end ownership and forced me to think beyond individual screens to the coherence of the whole product.</li>
              <li><span className="ref-icon"><Puzzle size={16} strokeWidth={1.5} color="rgba(255,255,255,0.65)" /></span>The Figma component library built with Variants was the right investment. Having a modular, state-aware component set meant the team could build consistently across sprints without re-checking designs — and frontend could implement from one authoritative reference.</li>
              <li><span className="ref-icon"><Accessibility size={16} strokeWidth={1.5} color="rgba(255,255,255,0.65)" /></span>Committing to accessibility as a design principle — not an afterthought — shaped better decisions throughout. Pairing colour with icons and labels, sizing touch targets generously, and thinking about keyboard flows made the final product more robust for everyone.</li>
              <li><span className="ref-icon"><RefreshCw size={16} strokeWidth={1.5} color="rgba(255,255,255,0.65)" /></span>The role-based adaptive UI approach (one interface, multiple modes) was the right call architecturally. It kept the codebase and the design system leaner than building separate buyer and seller apps would have.</li>
              <li><span className="ref-icon"><ClipboardList size={16} strokeWidth={1.5} color="rgba(255,255,255,0.65)" /></span>Release 3 was delivered at 100% completion — a direct result of tighter sprint planning and clearer acceptance criteria built from PBI stories.</li>
            </ul>
          </div>
          <div className="reflection-col">
            <h3 style={{display:'flex',alignItems:'center',gap:'8px'}}><AlertTriangle size={18} strokeWidth={1.5} color="rgba(255,255,255,0.7)" /> What I&apos;d Do Differently</h3>
            <ul className="ref-list">
              <li><span className="ref-icon"><Calendar size={16} strokeWidth={1.5} color="rgba(255,255,255,0.65)" /></span>Establish a shared team calendar and explicit availability agreements at the project kickoff. Sprint 2–4 of Release 4 suffered from misaligned schedules — a conversation about capacity at the start would have allowed us to scope more realistically.</li>
              <li><span className="ref-icon"><Handshake size={16} strokeWidth={1.5} color="rgba(255,255,255,0.65)" /></span>Run more frequent cross-discipline syncs between design and development. As PM, I could have structured a short weekly alignment ritual that caught API mismatches and component interpretation gaps before they caused rework.</li>
              <li><span className="ref-icon"><Smartphone size={16} strokeWidth={1.5} color="rgba(255,255,255,0.65)" /></span>Start from mobile-first wireframes rather than adapting desktop designs down. The responsive versions of Cart and Payment were retrofitted — starting narrow would have produced more considered mobile experiences from the start.</li>
              <li><span className="ref-icon"><FolderKanban size={16} strokeWidth={1.5} color="rgba(255,255,255,0.65)" /></span>Scope the Gallery, Chat, and Notification features into a separate release from the outset. With Sprint 4 at 0/20, it's clear they were underestimated — better upfront scoping as PM would have protected the team from an undeliverable commitment.</li>
              <li><span className="ref-icon"><BookOpen size={16} strokeWidth={1.5} color="rgba(255,255,255,0.65)" /></span>Document the component library decisions more thoroughly. While the Figma Variants library was effective, we didn't write usage guidelines — which meant teammates occasionally used components in unintended configurations during handoff.</li>
            </ul>
          </div>
        </div>

        <h3 style={{color:'var(--green-pale)',fontFamily:'var(--font-display), serif',fontSize:'1rem',marginBottom:'20px',letterSpacing:'0.04em'}}>Key Personal Learnings</h3>
        <div className="learnings-grid reveal">
          <div className="learning-card">
            <div className="learning-icon"><FolderKanban size={22} strokeWidth={1.5} color="rgba(255,255,255,0.5)" /></div>
            <div className="learning-title">PM Work is Design Work</div>
            <div className="learning-body">Managing the project — sprint planning, team alignment, scope decisions — was itself a design problem. The skills that made me a good UX designer (systems thinking, user empathy, iteration) directly translated into being a more effective project manager.</div>
          </div>
          <div className="learning-card">
            <div className="learning-icon"><Puzzle size={22} strokeWidth={1.5} color="rgba(255,255,255,0.5)" /></div>
            <div className="learning-title">Components Are a Communication Tool</div>
            <div className="learning-body">Building the Figma Variants library taught me that a component isn't just a UI element — it's a shared language between design and development. The clearer and more consistent the library, the fewer alignment conversations the team needed mid-sprint.</div>
          </div>
          <div className="learning-card">
            <div className="learning-icon"><Accessibility size={22} strokeWidth={1.5} color="rgba(255,255,255,0.5)" /></div>
            <div className="learning-title">Accessibility Sharpens Design Thinking</div>
            <div className="learning-body">Designing with accessibility in mind — sufficient contrast, touch targets, labels independent of colour — consistently led to cleaner, more legible interfaces. It wasn't a constraint; it was a quality bar that made everything better for everyone.</div>
          </div>
          <div className="learning-card">
            <div className="learning-icon"><RefreshCw size={22} strokeWidth={1.5} color="rgba(255,255,255,0.5)" /></div>
            <div className="learning-title">Role-Based Design Requires System Thinking</div>
            <div className="learning-body">Designing an interface that adapts across four user roles forced me to think at the system level, not the screen level. Decisions about navigation, information hierarchy, and component states had to work across all role contexts — a valuable constraint that elevated the design quality.</div>
          </div>
          <div className="learning-card">
            <div className="learning-icon"><Microscope size={22} strokeWidth={1.5} color="rgba(255,255,255,0.5)" /></div>
            <div className="learning-title">Research Shapes Architecture</div>
            <div className="learning-body">The POC on SKU management and the temporary cart discovery weren't just technical exercises — they were design research that informed database modelling and what the UI needed to surface. Good UX designers ask questions that shape the system underneath, not just the surface on top.</div>
          </div>
          <div className="learning-card">
            <div className="learning-icon"><Sprout size={22} strokeWidth={1.5} color="rgba(255,255,255,0.5)" /></div>
            <div className="learning-title">Lifecycle Ownership Changes Perspective</div>
            <div className="learning-body">Leading from concept to prototype — across nine months and four releases — fundamentally changed how I think about design decisions. When you're responsible for the whole product, every screen choice feels connected to something larger, and that accountability produces better, more considered work.</div>
          </div>
        </div>

        <div className="next-steps reveal">
          <h3>Next Steps & Future Considerations</h3>
          <div className="next-grid">
            <div className="next-item">
              <div className="next-num">1</div>
              <div className="next-text"><strong>Garden Design & Gallery System</strong>Complete the Gallery module — allowing users to upload, browse, and review garden design photos — and introduce the Garden Designer role's public profile page.</div>
            </div>
            <div className="next-item">
              <div className="next-num">2</div>
              <div className="next-text"><strong>Real-Time Chat System</strong>Implement the optional Chat module so buyers can communicate directly with suppliers before purchasing — building trust and reducing order errors.</div>
            </div>
            <div className="next-item">
              <div className="next-num">3</div>
              <div className="next-text"><strong>Notification Center</strong>Design and build a Notification system that keeps users informed of order status changes, chat messages, and review prompts — reducing the need to manually check order history.</div>
            </div>
            <div className="next-item">
              <div className="next-num">4</div>
              <div className="next-text"><strong>Accessibility Audit</strong>Conduct a formal WCAG 2.1 audit of delivered screens, particularly for color contrast in status badges and keyboard navigation in modal flows — areas that weren't fully validated during this release cycle.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* NEXT */}
      <div className="cs-next">
        <div className="cs-next-label">Next Project</div>
        <Link href="/work/ces" className="cs-next-link">
          CES — Enterprise Gold Shop <ArrowRight size={16} strokeWidth={1.5} style={{flexShrink:0}} />
        </Link>
      </div>

      <footer style={{ background: 'var(--white)', borderTop: '1px solid var(--border)', padding: '40px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontFamily: "var(--font-mono), monospace", fontSize: 'var(--fs-11)', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>© 2025 Panalee Palasri</p>
        <Link href="/" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 'var(--fs-11)', color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none' }}>Back to Home</Link>
      </footer>
    </div>
  );
};

export default LeafyFullCaseStudy;
