require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

  static add = async (req, res) => {
    const { firstname, lastname, email, phoneNumber, password } = req.body;

    // TODO validations (length, format...)
    const hash = await bcrypt.hash(password, 10);

    models.user
      .insert({
        firstname,
        lastname,
        email,
        phoneNumber,
        password: hash,
        role: "USER",
      })
      .then((result) => {
        res.status(201).send({
          id: result.insertId,
          message: "User created",
        });
      })
      .catch((err) => {
        console.error(err.message);
        res.sendStatus(500);
      });
  };

  static login = async (req, res) => {
    const { email, password } = req.body;
    /* eslint-disable */
    models.user
      .get({ email, password })
      .then(async (result) => {
        // console.log({ email, password, result });
        if (result.length === 0) {
          return result.status(400).json({
            status: 400,
            message: "User not found",
          });
        }
        const isPasswordValid = await bcrypt.compare(
          password,
          result[0].password
        );
        if (!isPasswordValid) {
          return res.status(400).json({
            status: 400,
            message: "Password is incorrect",
          });
        }
        const token = jwt.sign(
          {
            id: result[0].id,
            email: result[0].email,
          },
          process.env.SECRET_JWT,
          {
            expiresIn: "1h",
          }
        );
        res.cookie("sellectUser", token).json({
          message: "User logged",
        });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
  /* eslint-enable */

  static logout = (req, res) => {
    res.clearCookie("sellectUser").sendStatus(200);
    /* if (error) {
      res.status(400).json({ error: error.message });
    } */
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
