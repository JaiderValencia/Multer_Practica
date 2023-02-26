// external modules
const express = require("express");
const multer = require("multer");

// import controller
const mainController = require("../controllers/mainController");

// express instance
const router = express.Router();

// routes
router.get("/", mainController.index);
router.get("/create", mainController.createForm);
router.post("/", mainController.create);

// export routes
module.exports = router;