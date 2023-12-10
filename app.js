// app.js
const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser"); // if needed

const app = express();

// Middleware
app.use(bodyParser.json()); // if you're using JSON in your requests

// Routes
app.use("/api", routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
