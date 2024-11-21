const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        // Check if the user already exists
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).send({
                success: false,
                message: "User already exists",
            });
        }

        // Generate salt and hash the password using PBKDF2
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        req.body.password = hashPassword;

        const newUser = new User(req.body);
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_KEY, {
            expiresIn: "1d",
        });

        res.send({
            success: true,
            message: "User created successfully",
            token: token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            res.send({
                success: false,
                message: "User doesnot exist",
            });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {
            res.send({
                success: false,
                message: "Invalid Password",
            });
            return;
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY);

        res.send({
            success: true,
            message: "Logged in",
            token: token,
        });
    } catch (error) {
        console.log(error);
    }
};

const authenticateUser = async (req, res) => {
    try {
        const user = await User.findById(req.body.userId).select("-password");

        res.send({
            success: true,
            message: "You are authorised",
            data: user,
        });
    } catch (error) {
        res.send({
            success: false,
            message: "Session Expired",
        });
    }
};

module.exports = { registerUser, loginUser, authenticateUser };
