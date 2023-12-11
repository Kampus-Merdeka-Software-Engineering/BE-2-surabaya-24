// controllers/feedback.js
const express = require("express");
const router = express.Router();
const { Feedback } = require("../models");

router.post("/submitFeedback", async (req, res) => {
  try {
    const {
      feedbackName,
      feedbackEmail,
      feedbackComment,
      feedbackImg,
    } = req.body;

    // Validate required fields
    if (!feedbackName || !feedbackComment) {
      return res.status(400).json({ error: "Incomplete data" });
    }

    const newFeedback = await Feedback.create({
      feedbackName,
      feedbackEmail,
      feedbackComment,
      feedbackImg,
    });

    res.status(201).json({
      message: "Feedback submitted successfully",
      feedback: newFeedback,
    });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/all-feedback", async (req, res) => {
  try {
    const allFeedback = await Feedback.findAll();
    res.status(200).json(allFeedback);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
