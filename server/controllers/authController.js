const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Respond with the created user (excluding the password)
    res.status(201).json({ 
      message: "Registration successful", 
      user: { name: user.name, email: user.email, id: user._id }
    });
  } catch (error) {
    console.error("Error during registration:", error); // Log the full error
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
};

// Login a user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // Set cookie with token
    res.json({ message: "Logged in successfully", user });
  } catch (error) {
    console.error("Error during login:", error); // Log the full error
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

// Get profile data (protected route)
exports.profile = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password"); // Exclude password
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    console.error("Error during profile retrieval:", error); // Log the full error
    res.status(401).json({ message: "Invalid or expired token", error: error.message });
  }
};

// Logout route
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
