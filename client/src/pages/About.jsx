// ============================================================
// About Page (About.jsx)
// ------------------------------------------------------------
// Displays:
// - Personal intro + photo area
// - Education timeline (BCA, Asian School of Business)
// - What I bring / soft skills
// - Download CV button
// ============================================================

import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

// Scroll reveal hook
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Education data — edit here to update your education details
const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Asian School of Business",
    year: "2022 – 2025",
    description:
      "Studied core computer science concepts including programming, web development, database management, software engineering, and networking. Developed strong foundations in both frontend and backend technologies.",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "School Education",
    year: "2021 – 2022",
    description:
      "Completed 12th grade with a focus on Science and Mathematics. Developed analytical thinking and problem-solving skills.",
    icon: "📚",
  },
];

// What I bring — soft skills and work ethics
const qualities = [
  { icon: "💡", label: "Creative Thinker", desc: "Always looking for innovative solutions to complex problems." },
  { icon: "🤝", label: "Team Player", desc: "Comfortable collaborating in both small and large teams." },
  { icon: "📐", label: "Detail Oriented", desc: "Pixel-perfect precision in every design and code I write." },
  { icon: "🚀", label: "Fast Learner", desc: "Quick to pick up new technologies and frameworks." },
  { icon: "🎯", label: "Goal Focused", desc: "Driven by results and committed to delivering quality work." },
  { icon: "🌐", label: "Web Enthusiast", desc: "Genuinely passionate about the web and modern UI/UX trends." },
];

function About() {
  useScrollReveal();

  return (
    <main className="about">
      {/* ── Page Hero ───────────────────────────────────── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="section-tag">About Me</span>
          <h1 className="section-title">The Person Behind the Code</h1>
          <p className="section-subtitle">
            Get to know who I am, my educational journey, and what drives me as a developer.
          </p>
        </div>
      </section>

      {/* ── Bio Section ─────────────────────────────────── */}
      <section className="section">
        <div className="container about__bio-grid">
          {/* Visual card */}
          <div className="about__avatar-card fade-in">
            <div className="about__avatar">
              {/* Real photo — file: /public/my_pic-removebg-preview.png */}
              <img
                src="/my_pic-removebg-preview.png"
                alt="Vareen Aggarwal"
                className="about__avatar-photo"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback initials */}
              <span style={{ display: "none", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", fontSize: "2.2rem", fontWeight: 800, color: "#fff" }}>VA</span>
            </div>
            <div className="about__avatar-info">
              <h2 className="about__name">Vareen Aggarwal</h2>
              <p className="about__role">Frontend Developer · UI Designer</p>
              <div className="about__tags">
                <span>📍 India</span>
                <span>🟢 Open to Work</span>
              </div>
            </div>
          </div>

          {/* Text bio */}
          <div className="about__bio-text fade-in">
            <h2 className="about__bio-heading">Hello! 👋 I'm Vareen</h2>
            <p>
              I'm a fresh BCA graduate from the <strong>Asian School of Business</strong> with a deep
              passion for web development and UI/UX design. I love turning ideas into beautiful,
              functional web experiences.
            </p>
            <p>
              My journey into tech started with curiosity — I wanted to understand how websites were
              built. That curiosity grew into a full-blown passion. Today, I work with <strong>React.js</strong>,
              <strong> Node.js</strong>, <strong>MongoDB</strong>, and <strong>Figma</strong> to create
              end-to-end web applications.
            </p>
            <p>
              Even as a fresher, I bring discipline, eagerness to learn, and a commitment to writing
              clean, maintainable code. I'm actively looking for opportunities where I can contribute,
              grow, and make meaningful impact.
            </p>

            {/* Action buttons */}
            <div className="about__actions">
              <Link to="/contact" className="btn-primary" id="contact-about-btn">
                Let's Talk
              </Link>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary"
                id="download-resume-btn"
              >
                Download Resume ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Education Timeline ───────────────────────────── */}
      <section className="section about__edu-section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-tag">Academics</span>
            <h2 className="section-title">Education</h2>
          </div>

          <div className="edu-timeline">
            {education.map((edu, idx) => (
              <div className="edu-card fade-in" key={idx}>
                <div className="edu-card__icon">{edu.icon}</div>
                <div className="edu-card__body">
                  <div className="edu-card__header">
                    <h3 className="edu-card__degree">{edu.degree}</h3>
                    <span className="edu-card__year">{edu.year}</span>
                  </div>
                  <p className="edu-card__institution">{edu.institution}</p>
                  <p className="edu-card__desc">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qualities Grid ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-tag">My Traits</span>
            <h2 className="section-title">What I Bring</h2>
            <p className="section-subtitle">
              Beyond technical skills, these are the qualities I bring to every project and team.
            </p>
          </div>

          <div className="qualities-grid fade-in">
            {qualities.map((q) => (
              <div className="quality-card" key={q.label}>
                <span className="quality-card__icon">{q.icon}</span>
                <h3 className="quality-card__label">{q.label}</h3>
                <p className="quality-card__desc">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
