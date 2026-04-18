// ============================================================
// ProjectCard Component (ProjectCard.jsx)
// ------------------------------------------------------------
// Reusable card for displaying a single project.
// Props: title, description, tech (array), github, live, category
// ============================================================

import "../styles/ProjectCard.css";

function ProjectCard({ title, description, tech, github, live, category }) {
  return (
    // Card container — hover lifts the card slightly
    <article className="project-card">
      {/* Category badge — e.g., "Full Stack", "Frontend" */}
      <span className="project-card__category">{category}</span>

      {/* Project title */}
      <h3 className="project-card__title">{title}</h3>

      {/* Short description */}
      <p className="project-card__desc">{description}</p>

      {/* Tech stack pills */}
      <div className="project-card__tech">
        {tech.map((t) => (
          <span key={t} className="project-card__tech-pill">
            {t}
          </span>
        ))}
      </div>

      {/* Action buttons: GitHub source & Live demo */}
      <div className="project-card__actions">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__btn project-card__btn--outline"
          aria-label={`View ${title} source code on GitHub`}
        >
          {/* GitHub icon */}
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          Source
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
