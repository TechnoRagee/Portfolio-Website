// ============================================================
// Skill Model (models/Skill.js)
// ------------------------------------------------------------
// Defines the schema for technology skills in MongoDB.
// ============================================================

const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  icon: {
    type: String, // Emoji or icon class name
    required: true,
  },
  level: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  category: {
    type: String,
    required: true,
    enum: ["Frontend", "Backend", "Design & Tools"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Skill", skillSchema);
