// ============================================================
// Footer Component (Footer.jsx)
// ------------------------------------------------------------
// Displays: logo, short tagline, social links, copyright
// ============================================================

import { Link } from "react-router-dom";
import "../styles/Footer.css";

// Social links — update with your real URLs
const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/vareenaggarwal",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vareenaggarwal",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:vareenaggarwal@gmail.com",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Left: Logo + tagline */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            Vareen<span className="footer__dot" />
          </Link>
          <p className="footer__tagline">
            Frontend Developer · UI Designer · BCA Graduate
          </p>
        </div>

        {/* Center: Quick nav links */}
        <nav className="footer__nav">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/about" className="footer__link">About</Link>
          <Link to="/skills" className="footer__link">Skills</Link>
          <Link to="/projects" className="footer__link">Projects</Link>
          <Link to="/contact" className="footer__link">Contact</Link>
        </nav>

        {/* Right: Social icons */}
        <div className="footer__socials">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer__bottom">
        <p>© {currentYear} Vareen Aggarwal · Made with ❤️ using React & Node.js</p>
      </div>
    </footer>
  );
}

export default Footer;
