// ============================================================
// Data File: projects.js
// ------------------------------------------------------------
// Edit this file to add/remove/update your portfolio projects.
// Each project has: id, title, description, tech stack, links.
// ============================================================

const projects = [
  {
    id: 1,
    title: "BookStore APP",
    description:
      "Developed a fully responsive Online Bookstore web application using React.js, Node.js, and MongoDB. Implemented features like product listing, cart management, and secure checkout. Designed a clean UI for a smooth and user-friendly shopping experience.",
    tech: ["React", "MongoDB", "CSS"],
    github: "https://github.com/TechnoRagee/BookStore-App",
    category: "Frontend",
    // Set to true to mark as featured on home page
    featured: true,
  },
  {
    id: 2,
    title: "Digital Bazaar",
    description:
      "A fully responsive e-commerce web application with product listing, cart functionality, and checkout flow. Built with a clean UI for seamless shopping experience.",
    tech: ["React", "CSS", "LocalStorage"],
    github: "https://github.com/TechnoRagee/Digital-Bazaar",
    category: "Frontend",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "This personal portfolio website showcasing my skills, projects, and contact information. Built with React.js and Node.js with MongoDB backend.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/TechnoRagee/Portfolio-Website",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 4,
    title: "Travelling Web Portal",
    description:
      "Developed a fully responsive Travel Booking Web Portal using React.js, Node.js, and MongoDB. Enabled users to search and book flights, hotels, and cabs with a seamless UI. Implemented authentication, real-time search, and booking management features.",
    tech: ["HTML", "CSS", "Figma"],
    github: "https://github.com/TechnoRagee/vinatgetripmart",
    category: "Frontend",
    featured: false,
  },
];

export default projects;
