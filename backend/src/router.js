const express = require("express");

const { ItemController, AuthController } = require("./controllers");
// const { authorization, isAdmin } = require("./middlewares/authMiddleware");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.post("/auth/users", AuthController.add);
router.get("/auth/users", /* authorization, isAdmin */ AuthController.browse);
router.post(
  "/login/users",
  AuthController.login /* , AuthController.getUserData */
);
router.get(
  "/logout/users" /* , authorization, isAdmin */,
  AuthController.logout
);
// router.get("/data/users", AuthController.getUserData);

module.exports = router;
