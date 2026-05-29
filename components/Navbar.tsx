import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDownloadsOpen, setIsDownloadsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav className={`${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <Link href="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
        Panalee Palasri
      </Link>

      <button
        className="nav-hamburger"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle Navigation Menu"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className={`nav-right ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link href="/#work" onClick={() => setIsMenuOpen(false)}>Work</Link>
          </li>
          <li>
            <Link href="/#about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/#experience" onClick={() => setIsMenuOpen(false)}>Experience</Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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
              <ChevronDown size={12} strokeWidth={1.5} aria-hidden="true" />
            </button>

            {isDownloadsOpen && (
              <div className="nav-download-menu" role="menu" aria-label="Download files">
                <a href="/documents/CV_Panalee_Palasri.pdf" download="CV_Panalee_Palasri.pdf" role="menuitem" onClick={() => { setIsDownloadsOpen(false); setIsMenuOpen(false); }}>
                  CV
                </a>
                <a href="/documents/Resume_Panalee_Palasri.pdf" download="Resume_Panalee_Palasri.pdf" role="menuitem" onClick={() => { setIsDownloadsOpen(false); setIsMenuOpen(false); }}>
                  Resume
                </a>
                <a href="/documents/Portfolio_Panalee_Palasri.pdf" target="_blank" rel="noopener noreferrer" role="menuitem" onClick={() => { setIsDownloadsOpen(false); setIsMenuOpen(false); }}>
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
