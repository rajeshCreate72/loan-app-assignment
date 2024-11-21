const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middleware/authMiddleware");
const { registerUser, loginUser, authenticateUser } = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/auth-user", AuthMiddleware, authenticateUser);

module.exports = router;
