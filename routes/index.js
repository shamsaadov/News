const { Router } = require("express");
const router = Router();
const category = require("./category");
const news = require("./news");
const comment = require("./comments");
router.use(category);
router.use(news);
router.use(comment);

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/category", (req, res) => {
  res.render("category");
});
router.get("/categories/:id/news", (req, res) => {
  res.render("news");
});
router.get("/news/:id/comment", (req, res) => {
  res.render("news");
});
module.exports = router;
