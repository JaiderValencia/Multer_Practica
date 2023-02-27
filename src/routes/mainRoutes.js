// external modules
const express = require("express");
const multer = require("multer");

// natives modules
const path = require("path");

// multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationPath = path.join(__dirname, "../data/avatar-images");

        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        const fileName = "avatar" + Date.now() + path.extname(file.originalname);
        
        cb(null, fileName);
    }
});

const upload = multer({ storage });


// instace express
const router = express.Router();

// import controllers
const mainController = require("../controllers/mainController")

// routes
router.get("/", mainController.index);
router.get("/create", mainController.createForm);
router.post("/", upload.single("avatar"), mainController.create);

module.exports = router