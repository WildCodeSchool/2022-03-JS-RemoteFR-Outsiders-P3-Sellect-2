require("dotenv").config();
const jwt = require("jsonwebtoken");

/* eslint-disable */
const authorization = (req, res, next) => {
  const token = req.cookies.userSellect;
  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Not logged in" });
  }
};
/* eslint-enable */

/* function authorization(req, res, next) {
  const token = req.cookies.userSellect;
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);
    req.userId = data.id;
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendStatus(401);
  }
} */

module.exports = authorization;
