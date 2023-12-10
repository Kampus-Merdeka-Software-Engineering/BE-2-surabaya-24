// controllers/postfeed.js
const { Feedback } = require("../models");

async function postfeed(req, res) {
  try {
    const newFeedback = await Feedback.create({
      feedbackId: req.body.feedbackId,
      feedbackName: req.body.feedbackName,
      feedbackEmail: req.body.feedbackEmail,
      feedbackComment: req.body.feedbackComment,
      feedbackImg: req.body.feedbackImg,
    });

    

    res.status(201).json({
      message: "Feedback submitted successfully",
      feedback: newFeedback,
    });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  postfeed,
};

// // controllers/postfeed.js
// const { Feedback } = require("../models");

// async function postfeed(req, res) {
//   try {
//     const{
//       feedbackId,
//       feedbackName,
//       feedbackEmail,
//       feedbackComment,
//       feedbackImg,
//     } = req.body;

//     if (!feedbackName || !feedbackComment) {
//       return res.status(400).json({ error: "Incomplete data" });
//     }

//     const newFeedback = await Feedback.create({
//       feedbackId,
//       feedbackName,
//       feedbackEmail,
//       feedbackComment,
//       feedbackImg,
//     });

//     console.log("New feedback inserted:", newFeedback);

//     res.status(201).json({
//       message: "Feedback submitted successfully",
//       feedback: newFeedback,
//     });
//   } catch (error) {
//     console.error("Error submitting feedback:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// module.exports = {
//   postfeed,
// };
