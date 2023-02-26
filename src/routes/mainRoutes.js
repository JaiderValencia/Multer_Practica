// external modules
const express = require("express");

// import controller
const mainController = require("../controllers/mainController");

// express instance
const router = express.Router();

// routes
router.get("/", mainController.index);

// export routes
module.exports = router;