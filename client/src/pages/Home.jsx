// ============================================================
// Home Page (Home.jsx)
// ------------------------------------------------------------
// Landing page with:
// - Hero section: name, tagline, CTA buttons, animated badge
// - Quick stats (projects, skills, education)
// - Featured projects preview
// - Call-to-action strip
// ============================================================

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/Home.css";
import ProjectCard from "../components/ProjectCard";

// Custom hook: adds 'visible' class to elements when they scroll into view
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    // Observe all elements with class 'fade-in'
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Home() {
  useScrollReveal();

  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch featured projects from database
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await api.get("/data/projects");
        // Only show projects marked as 'featured'
        const featured = res.data.filter((p) => p.featured === true).slice(0, 3);
        setFeaturedProjects(featured);
      } catch (err) {
        console.error("Error fetching featured projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <main className="home">
      {/* ── Hero Section ──────────────────────────────────── */}
      <section className="hero">
        <div className="container hero__inner">
          {/* Left: Text content */}
          <div className="hero__content">
            {/* Available badge */}
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              Available for work
            </span>

            {/* Main headline */}
            <h1 className="hero__title">
              Hi, I'm{" "}
              <span className="gradient-text">Vareen Aggarwal</span>
            </h1>

            {/* Sub-headline */}
            <p className="hero__subtitle">
              A passionate <strong>Frontend Developer</strong> & <strong>UI Designer</strong> — crafting
              beautiful, responsive web experiences using React, Node.js, and modern design tools.
            </p>

            {/* Quick info tags */}
            <div className="hero__tags">
              <span className="hero__tag">🎓 BCA Graduate</span>
              <span className="hero__tag">🏫 Asian School of Business</span>
              <span className="hero__tag">📍 Fresher</span>
            </div>

            {/* CTA Buttons */}
            <div className="hero__cta-group">
              <Link to="/projects" className="btn-primary" id="view-projects-btn">
                View My Work
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-secondary" id="contact-hero-btn">
                Let's Connect
              </Link>
            </div>
          </div>

          {/* Right: Decorative avatar card */}
          <div className="hero__visual">
            {/* Real photo of Vareen — file: /public/my_pic-removebg-preview.png */}
            <div className="hero__avatar">
              <img
                src="/my_pic-removebg-preview.png"
                alt="Vareen Aggarwal"
                className="hero__avatar-photo"
                onError={(e) => {
                  // Fallback: show initials if image not found
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback initials (hidden when photo loads) */}
              <span className="hero__avatar-initials" style={{ display: "none" }}>VA</span>
            </div>

            {/* Floating skill chips around avatar */}
            <div className="hero__chip hero__chip--1">⚛️ React.js</div>
            <div className="hero__chip hero__chip--2">🟢 Node.js</div>
            <div className="hero__chip hero__chip--3">🖌️ Figma</div>
            <div className="hero__chip hero__chip--4">🌐 HTML/CSS</div>
          </div>
        </div>

        {/* Decorative background blob */}
        <div className="hero__blob hero__blob--1" aria-hidden="true" />
        <div className="hero__blob hero__blob--2" aria-hidden="true" />
      </section>

      {/* ── Stats Strip ───────────────────────────────────── */}
      <section className="stats fade-in">
        <div className="container stats__grid">
          <div className="stats__item">
            <span className="stats__number gradient-text">5+</span>
            <span className="stats__label">Projects Built</span>
          </div>
          <div className="stats__divider" />
          <div className="stats__item">
            <span className="stats__number gradient-text">12+</span>
            <span className="stats__label">Skills Mastered</span>
          </div>
          <div className="stats__divider" />
          <div className="stats__item">
            <span className="stats__number gradient-text">3</span>
            <span className="stats__label">Years of Study</span>
          </div>
          <div className="stats__divider" />
          <div className="stats__item">
            <span className="stats__number gradient-text">100%</span>
            <span className="stats__label">Dedication</span>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ──────────────────────────────── */}
      <section className="section home-projects">
        <div className="container">
          {/* Section header */}
          <div className="section-header fade-in">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A selection of my recent work. Each project is built with care and attention to detail.
            </p>
          </div>

          {/* Projects grid */}
          <div className="home-projects__grid fade-in">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Link to all projects */}
          <div className="home-projects__more fade-in">
            <Link to="/projects" className="btn-secondary" id="all-projects-btn">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="cta-banner fade-in">
        <div className="container cta-banner__inner">
          <div>
            <h2 className="cta-banner__title">Ready to bring your idea to life?</h2>
            <p className="cta-banner__sub">Let's collaborate and build something amazing together.</p>
          </div>
          <Link to="/contact" className="btn-primary cta-banner__btn" id="cta-banner-btn">
            Get In Touch ✨
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
