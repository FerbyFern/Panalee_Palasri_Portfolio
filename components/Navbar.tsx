import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDownloadsOpen, setIsDownloadsOpen] = useState(false);
  const downloadsRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (downloadsRef.current && !downloadsRef.current.contains(event.target as Node)) {
        setIsDownloadsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDownloadsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <Link href="/" className="nav-logo">
        Panalee Palasri
      </Link>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <Link href="/#work">Work</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#experience">Experience</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
          <li className="nav-download" ref={downloadsRef}>
            <button
              type="button"
              className="nav-download-toggle"
              aria-haspopup="menu"
              aria-expanded={isDownloadsOpen}
              onClick={() => setIsDownloadsOpen((value) => !value)}
            >
              Downloads
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isDownloadsOpen && (
              <div className="nav-download-menu" role="menu" aria-label="Download files">
                <a href="/documents/CV_Panalee_Palasri.pdf" download="CV_Panalee_Palasri.pdf" role="menuitem" onClick={() => setIsDownloadsOpen(false)}>
                  CV
                </a>
                <a href="/documents/Resume_Panalee_Palasri.pdf" download="Resume_Panalee_Palasri.pdf" role="menuitem" onClick={() => setIsDownloadsOpen(false)}>
                  Resume
                </a>
                <a href="/documents/Portfolio_Panalee_Palasri.pdf" target="_blank" rel="noopener noreferrer" role="menuitem" onClick={() => setIsDownloadsOpen(false)}>
                  Portfolio PDF
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
