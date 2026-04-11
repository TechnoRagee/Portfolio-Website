// ============================================================
// Navbar Component (Navbar.jsx)
// ------------------------------------------------------------
// Fixed top navigation bar with:
// - Logo with animated dot
// - Desktop nav links with active state
// - Hire Me CTA button
// - Mobile hamburger menu (responsive)
// - Scroll-based shadow effect
// ============================================================

import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";

// Navigation links array — edit here to add/remove pages
const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  // State: controls mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);
  // State: adds shadow when user scrolls down
  const [scrolled, setScrolled] = useState(false);

  // Close menu when window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add scrolled class when user scrolls more than 20px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* ── Desktop Nav Inner ─────────────────────────────── */}
      <nav className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={handleLinkClick}>
          Vareen<span className="navbar__logo-dot" />
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {/* Hire Me button — links to contact page */}
          <li>
            <Link to="/contact" className="navbar__cta">
              Hire Me
            </Link>
          </li>
        </ul>

        {/* Hamburger button — only visible on mobile */}
        <button
          id="hamburger-btn"
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── Mobile Dropdown Menu ───────────────────────────── */}
      {menuOpen && (
        <ul className="navbar__mobile">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "active" : ""}`
                }
                onClick={handleLinkClick}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="navbar__cta" onClick={handleLinkClick}>
              Hire Me ✨
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
