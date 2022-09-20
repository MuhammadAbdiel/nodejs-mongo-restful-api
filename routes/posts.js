const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  storePost,
  getPostById,
  deletePostById,
  updatePostById,
} = require("../controllers/PostController");

// ? Get All Posts
router.get("/", async (req, res) => {
  await getAllPosts(req, res);
});

// ? Store Post
router.post("/", async (req, res) => {
  await storePost(req, res);
});

// ? Get Post by ID
router.get("/:postId", async (req, res) => {
  await getPostById(req, res);
});

// ? Delete Post by ID
router.delete("/:postId", async (req, res) => {
  await deletePostById(req, res);
});

// ? Update Post by ID
router.put("/:postId", async (req, res) => {
  await updatePostById(req, res);
});

module.exports = router;
