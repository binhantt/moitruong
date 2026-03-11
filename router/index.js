const express = require("express");
const router = express.Router();

const productController = require("../controllers/product");
const categoryController = require("../controllers/category");
router.get("/products", productController.getProducts);

router.get("/products/:id", productController.getProductById);
// category API
router.get("/categories", categoryController.getCategories);
router.get("/categories/:id", categoryController.getCategoryById);
module.exports = router;