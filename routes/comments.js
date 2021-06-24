const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/index");

router.get("/comment", controllers.getComment);
router.get('/news/:id/comment', controllers.getCommentByNews)
router.post("/comment/:id", controllers.postComment);
router.patch("/comment/:id", controllers.patchComment);
router.delete("/comment/:id", controllers.deleteComment);
module.exports = router;

