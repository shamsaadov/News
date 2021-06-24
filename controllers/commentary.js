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
    res.json("Комментарий к новости опубликован");
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
  // попытка номер 1
  // // try {
  // //   const comment = await Commentary.find({
  // //     newsId: req.params.id
  // //   }).lean()
  // //   console.log(comment)
  // //   res.render("news", {
  // //     comment: comment ,
  // //   })
  // // }catch (e) {
  // //   console.log(e.message)
  // // }

  //попытка номер 2
  // try {
  //   console.log(req.params.id)
  //   const comment = await Commentary.aggregate([
  //     {
  //       $match : { newsId : req.params.id },
  //     }
  //     // {
  //     //   $set: {
  //     //     comment: 123123,
  //     //   },
  //     // },
  //   ]);
  //
  //   res.render("news");
  //   console.log(comment);

  //попытка номер 3

  // try {
  //   const comment = await Commentary.find({
  //     news: req.params.id,
  //   }).lean();
  //   const post = await News.findById(req.params.id).lean();
  //   const puzzle = { post: post, comment: comment };
  //   res.render("post", puzzle);
  // } catch (e) {
  //   console.log(e.message);
  // }

  //попытка номер 4

  try {
    const news = await News.aggregate([
      {
        $lookup: {
          from: 'comments',
          localField: '_id',
          fo
        }
      }
    ])
  }catch (e) {
    console.log(e.message)
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
