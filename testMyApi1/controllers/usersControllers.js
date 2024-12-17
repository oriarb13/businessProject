import Name from "../models/nameModel.js"; 

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const names = await Name.find({}); 
    if (!names.length) { 
      return res.status(404).send({ mes: "Add new name to see the list." }); 
    }
    res.status(200).send(names); 
  } catch (error) {
    res.status(500).send("Unknown server error"); 
  }
};

// Get a random user
export const getRandomUser = async (req, res) => {
  try {
    const randomName = await Name.aggregate([{ $sample: { size: 1 } }]); 
    if (randomName.length === 0) { 
      return res.status(404).send({ mes: "Add new name to see the list." }); 
    }
    res.status(200).send(randomName[0]); 
  } catch (error) {
    res.status(500).send("Unknown server error"); 
  }
};

// Create a new user
export const createUser = async (req, res) => {
  const { name } = req.body; 
  if (!name) { 
    return res.status(400).send({ error: "Name is required" }); 
  }
  
  const newName = new Name({ name: req.body.name }); 
  await newName.save(); 
  res.status(201).send({ msg: "New name added!", newName }); 
};

// Get a specific user by ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params; 
    const name = await Name.findById(id); 
    if (!name) { 
      return res.status(404).send({ error: "Id not found" }); 
    }
    res.status(200).send(name); 
  } catch (error) {
    console.error("Error finding name by ID:", error); 
    res.status(500).json({ error: "Server error" }); 
  }
};

// Update an existing user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params; 
    const updatedName = await Name.findByIdAndUpdate(id, req.body, { new: true }); 
    if (!updatedName) { 
      return res.status(404).send({ error: "Name not found" }); 
    }
    res.status(200).send({ message: "Name updated successfully", name: updatedName }); 
  } catch (error) {
    console.error("Error updating name by ID:", error); 
    res.status(500).json({ error: "Server error" }); 
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; 
    const deletedName = await Name.findByIdAndDelete(id); 
    if (!deletedName) { 
      return res.status(404).json({ error: "Name not found" }); 
    }
    res.json({ message: "Name deleted successfully", nameThatRemoved: deletedName }); 
  } catch (error) {
    console.error("Error deleting name by ID:", error); 
    res.status(500).json({ error: "Server error" }); 
  }
};
