const models = require("../models");
const sendMail = require("../services/sendMail");

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

  static readGains = (req, res) => {
    const userId = parseInt(req.params.id, 10);

    models.file
      .findGainsByUserId(userId)
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

  static editContract = (req, res) => {
    req.body = {
      ...req.body,
      id: parseInt(req.params.id, 10),
      content: req.files.file.newFilename,
      newCost: parseInt(req.body.newCost, 10),
      gain: parseInt(req.body.gain, 10),
    };
    const file = req.body;

    models.file
      .updateContract(file)
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
    // const { email } = req.body.email;
    console.warn(req.user);

    models.file
      .insert(file)
      .then(([result]) => {
        //   sendMail(
        //    `${email}`,
        //   "Nous avons bien reçu vos documents, nous les traiteront dans les meilleurs delais"
        // );
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
    // console.warn(parseInt(req.body.userId, 10));
    models.file
      .insert(file)
      .then(([result]) => {
        models.user.findById(parseInt(req.body.userId, 10)).then(([user]) => {
          sendMail(user.email, "Compte-rendu audit", "Voilà votre cr sellect");
        });
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

  static deleteFiles = (req, res) => {
    const userId = parseInt(req.params.id, 10);

    models.file
      .deleteAll(userId)
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

  static download = (req, res) => {
    // je récupère le params passer par l'url
    const { name } = req.params;
    // je renvoi via un status code 200 mon document.
    res.status(200).download(`${__dirname}/../../uploads/${name}`, name);
  };
}

module.exports = FilesController;
