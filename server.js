const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

const router = require("./router/index");

// enable cors
app.use(cors());

app.use(express.static("public"));
app.use(express.static("view"));

// Cho phép truy cập API từ bất kỳ origin nào (Live Server, file://...)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "index.html"));
});

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});