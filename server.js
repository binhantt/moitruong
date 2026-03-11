const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

const router = require("./router/index");

// enable cors
app.use(cors());

app.use(express.static("public"));

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});