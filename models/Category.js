const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const CategoryModel = mongoose.model("Categories", CategorySchema);

module.exports = CategoryModel;
