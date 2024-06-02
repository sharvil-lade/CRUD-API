const express = require("express");
const mongoose = require("mongoose");
const Product = require("./server/models/product.model.js");
const productRoute = require("./server/routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Node API Server Running");
});

mongoose
  .connect("mongodb://0.0.0.0:27017/crud-api")
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
