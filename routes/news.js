const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/index");

router.get("/news/:id", controllers.getNewsId);
router.get("/categories/:id/news", controllers.getCatNews);
router.post("/news/:id", controllers.postNews);
router.patch("/news/:id", controllers.patchNews);
router.delete("/news/:id", controllers.deleteNews);

module.exports = router;
