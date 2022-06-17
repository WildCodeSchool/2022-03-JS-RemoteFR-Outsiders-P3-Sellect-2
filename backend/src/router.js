const express = require("express");

const { ItemController, AuthController } = require("./controllers");

// const authorization = require("./middlewares/authorization");
// const isAdmin = require("./middlewares/isAdmin");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.post("/auth/users", AuthController.add);
router.get("/auth/users", /* isAdmin */ AuthController.browse);
router.post("/login/users", AuthController.login);
router.get("/logout/users", AuthController.logout);

module.exports = router;
