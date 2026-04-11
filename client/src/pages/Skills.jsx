// ============================================================
// Skills Page (Skills.jsx)
// ------------------------------------------------------------
// Displays categorized skills with:
// - Animated progress bars showing proficiency level
// - Category filter tabs (All, Frontend, Backend, Design)
// - Skills data from data/skills.js (easily editable)
// ============================================================

import { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/Skills.css";

// Scroll reveal
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

function Skills() {
  useScrollReveal();

  const [skills, setSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch skills from database
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await api.get("/data/skills");
        setSkills(res.data);
      } catch (err) {
        console.error("Error fetching skills:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  // Unique categories derived from skills data
  const ALL_CATEGORIES = ["All", ...new Set(skills.map((s) => s.category))];

  // Filter skills based on selected category
  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <main className="skills-page">
      {/* ── Page Header ─────────────────────────────────── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="section-tag">Expertise</span>
          <h1 className="section-title">My Skills</h1>
          <p className="section-subtitle">
            Technologies and tools I've worked with during my studies and personal projects.
          </p>
        </div>
      </section>

      {/* ── Skills Section ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          {/* Category filter tabs */}
          <div className="skills__tabs fade-in" role="tablist">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`skills__tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
                id={`tab-${cat.toLowerCase().replace(/\s/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="skills__grid fade-in">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools & Tech Banner ─────────────────────────── */}
      <section className="section skills__banner-section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-tag">Also Familiar With</span>
            <h2 className="section-title">Other Tools</h2>
          </div>
          <div className="skills__tools fade-in">
            {["VS Code", "Chrome DevTools", "Postman", "npm", "Canva", "Netlify", "Vercel", "GitHub Pages"].map(
              (tool) => (
                <span key={tool} className="skills__tool-pill">
                  {tool}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// ── Skill Card Sub-component ──────────────────────────────
// Displays a single skill with icon, name, level, and progress bar
function SkillCard({ name, icon, level, category }) {
  return (
    <div className="skill-card">
      {/* Icon + name row */}
      <div className="skill-card__header">
        <span className="skill-card__icon">{icon}</span>
        <div>
          <h3 className="skill-card__name">{name}</h3>
          <span className="skill-card__category">{category}</span>
        </div>
        {/* Proficiency percentage */}
        <span className="skill-card__level">{level}%</span>
      </div>

      {/* Progress bar */}
      <div className="skill-card__bar-bg">
        <div
          className="skill-card__bar-fill"
          style={{ width: `${level}%` }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

export default Skills;
