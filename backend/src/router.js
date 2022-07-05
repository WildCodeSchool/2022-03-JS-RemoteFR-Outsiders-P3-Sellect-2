const express = require("express");

const { ItemController, UsersController } = require("./controllers");
// const { authorization, isAdmin } = require("./middlewares/authMiddleware");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.post("/auth/users", UsersController.add);
router.get("/users", /* authorization, isAdmin */ UsersController.browse);
router.post("/login/users", UsersController.login);
router.get("/logout/users", UsersController.logout);
router.get("/users/:id", UsersController.read);
router.delete("/users/:id", UsersController.delete);
router.put("/infos/users/:id", UsersController.editInfos);
router.put("/password/users/:id", UsersController.editPassword);

module.exports = router;
