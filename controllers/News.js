const News = require("../models/News");
const Comment = require("../models/Comment");
const getNews = async (req, res) => {
  const news = await News.find();
  res.render("news", {
    newsItem: news,
  });
};
const getNewsById = async (req, res) => {
  try {
    const commentList = await Comment.find({
      newsId: req.params.id,
    }).lean();
    console.log(commentList);
    const post = await News.findById(req.params.id).lean();

    res.render("single-news", {
      post: post,
      comment: commentList
    });
  } catch (e) {
    console.log(e.message)
  }
};
// const news = await News.findById(req.params.id).lean();
//   res.render("news", {
//     newsItem: news,
//   });
const getCatNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.render("news", {
      news,
    });
  } catch (e) {
    console.log(e.message);
  }
};
const postNews = async (req, res) => {
  try {
    const news = await new News({
      title: req.body.title,
      text: req.body.text,
      author: req.body.author,
      category: req.params.id,
    });
    news.save();
    res.json("Новость добавлена к категории ");
  } catch (e) {
    console.log(e.message);
  }
};
const patchNews = async (req, res) => {
  try {
    const news = await News.findOne(req.params.id, {
      $set: {
        ...req.body,
      },
    });
    news.save();
    res.json("Новость изменена");
  } catch (e) {
    console.log(e.message);
  }
};
const deleteNews = async (req, res) => {
  const news = await News.findByIdAndDelete(req.params.id);
  news.save();
  res.json("Новость удалена успешно");
};

module.exports = {
  getNews,
  postNews,
  patchNews,
  deleteNews,
  getNewsById,
  getCatNews,
};
