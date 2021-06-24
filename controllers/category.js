const Category = require("../models/Categories");
const News = require("../models/News");
const getCategory = async (req, res) => {
  const category = await Category.find().lean();
  res.render("category", {
    categoryItem: category,
  });
};

const postCategory = async (req, res) => {
  try {
    const category = await new Category({
      name: req.body.name,
    });
    category.save();
    res.json("Категория добавлена");
  } catch (e) {
    console.log(e.message);
  }
};
const patchCategory = async (req, res) => {
  try {
    const category = await Category.updateOne(req.params.id, {
      $set: {
        ...req.body,
      },
    });
    category.save();
    res.json("Категория успешно изменена");
  } catch (e) {
    console.log(e.message);
  }
};
const deleteCategory = async (req, res) => {
  try {
    const deleteCat = await Categories.findById(req.params.id);
    deleteCat.delete();
    res.json("Категория удалена!");
  } catch (e) {
    console.log(e.message);
  }
};
const getNewsByCategory = async (req, res) => {
  try {
    const newsByCat = await News.find({
      category: req.params.id,
    }).lean();
    res.render("news", {
      news: newsByCat,
    });
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = {
  getCategory,
  patchCategory,
  postCategory,
  deleteCategory,
  getNewsByCategory,
};
