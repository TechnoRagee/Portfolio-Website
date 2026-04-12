// ============================================================
// Server Entry Point (server.js)
// ------------------------------------------------------------
// Sets up Express app, connects to MongoDB, and registers routes.
// Run with: node server.js
// ============================================================

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");

// Force Google DNS to bypass local ISP blocks/failures for MongoDB Atlas
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Load environment variables from .env file
dotenv.config();

// ── App Initialization ──────────────────────────────────────
const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ───────────────────────────────────────────────
// Allow cross-origin requests (CORS)
app.use(cors());

// Parse incoming JSON request bodies
app.use(express.json());

// ── Routes ───────────────────────────────────────────────────
// All contact form routes
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// Projects and Skills routes
const dataRoutes = require("./routes/data");
app.use("/api/data", dataRoutes);

// Health check route — visit http://localhost:5000/ to verify server is running
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running ✅" });
});

// ── MongoDB Connection ────────────────────────────────────────
// Connect to MongoDB using the URI from .env file
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    // Start the server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // Exit if DB connection fails
  });
