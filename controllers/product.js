const path = require("path");

function getProductsData() {
  const dataPath = path.join(__dirname, "..", "data", "product.data.js");
  delete require.cache[require.resolve(dataPath)];
  return require(dataPath);
}

exports.getProducts = (req, res) => {
  const products = getProductsData();
  res.json(products);
};

exports.getProductById = (req, res) => {
  const products = getProductsData();
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
};