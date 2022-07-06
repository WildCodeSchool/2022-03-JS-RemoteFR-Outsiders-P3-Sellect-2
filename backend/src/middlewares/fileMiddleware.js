const fs = require("fs");

const UPLOADS = "./uploads";
const formidable = require("formidable");

const fileMiddleware = (req, res, next) => {
  if (!fs.existsSync(UPLOADS)) {
    fs.mkdirSync(UPLOADS);
  }

  const form = new formidable.IncomingForm({
    uploadDir: UPLOADS,
    keepExtensions: true,
    multiple: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ validationErrors: [{ message: err.message }] });
    } else {
      // console.log({ fields, files });
      req.body = fields;
      req.files = files;
      next();
    }
  });
};

module.exports = fileMiddleware;
