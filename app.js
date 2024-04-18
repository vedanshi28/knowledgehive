const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mongoDB = require("mongoose");
const CORS_URL = `http://localhost:3000`;
const mongoURL = process.env.MONGODB_URL;

app.use(
  cors({
    origin: CORS_URL,
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT");
  next();
});

mongoDB.connect(mongoURL).then(function () {
  app.get("/", (req, res) => {
    res.send("API Works");
  });
  app.use(express.json());
  app.use("/api/", require("./routes/register"));
  app.use("/api/post", require("./routes/post"));
  app.use("/api/user", require("./routes/user"));
});

app.listen(PORT,'0.0.0.0', (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});