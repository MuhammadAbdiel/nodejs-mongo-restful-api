const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    name: {
      type: String,
      required: true,
    },
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const PostModel = mongoose.model("Posts", PostSchema);

module.exports = PostModel;
