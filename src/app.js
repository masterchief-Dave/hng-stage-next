const express = require("express");
const cors = require("cors");
const classifyNumber = require("./lib/classifyNumber");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message:
      "Use /api/classify-number?number=<your_number> to classify a number.",
  });
});
app.get("/api/classify-number", classifyNumber);

module.exports = app;
