const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (password !== confirmPassword) return res.status(400).send({ message: "Passwords do not match" });

    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({ username, email, password: hashedPassword });
        res.status(200).json({ message: "User created", user });
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
};

const login = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).lean();
        if (!user) {
          return res.status(400).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET,{ expiresIn: '7d' });
        res.status(200).json({ message: "User logged in", user, token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
};

const updateUserDetails = async (req, res) => {
    const { username, email, oldPassword, newPassword } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user || !(await bcrypt.compare(oldPassword, user.password))) {
        return res.status(400).send({ message: "Invalid username or old password" });
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 12);
  
      // Update user details using findOneAndUpdate
      const updatedUser = await User.findOneAndUpdate(
        { username },
        { email, password: hashedPassword },
        { new: true }
      );
  
      res.send({ message: "Email and password updated successfully", updatedUser });
    } catch (error) {
      console.error('Error updating user details:', error);
      res.status(500).send({ message: "Error updating email or password" });
    }
  };

module.exports = { register, login, updateUserDetails };