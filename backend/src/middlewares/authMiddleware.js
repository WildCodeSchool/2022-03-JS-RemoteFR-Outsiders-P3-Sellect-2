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
    return res.status(401).json({ message: "Not logged in" });
  }
};

/* function authorization(req, res, next) {
  const token = req.cookies.sellectUserToken;
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const data = jwt.verify(token, process.env.SECRET_JWT);
    req.userId = data.id;
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendStatus(401);
  }
} */

const isAdmin = (req, res, next) => {
  const token = req.cookies.sellectUserToken;
  const data = jwt.verify(token, process.env.SECRET_JWT);
  req.userRole = data.role;

  if (req.role === "ADMIN") {
    return next();
  }
  return res.sendStatus(403);
};

module.exports = { authorization, isAdmin };
