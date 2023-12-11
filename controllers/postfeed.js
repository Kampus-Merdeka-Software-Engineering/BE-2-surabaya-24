const { Feedback } = require("../models");

async function postfeed(req, res) {
  try {
    const { feedbackName, feedbackEmail, feedbackComment, feedbackImg } =
      req.body;
    console.log(req.body);

    const feedback = await Feedback.create({
      feedbackName,
      feedbackEmail,
      feedbackComment,
      feedbackImg,
    });

    const response = {
      code: 201,
      status: "Created",
      data: feedback,
    };

    return res.status(response.code).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      status: "Internal Server Error",
      message: "An error occurred while processing your request",
    });
  }
}

module.exports = {
  postfeed,
};