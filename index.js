const express = require("express");
const cors = require("cors");
const unprotectedRoute = require("./routes/unprotected.route");
// const { testDatabaseConnection } = require("./utils/testDbConnection");

const app = express();

//CORS policy for localhost:5173 (React app) to access this server (Express app)
// app.use(
//   cors({})
// );

//Parsing body to JSON
app.use(express.json());

const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(
  "/external-server",
  createProxyMiddleware({
    target: "https://kind-jade-jay-gown.cyclic.app",
    changeOrigin: true,
  })
);

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next()
})

//Testing routes
app.get("/test", (req, res) => {
  console.log(req.body)
  res.send("Test route");
});

//Routes for unprotected routes
app.use("/", unprotectedRoute);



//hello world
app.get("/", (req, res) => {
  res.send("Hello World! Hello Eperibodi");
});

//Start the server
app.listen(3000, () => {
  console.log("Tevo24 server listening on port: ",3000);
});

//Test database connection
// testDatabaseConnection();