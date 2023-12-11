// controllers/getFeedback.js
const { Feedback } = require("../models");

async function getFeedback(req, res) {
  const feedbacks = await Feedback.findAll();
  const response = {
    code: 200,
    status: "Ok",
    data: feedbacks,
  };
  return res.status(response.code).json(response);
}

module.exports = {
  getFeedback,
};

