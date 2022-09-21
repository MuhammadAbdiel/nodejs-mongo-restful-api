const Category = require("../models/Category");

async function getAllCategories(req, res) {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.json({ message: error });
  }
}

async function storeCategory(req, res) {
  const category = new Category({
    name: req.body.name,
  });

  // * Async Await
  try {
    const savedCategory = await category.save();
    res.json(savedCategory);
  } catch (e) {
    res.json({ message: e });
  }
}

async function getCategoryById(req, res) {
  try {
    const categoryById = await Category.findById(req.params.categoryId);
    res.json(categoryById);
  } catch (error) {
    res.json({ message: error });
  }
}

async function deleteCategoryById(req, res) {
  try {
    const deleteCategoryById = await Category.deleteOne({
      _id: req.params.categoryId,
    });
    res.json(deleteCategoryById);
  } catch (error) {
    res.json({ message: error });
  }
}

async function updateCategoryById(req, res) {
  try {
    const updateCategoryById = await Category.updateOne(
      { _id: req.params.categoryId },
      {
        name: req.body.name,
      }
    );
    res.json(updateCategoryById);
  } catch (error) {
    res.json({ message: error });
  }
}

module.exports = {
  getAllCategories,
  storeCategory,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
};
