require("dotenv").config();
const nodemailer = require("nodemailer");

const sendMail = async (dest, obj, message) => {
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
    to: dest,
    subject: obj,
    text: message,
    html: message,
    // html: "<b> Bienvenue sur votre compte Sellect. Pendant les 12 prochains mois, nous serons à vos côtés pour optimiser tous vos contrats d'assurances. A tout de suite sur Sellect!</b>", // html body
  });
  return info;
};

module.exports = sendMail;
