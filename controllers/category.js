const path = require("path");

function getCategoriesData() {
  const dataPath = path.join(__dirname, "..", "data", "category.data.js");
  delete require.cache[require.resolve(dataPath)];
  return require(dataPath);
}

exports.getCategories = (req, res) => {
  const categories = getCategoriesData();
  res.json(categories);
};

exports.getCategoryById = (req, res) => {
  const categories = getCategoriesData();
  const id = parseInt(req.params.id);

  const category = categories.find(c => c.id === id);

  if (!category) {
    return res.status(404).json({
      message: "Category not found"
    });
  }

  res.json(category);
};