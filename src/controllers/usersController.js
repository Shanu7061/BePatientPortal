const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const getAllUsers = asyncHandler(async (req, res) => {
  // Get all users from MongoDB
  const users = await User.find().select("-password").lean();

  // If no users
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password").lean();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  } else {
    res.json(user);
  }
});

const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, email, roles } = req.body;
  const users = await User.find().select("-password").lean();
  const id = users?.length + 1 || 0;
  // Confirm data
  if (!username || !password || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate username
  const duplicate = await User.findOne({ username }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate username" });
  }

  // Hash password
  const hashedPwd = await bcrypt.hash(password, 10); // salt rounds
  const liked = [];

  const userObject = { username, email, password: hashedPwd, roles, id, liked };

  // Create and store new user
  const user = await User.create(userObject);

  if (user) {
    //created
    res.status(201).json(user);
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});

module.exports = {
  getAllUsers,
  createNewUser,
  getUserById,
};
