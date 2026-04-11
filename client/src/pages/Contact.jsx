// ============================================================
// Contact Page (Contact.jsx)
// ------------------------------------------------------------
// Contact form that:
// - Collects name, email, message
// - Sends data to Node.js backend via POST /api/contact
// - Shows success/error feedback messages
// - Also shows contact info cards (email, location, etc.)
// ============================================================

import { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/Contact.css";

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

// Contact info items — update with your real details
const CONTACT_INFO = [
  {
    icon: "📧",
    label: "Email",
    value: "vareenaggarwal@gmail.com",
    link: "mailto:vareenaggarwal@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/vareenaggarwal",
    link: "https://linkedin.com/in/vareenaggarwal",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/vareenaggarwal",
    link: "https://github.com/vareenaggarwal",
  },
  {
    icon: "📍",
    label: "Location",
    value: "India",
    link: null,
  },
];

function Contact() {
  useScrollReveal();

  // Form field state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // UI state: loading, success, error
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Update form state when user types in a field
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear previous error when user starts typing again
    if (error) setError("");
  };

  // Submit form: POST to backend API
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Send form data to Node.js backend
      const response = await api.post("/contact", formData);

      // Show success and reset form
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      {/* ── Page Header ─────────────────────────────────── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="section-tag">Let's Talk</span>
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Have a project idea, job opportunity, or just want to say hi? I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* ── Contact Section ──────────────────────────────── */}
      <section className="section">
        <div className="container contact__grid">
          {/* Left: Contact info cards */}
          <div className="contact__info-col fade-in">
            <h2 className="contact__info-heading">Let's connect!</h2>
            <p className="contact__info-text">
              Fill out the form and I'll get back to you as soon as possible. You can also reach
              me directly through any of the channels below.
            </p>

            {/* Info cards */}
            <div className="contact__cards">
              {CONTACT_INFO.map((item) => (
                <div className="contact__info-card" key={item.label}>
                  <span className="contact__info-icon">{item.icon}</span>
                  <div>
                    <p className="contact__info-label">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__info-value link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact__info-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability note */}
            <div className="contact__avail">
              <span className="contact__avail-dot" />
              <span>Currently open to freelance & full-time opportunities</span>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="contact__form-col fade-in">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              id="contact-form"
              aria-label="Contact form"
            >
              {/* Success banner */}
              {success && (
                <div className="contact-form__alert contact-form__alert--success" role="alert">
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}

              {/* Error banner */}
              {error && (
                <div className="contact-form__alert contact-form__alert--error" role="alert">
                  ❌ {error}
                </div>
              )}

              {/* Name field */}
              <div className="contact-form__group">
                <label htmlFor="name" className="contact-form__label">
                  Your Name <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-form__input"
                  placeholder="e.g. Ajay Kumar"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              {/* Email field */}
              <div className="contact-form__group">
                <label htmlFor="email" className="contact-form__label">
                  Email Address <span aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-form__input"
                  placeholder="e.g. ajay@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              {/* Message field */}
              <div className="contact-form__group">
                <label htmlFor="message" className="contact-form__label">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-form__textarea"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn-primary contact-form__submit"
                id="submit-contact-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="contact-form__spinner" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message ✉️
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
