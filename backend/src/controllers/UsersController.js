require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const sendMail = require("../services/sendMail");

class UsersController {
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
    // const user = req.body;
    // user.id = parseInt(req.params.id, 10);
    const userId = parseInt(req.params.id, 10);

    models.user
      .findById(userId)
      .then(([rows]) => {
        if (rows == null) {
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

  static editInfos = async (req, res) => {
    const { phoneNumber, email } = req.body;
    const id = parseInt(req.params.id, 10);

    models.user
      .updateInfos({ id, phoneNumber, email })
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

  static editPassword = async (req, res) => {
    const { password } = req.body;
    const id = parseInt(req.params.id, 10);
    const hash = await bcrypt.hash(password, 10);

    models.user
      .updatePassword({ id, password: hash })
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
    const {
      firstname,
      lastname,
      email,
      phoneNumber,
      sponsorCode,
      password,
      signupDate,
    } = req.body;
    const findByEmail = await models.user.findByEmail(email);
    const hash = await bcrypt.hash(password, 10);
    const referralCode = `${firstname.slice(0, 2)}${lastname.slice(
      0,
      2
    )}${phoneNumber
      .split("")
      .map((el) => (el === " " ? "" : el))
      .join("")
      .slice(6)}-${Math.floor(Math.random() * 10000)}`;

    try {
      if (findByEmail.length > 0) {
        return res.status(400).json({
          status: 400,
          message: "Email already exists",
        });
      }

      models.user
        .insert({
          firstname,
          lastname,
          email,
          phoneNumber,
          sponsorCode,
          referralCode,
          password: hash,
          role: "USER",
          signupDate,
        })
        .then((result) => {
          sendMail(email, "Creation compte", "Le test pour nodemailer sellect");
          res.status(201).send({
            id: result[0].insertId,
            message: "User created",
          });
        })
        .catch((err) => {
          console.error(err.message);
          res.sendStatus(500);
        });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
    return "";
  };

  static login = async (req, res) => {
    const { email, password } = req.body;

    models.user
      .findByEmail({ email, password })
      .then(async (result) => {
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
        return res.cookie("sellectUserToken", token).json({
          message: "User logged",
          role: result[0].role,
          id: result[0].id,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ status: "error", message: err.message });
      });
    return "";
  };

  static logout = async (req, res) => {
    try {
      return res
        .clearCookie("sellectUserToken")
        .status(200)
        .json({ message: "Logout successful" });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  static delete = (req, res) => {
    models.user
      .delete(req.params.id)
      .then(() => {
        res.status(204).json({ message: "User deleted" });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static readSponsor = (req, res) => {
    const { sponsorCode } = req.params;

    models.user
      .findBySponsorCode(sponsorCode)
      .then(([rows]) => {
        if (rows == null) {
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
}

module.exports = UsersController;
