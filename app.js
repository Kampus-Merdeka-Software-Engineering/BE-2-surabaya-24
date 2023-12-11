const express = require("express");
const bodyParser = require("body-parser");
const feedbackRoute = require("./routes/feedbackRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/feedback", feedbackRoute); // Use a specific path for your feedback routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
