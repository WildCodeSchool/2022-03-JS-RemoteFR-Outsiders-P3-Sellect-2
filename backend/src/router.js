const express = require("express");

const {
  ItemController,
  UsersController,
  FilesController,
} = require("./controllers");
const fileMiddleware = require("./middlewares/fileMiddleware");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.post("/auth/users", UsersController.add);
router.get("/users", /* authorization, isAdmin, */ UsersController.browse);
router.post("/login/users", UsersController.login);
router.get("/logout/users", /* authorization, */ UsersController.logout);
router.get("/users/:id", UsersController.read);
router.delete("/users/:id", UsersController.delete);
router.put("/infos/users/:id", UsersController.editInfos);
router.put("/password/users/:id", UsersController.editPassword);
router.get("/users/sponsors/:sponsorCode", UsersController.readSponsor);

router.post("/upload/contracts", fileMiddleware, FilesController.addContract);
router.post(
  "/upload/audit-reports",
  fileMiddleware,
  FilesController.addAuditReport
);
router.get("/files/users", FilesController.browse);
router.get("/files/users/:id", FilesController.read);
// Route qui permet de télécharger un fichier
router.get("/download/file/:name", FilesController.download);
router.delete("/files/:id", FilesController.delete);
router.delete("/all-files/:id", FilesController.deleteFiles);
// router.put("/new-cost/contracts/:id", FilesController.editCost);
router.put(
  "/update/new-contracts/:id",
  fileMiddleware,
  FilesController.editContract
);
// router.put("/gain/contracts/:id", FilesController.editGain);
router.get("/gains/users/:id", FilesController.readGains);

module.exports = router;
