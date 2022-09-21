const Post = require("../models/Post");
const Category = require("../models/Category");

async function getAllPosts(req, res) {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
}

async function storePost(req, res) {
  const post = new Post({
    title: req.body.title,
    category: {
      name: req.body.category.name,
    },
    author: req.body.author,
    description: req.body.description,
  });

  // * Async Await
  try {
    const categoryName = await Category.findOne({
      name: req.body.category.name,
    });
    if (categoryName) {
      const savedPost = await post.save();
      res.json(savedPost);
    } else {
      res.json({ message: "Category name not found!" });
    }
  } catch (e) {
    res.json({ message: e });
  }

  // * Promise
  // post
  //   .save()
  //   .then((data) => res.json(data))
  //   .catch((err) => res.json({ message: err }));
}

async function getPostById(req, res) {
  try {
    const postById = await Post.findById(req.params.postId);
    res.json(postById);
  } catch (error) {
    res.json({ message: error });
  }
}

async function deletePostById(req, res) {
  try {
    const deletePostById = await Post.deleteOne({ _id: req.params.postId });
    res.json(deletePostById);
  } catch (error) {
    res.json({ message: error });
  }
}

async function updatePostById(req, res) {
  try {
    const categoryName = await Category.findOne({
      name: req.body.category.name,
    });
    if (categoryName) {
      const updatePostById = await Post.updateOne(
        { _id: req.params.postId },
        {
          title: req.body.title,
          category: {
            name: req.body.category.name,
          },
          author: req.body.author,
          description: req.body.description,
        }
      );
      res.json(updatePostById);
    } else {
      res.json({ message: "Category name not found!" });
    }
  } catch (error) {
    res.json({ message: error });
  }
}

module.exports = {
  getAllPosts,
  storePost,
  getPostById,
  deletePostById,
  updatePostById,
};
