const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  storeCategory,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
} = require("../controllers/CategoryController");

// ? Get All Categories
router.get("/", async (req, res) => {
  await getAllCategories(req, res);
});

// ? Store Category
router.post("/", async (req, res) => {
  await storeCategory(req, res);
});

// ? Get Category by ID
router.get("/:categoryId", async (req, res) => {
  await getCategoryById(req, res);
});

// ? Delete Category by ID
router.delete("/:categoryId", async (req, res) => {
  await deleteCategoryById(req, res);
});

// ? Update Category by ID
router.put("/:categoryId", async (req, res) => {
  await updateCategoryById(req, res);
});

module.exports = router;
