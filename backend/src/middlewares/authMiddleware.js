require("dotenv").config();
const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const token = req.cookies.sellectUserToken;
  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Error token" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role === "ADMIN") {
    return next();
  }
  return res.sendStatus(403);
};

module.exports = { authorization, isAdmin };
