require("dotenv").config();
const nodemailer = require("nodemailer");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

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

  static browseUsersNumber = (req, res) => {
    models.user
      .findUsersNumber()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
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
            role: result[0].role,
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

  static sendMail = async (req, res) => {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "sellect@outlook.fr",
      to: "besamba.gloria@gmail.com",
      subject: "Votre compte Sellect a été crée!",
      text: "Le test pour nodemailer sellect",
      html: "<b> Bienvenue sur votre compte Sellect. Pendant les 12 prochains mois, nous serons à vos côtés pour optimiser tous vos contrats d'assurances. A tout de suite sur Sellect!</b>", // html body
    });

    res.status(200).json({
      message: "Confirmation email inscription Sellect envoyée",
      messageInfo: info.messageId,
      preview: nodemailer.getTestMessageUrl(info),
    });
  };
}

module.exports = UsersController;
