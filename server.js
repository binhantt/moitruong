const express = require("express");
const app = express();
const path = require("path");

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

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Rose", price: 10 },
    { id: 2, name: "Tulip", price: 12 }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});