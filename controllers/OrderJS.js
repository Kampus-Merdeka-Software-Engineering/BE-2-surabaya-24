// controllers/feedback.js
const express = require("express");
const router = express.Router();
const { Order} = require("../models");

router.post("/submitOrder", async (req, res) => {
  try {
    const { NamaProduct, NamaUser, Email, JmlOrder } =
      req.body;

    // Validate required fields
    if (!NamaProduct || !Email) {
      return res.status(400).json({ error: "Incomplete data" });
    }

    const neworder = await Order.create({
      NamaProduct,
      NamaUser,
      Email,
      JmlOrder,
    });

    res.status(201).json({
      message: "order submitted successfully",
      order: neworder,
    });
  } catch (error) {
    console.error("Error submitting order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


