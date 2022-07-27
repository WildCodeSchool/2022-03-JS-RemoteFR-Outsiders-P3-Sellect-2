const express = require("express");

const {
  ItemController,
  UsersController,
  FilesController,
} = require("./controllers");

const { authorization, isAdmin } = require("./middlewares/authMiddleware");
const fileMiddleware = require("./middlewares/fileMiddleware");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.post("/auth/users", UsersController.add);
router.get("/users", authorization, isAdmin, UsersController.browse);
router.post("/login/users", UsersController.login);
router.get("/logout/users", UsersController.logout);
router.get("/users/:id", authorization, UsersController.read);
router.delete("/users/:id", authorization, isAdmin, UsersController.delete);
router.put("/infos/users/:id", authorization, UsersController.editInfos);
router.put("/password/users/:id", authorization, UsersController.editPassword);
router.get(
  "/users/sponsors/:sponsorCode",
  authorization,
  UsersController.readSponsor
);
router.get("/users-number", UsersController.browseUsersNumber);

router.post(
  "/upload/contracts",
  authorization,
  fileMiddleware,
  FilesController.addContract
);
router.post(
  "/upload/audit-reports",
  authorization,
  isAdmin,
  fileMiddleware,
  FilesController.addAuditReport
);
router.get("/files/users", authorization, isAdmin, FilesController.browse);
router.get("/files/users/:id", authorization, FilesController.read);
router.get("/download/file/:name", authorization, FilesController.download);
router.get("/visualize/file/:name", FilesController.browsePath);
router.delete("/files/:id", authorization, isAdmin, FilesController.delete);
router.delete(
  "/all-files/:id",
  authorization,
  isAdmin,
  FilesController.deleteFiles
);
router.put(
  "/update/new-contracts/:id",
  authorization,
  isAdmin,
  fileMiddleware,
  FilesController.editContract
);
router.get("/gains/users/:id", authorization, FilesController.readGains);
router.get("/audit-reports-number", FilesController.browseAuditReportsNumber);
router.get("/total-gains-per-month", FilesController.browseTotalGainsPerMonth);

module.exports = router;
