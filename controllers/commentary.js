const Commentary = require("../models/Comment");
const News = require("../models/News");

const getComment = async (req, res) => {
  const comment = await Commentary.find();
  res.render("home", {
    commentItem: comment,
  });
};
const postComment = async (req, res) => {
  try {
    const comment = await new Commentary({
      authorName: req.body.authorName,
      text: req.body.text,
      newsId: req.params.id,
    });
    comment.save();
    res.redirect(`/news/${req.params.id}`)
  } catch (e) {
    console.log(e.message);
  }
};
const patchComment = async (req, res) => {
  try {
    const comment = await Commentary.findOne(req.params.id, {
      $set: {
        ...req.body,
      },
    });
    comment.save();
    res.json("Комментарий изменен");
  } catch (e) {
    console.log(e.message);
  }
};
const getCommentByNews = async (req, res) => {
  try {
    const comment = await Commentary.find({
      news: req.params.id,
    }).lean();
    const post = await News.findById(req.params.id).lean();
    const puzzle = { post: post, comment: comment };
    res.render("post", puzzle);
  } catch (e) {
    console.log(e.message);
  }
};

const deleteComment = async (req, res) => {
  const comment = await Commentary.findByIdAndDelete(req.params.id);
  comment.save();
  res.json("Комментарий удален!");
};
module.exports = {
  getComment,
  patchComment,
  postComment,
  deleteComment,
  getCommentByNews,
};
