const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/index");

router.get("/category/:id", controllers.getNewsByCategory);
router.get("/category", controllers.getCategory);
router.post("/category", controllers.postCategory);
router.patch("/category/:id", controllers.patchCategory);
router.delete("/category/:id", controllers.deleteCategory);

module.exports = router;
