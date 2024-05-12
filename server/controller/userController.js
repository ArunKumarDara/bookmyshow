const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const userExist = await userModel.findOne({ email: req.body.email });
    if (userExist) {
      return res
        .status(200)
        .json({ success: false, message: "User already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body?.password, salt);
    req.body.password = hashedPassword;
    const user = new userModel(req.body);
    const response = await user.save();
    res.status(200).json({
      success: true,
      response: response,
      message: "Registration successful, please login",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "user has entered invalid data",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const userExit = await userModel.findOne({ email: req.body.email });
    if (!userExit) {
      return res.status(200).json({
        success: false,
        message: "User does not exist",
      });
    }
    const validatePassword = await bcrypt.compare(
      req.body?.password,
      userExit?.password
    );
    if (!validatePassword) {
      return res.status(200).json({
        success: false,
        message: "Invalid password",
      });
    }
    return res.status(200).send({ message: "User Logged in", success: true });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "user has entered invalid data",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
