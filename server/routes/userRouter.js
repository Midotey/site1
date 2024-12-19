const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");


router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/auth", userController.check);

router.get("/", userController.get);
router.get("/:id", userController.getId);
// router.post("/", );



module.exports = router;