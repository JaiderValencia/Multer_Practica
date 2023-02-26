// external modules
const express = require("express");
const multer = require("multer");

// natives modules
const path = require("path");

// import controller
const mainController = require("../controllers/mainController");

// express instance
const router = express.Router();

// multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../data/avatar-images"));
    },
    filename: (req, file, cb) => {
        console.log(file);
    }
});

const upload = multer({ storage })

// routes
router.get("/", mainController.index);
router.get("/create", mainController.createForm);
router.post("/", mainController.create);

// export routes
module.exports = router;