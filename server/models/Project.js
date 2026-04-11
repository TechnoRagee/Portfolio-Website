// ============================================================
// Project Model (models/Project.js)
// ------------------------------------------------------------
// Defines the schema for portfolio projects in MongoDB.
// ============================================================

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  tech: [{
    type: String,
  }],
  github: {
    type: String,
    default: "#",
  },
  live: {
    type: String,
    default: "#",
  },
  category: {
    type: String,
    required: true,
    enum: ["Frontend", "Backend", "Full Stack", "Mobile", "UI/UX"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
