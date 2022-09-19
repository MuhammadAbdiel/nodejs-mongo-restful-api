const Post = require("../models/Post");

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
    author: req.body.author,
    description: req.body.description,
  });

  // * Async Await
  try {
    const savedPost = await post.save();
    res.json(savedPost);
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
    const updatePostById = await Post.updateOne(
      { _id: req.params.postId },
      {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
      }
    );
    res.json(updatePostById);
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
