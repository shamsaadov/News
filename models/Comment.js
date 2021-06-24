const mongoose = require("mongoose");
const CommentSchema = mongoose.Schema({
  authorName: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  newsId: {
    ref: "News",
    type: mongoose.Schema.Types.ObjectId,
  },
});
module.exports = mongoose.model("Commentary", CommentSchema);
