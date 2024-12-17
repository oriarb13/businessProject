import User from "../models/usersModel.js"; 

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); 
    if (users.length === 0) { 
      return res.status(404).json({ message: "Add a new user to see the users." });     
    }
    res.status(200).json(users); 
  } catch (error) {
    console.error("Error fetching users:", error); 
    res.status(500).json({ error: "Unknown server error." });   
  }
};

// Get a random user
export const getRandomUser = async (req, res) => {
  try {
    const randomUser = await User.aggregate([{ $sample: { size: 1 } }]); 
    if (randomUser.length === 0) { 
      return res.status(404).json({ message: "Add a new user to see the users." });     
    }
    res.status(200).json(randomUser); 
  } catch (error) {
    console.error("Error fetching random user:", error); 
    res.status(500).json({ error: "Unknown server error." });   
  }
};

// Get a specific user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); 
    if (!user) { 
      return res.status(404).json({ error: "User not found." });     
    }
    res.status(200).json(user); 
  } catch (error) {
    console.error("Error finding user by ID:", error); 
    res.status(500).json({ error: "Server error." });   
  }
};

// Create a new user
export const createUser = async (req, res) => {
  const { username, email, password, role } = req.body; 
  
  // Check for required fields
  if (!username || !email || !password) { 
    return res.status(400).json({ error: "Username, email, and password are required." });     
  }
  
  try {
    const newUser = new User({
      username,
      email,
      password,
      role, 
    });

    await newUser.save(); 
    res.status(201).json({ message: "User created successfully!", user: newUser });     
  } catch (error) {
    console.error("Error saving new user:", error); 
    res.status(500).json({ error: "Server error." });   
  }
};

// Update an existing user
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); 
    if (!updatedUser) { 
      return res.status(404).json({ error: "User not found." });     
    }
    res.status(200).json({ message: "User updated successfully", user: updatedUser });     
  } catch (error) {
    console.error("Error updating user:", error); 
    res.status(500).json({ error: "Server error." });   
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id); 
    if (!deletedUser) { 
      return res.status(404).json({ error: "User not found." });     
    }
    res.status(200).json({ message: "User deleted successfully", user: deletedUser });     
  } catch (error) {
    console.error("Error deleting user:", error); 
    res.status(500).json({ error: "Server error." });   
  }
};
