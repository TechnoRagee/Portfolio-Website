// ============================================================
// Data Routes (routes/data.js)
// ------------------------------------------------------------
// API endpoints to fetch projects and skills from MongoDB.
// Also includes a seed route to populate initial data.
// ============================================================

const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const Skill = require("../models/Skill");

// ────────────────────────────────────────────────────────────
// GET /api/data/projects
// Returns all projects from the database
// ────────────────────────────────────────────────────────────
router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error("Fetch projects error:", error.message);
    res.status(500).json({ error: "Server error fetching projects." });
  }
});

// ────────────────────────────────────────────────────────────
// GET /api/data/skills
// Returns all skills from the database
// ────────────────────────────────────────────────────────────
router.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.find().sort({ category: 1, name: 1 });
    res.json(skills);
  } catch (error) {
    console.error("Fetch skills error:", error.message);
    res.status(500).json({ error: "Server error fetching skills." });
  }
});

// ────────────────────────────────────────────────────────────
// POST /api/data/seed
// Populate database with initial items from JSON data files
// ⚠️ WARNING: Use this only once or it will duplicate data!
// ────────────────────────────────────────────────────────────
router.post("/seed", async (req, res) => {
  try {
    const { projectsData, skillsData } = req.body;

    if (!projectsData || !skillsData) {
      return res.status(400).json({ error: "Missing data payload." });
    }

    // Clear existing data (optional, but prevents duplication during testing)
    await Project.deleteMany({});
    await Skill.deleteMany({});

    // Bulk insert the data
    await Project.insertMany(projectsData);
    await Skill.insertMany(skillsData);

    res.status(201).json({ 
      message: "Database seeded successfully! 🌱",
      projectCount: projectsData.length,
      skillCount: skillsData.length
    });
  } catch (error) {
    console.error("Seeding error:", error.message);
    res.status(500).json({ error: "Database seeding failed." });
  }
});

module.exports = router;
