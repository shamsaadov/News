const mongoose = require("mongoose");
const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    ref: "Categories",
    type: mongoose.Schema.Types.ObjectId,
  },
});
module.exports = mongoose.model("News", NewsSchema);
