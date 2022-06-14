const bcrypt = require("bcrypt");
const models = require("../models");

class AuthController {
  static browse = (req, res) => {
    models.user
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
    models.user
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const user = req.body;

    // TODO validations (length, format...)

    user.id = parseInt(req.params.id, 10);

    models.user
      .update(user)
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
  /* eslint-disable */
  static add = (req, res) => {
    const { firstname, lastname, email, phone_number, password } = req.body;

    // TODO validations (length, format...)
    const hash = bcrypt.hash(password, 10);

    models.user
      .insert({ firstname, lastname, email, phone_number, password })
      .then(([result]) => {
        res.status(201).send({
          firstname,
          lastname,
          phone_number,
          email,
          password: hash,
          id: result.insertId,
        });
        /* eslint-enable */
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.user
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

module.exports = AuthController;
