const categories = require("../data/category.data");

exports.getCategories = (req, res) => {
  res.json(categories);
};

exports.getCategoryById = (req, res) => {
  const id = parseInt(req.params.id);

  const category = categories.find(c => c.id === id);

  if (!category) {
    return res.status(404).json({
      message: "Category not found"
    });
  }

  res.json(category);
};