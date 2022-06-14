const express = require("express");

const { ItemController, AuthController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/auth/users", AuthController.browse);
router.get("/auth/users/:id", AuthController.read);
router.put("/auth/users/:id", AuthController.edit);
router.post("/auth/users", AuthController.add);

module.exports = router;
