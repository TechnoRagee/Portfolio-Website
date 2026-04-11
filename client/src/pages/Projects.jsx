// ============================================================
// Projects Page (Projects.jsx)
// ------------------------------------------------------------
// Full projects listing with:
// - Category filter tabs
// - Grid of ProjectCard components
// - All project data from API
// ============================================================

import { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/Projects.css";
import ProjectCard from "../components/ProjectCard";

// Scroll reveal
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Projects() {
  useScrollReveal();

  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch projects from database
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/data/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Unique categories derived from projects data
  const ALL_CATEGORIES = ["All", ...new Set(projects.map((p) => p.category))];

  // Filter projects based on selected category
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="projects-page">
      {/* ── Page Header ─────────────────────────────────── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="section-tag">Work</span>
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            Here are the projects I've built during my learning journey. Each one taught me something new.
          </p>
        </div>
      </section>

      {/* ── Projects Grid ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          {/* Filter tabs */}
          <div className="projects__filters fade-in">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`projects__filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
                id={`filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
                aria-pressed={activeFilter === cat}
              >
                {cat}
                {/* Show count badge */}
                <span className="projects__filter-count">
                  {cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Projects count info */}
          <p className="projects__info fade-in">
            Showing <strong>{filtered.length}</strong> of <strong>{projects.length}</strong> projects
          </p>

          {/* Cards grid */}
          <div className="projects__grid fade-in">
            {filtered.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Empty state — shown if no projects match filter */}
          {filtered.length === 0 && (
            <div className="projects__empty">
              <span>🔍</span>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Add More Note ───────────────────────────────── */}
      <section className="projects__add-note fade-in">
        <div className="container">
          <div className="projects__add-card">
            <span className="projects__add-icon">➕</span>
            <div>
              <h3>More Coming Soon</h3>
              <p>I'm constantly building new things. Check back for updates, or find me on GitHub!</p>
            </div>
            <a
              href="https://github.com/vareenaggarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="github-profile-btn"
            >
              GitHub Profile →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
