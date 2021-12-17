// Multer use for Image Upload

import multer from "multer";
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },

  ileFilter: async (req, file, cb) => {
    if (file.mimetype != "image/png") {
      cb(new Error("goes wrong on the mimetype!"), false);
    }
    cb(null, true);
  },
});

var uploads = multer({ storage: storage });

export { uploads };
