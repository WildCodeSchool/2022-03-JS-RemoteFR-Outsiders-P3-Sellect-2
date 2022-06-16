const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  const token = req.cookies.access_token;
  const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);
  req.userRole = data.role;

  if (req.userRole === "ADMIN") {
    return next();
  }
  return res.sendStatus(403);
};

module.exports = isAdmin;
