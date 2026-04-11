// ============================================================
// Contact Model (models/Contact.js)
// ------------------------------------------------------------
// Defines the MongoDB schema for storing contact form data.
// Each submission saves: name, email, message, and timestamp.
// ============================================================

const mongoose = require("mongoose");

// Define the schema for a contact form submission
const contactSchema = new mongoose.Schema(
  {
    // Sender's name from the form
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },

    // Sender's email address
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    // The message body from the form
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [2000, "Message cannot exceed 2000 characters"],
    },
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Export the model so routes can use it
module.exports = mongoose.model("Contact", contactSchema);
