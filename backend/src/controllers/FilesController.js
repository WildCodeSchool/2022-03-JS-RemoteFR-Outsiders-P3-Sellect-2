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
    const file = req.body;
    file.userId = parseInt(req.params.id, 10);

    models.file
      .findByUserId(file)
      .then((rows) => {
        if (rows[0] == null) {
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
