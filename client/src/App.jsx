// ============================================================
// App.jsx — Root Application Component
// ------------------------------------------------------------
// Sets up React Router with 5 routes.
// Wraps all pages with the Navbar and Footer.
// Scroll to top on every route change.
// ============================================================

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// ── Shared Layout Components ─────────────────────────────
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ── Pages ────────────────────────────────────────────────
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// ── Global CSS ───────────────────────────────────────────
import "./styles/index.css";

// ScrollToTop: scrolls window to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      {/* Scroll to top on every navigation */}
      <ScrollToTop />

      {/* Fixed navigation bar — always visible */}
      <Navbar />

      {/* Page content wrapper — all routes render here */}
      <div className="app-content">
        <Routes>
          {/* Home page — "/" */}
          <Route path="/" element={<Home />} />

          {/* About page — "/about" */}
          <Route path="/about" element={<About />} />

          {/* Skills page — "/skills" */}
          <Route path="/skills" element={<Skills />} />

          {/* Projects page — "/projects" */}
          <Route path="/projects" element={<Projects />} />

          {/* Contact page — "/contact" */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 fallback — redirects unknown routes to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* Footer — always at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;
