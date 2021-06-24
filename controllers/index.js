const {
  getCategory,
  patchCategory,
  postCategory,
  deleteCategory,
  getNewsByCategory,
} = require("./category");

const {
  getNews,
  postNews,
  patchNews,
  deleteNews,
  getNewsId,
  getCatNews,
} = require("./News");

const {
  getComment,
  patchComment,
  postComment,
  deleteComment,
  getCommentByNews
} = require("./commentary");

module.exports = {
  getCategory,
  patchCategory,
  postCategory,
  deleteCategory,
  getNews,
  postNews,
  patchNews,
  deleteNews,
  getComment,
  patchComment,
  postComment,
  deleteComment,
  getNewsByCategory,
  getNewsId,
  getCatNews,
  getCommentByNews
};
