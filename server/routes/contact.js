// ============================================================
// Contact Routes (routes/contact.js)
// ------------------------------------------------------------
// POST /api/contact  → Save message to MongoDB + send email
// GET  /api/contact  → Retrieve all messages (optional)
// ============================================================

const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

// ────────────────────────────────────────────────────────────
// POST /api/contact
// Saves the contact form submission to MongoDB
// and sends an email notification to you.
// ────────────────────────────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation — make sure no field is empty
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save the contact message to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // ── Send Email Notification ──────────────────────────────
    // Creates a transporter using Gmail SMTP settings from .env
    // If email credentials are not set, skip silently.
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email content that you'll receive in your inbox
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER,
        subject: `📩 New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #6C63FF;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="background: #f5f5f5; padding: 12px; border-radius: 6px;">${message}</p>
            <hr />
            <small style="color: #999;">Sent from your Portfolio Website contact form</small>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    // Respond with success
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact route error:", error.message);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// ────────────────────────────────────────────────────────────
// GET /api/contact
// Returns all contact submissions (optional — for admin use)
// ────────────────────────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error("Fetch contacts error:", error.message);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
