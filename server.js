const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Rose", price: 10 },
    { id: 2, name: "Tulip", price: 12 }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});