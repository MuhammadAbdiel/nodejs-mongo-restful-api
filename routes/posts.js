const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

// ? Get All Posts
router.get("/", async (req, res) => {
  await PostController.getAllPosts(req, res);
});

// ? Store Post
router.post("/", async (req, res) => {
  await PostController.storePost(req, res);
});

// ? Get Post by ID
router.get("/:postId", async (req, res) => {
  await PostController.getPostById(req, res);
});

// ? Delete Post by ID
router.delete("/:postId", async (req, res) => {
  await PostController.deletePostById(req, res);
});

// ? Update Post by ID
router.put("/:postId", async (req, res) => {
  await PostController.updatePostById(req, res);
});

module.exports = router;
