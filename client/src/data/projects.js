// ============================================================
// Data File: projects.js
// ------------------------------------------------------------
// Edit this file to add/remove/update your portfolio projects.
// Each project has: id, title, description, tech stack, links.
// ============================================================

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce web application with product listing, cart functionality, and checkout flow. Built with a clean UI for seamless shopping experience.",
    tech: ["React", "Node.js", "MongoDB", "CSS"],
    github: "https://github.com/vareenaggarwal",
    live: "#",
    category: "Full Stack",
    // Set to true to mark as featured on home page
    featured: true,
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "A productivity app to manage daily tasks with drag-and-drop support, priority labels, and real-time updates. Designed with a minimalist light theme.",
    tech: ["React", "CSS", "LocalStorage"],
    github: "https://github.com/vareenaggarwal",
    live: "#",
    category: "Frontend",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "This personal portfolio website showcasing my skills, projects, and contact information. Built with React.js and Node.js with MongoDB backend.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/vareenaggarwal",
    live: "#",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 4,
    title: "Restaurant Landing Page",
    description:
      "A beautiful and responsive restaurant landing page with menu showcase, reservation section, and contact info. Designed using Figma and implemented in HTML/CSS.",
    tech: ["HTML", "CSS", "Figma"],
    github: "https://github.com/vareenaggarwal",
    live: "#",
    category: "Frontend",
    featured: false,
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that fetches real-time weather data using OpenWeatherMap API. Displays temperature, humidity, wind speed with a clean card-based UI.",
    tech: ["React", "API", "CSS"],
    github: "https://github.com/vareenaggarwal",
    live: "#",
    category: "Frontend",
    featured: false,
  },
];

export default projects;
