const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register route
router.post("/register", authController.register);

// Login route
router.post("/login", authController.login);

// Profile route (protected)
router.get("/profile", authController.profile);

// Logout route
router.post("/logout", authController.logout);

module.exports = router;

