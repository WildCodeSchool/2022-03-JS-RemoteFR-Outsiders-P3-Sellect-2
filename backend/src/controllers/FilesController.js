const models = require("../models");

class FilesController {
  static browse = (req, res) => {
    models.file
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    // je récupére mon userId
    // /files/users/:id
    // /files/users/254 <- params.id
    const userId = parseInt(req.params.id, 10);
    // j'appel mon model pour avoir tout les fichiers
    // dont l'id est userId
    models.file
      .findByUserId(userId)
      .then((rows) => {
        if (rows.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(rows);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const file = req.body;

    // TODO validations (length, format...)

    file.id = parseInt(req.params.id, 10);

    models.file
      .update(file)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static addContract = (req, res) => {
    req.body = { ...req.body, content: req.files.file.newFilename };
    const file = req.body;

    models.file
      .insert(file)
      .then(([result]) => {
        res.status(201).send({ ...file, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static addAuditReport = (req, res) => {
    req.body = {
      ...req.body,
      content: req.files.file.newFilename,
      category: "Compte-rendu d'audit",
    };
    const file = req.body;

    models.file
      .insert(file)
      .then(([result]) => {
        res.status(201).send({ ...file, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.file
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = FilesController;
