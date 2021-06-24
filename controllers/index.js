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
  getNewsById,
  getCatNews,
} = require("./News");

const {
  getComment,
  patchComment,
  postComment,
  deleteComment,
  getCommentByNews,
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
  getNewsById,
  getCatNews,
  getCommentByNews,
};
