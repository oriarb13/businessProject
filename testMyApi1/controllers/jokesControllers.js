import Joke from "../models/jokeModel.js"; 

// Get all jokes
export const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find(); 
    if (jokes.length === 0) { 
      return res.status(404).json({ message: "Add a new joke to see the jokes." }); 
    }
    res.status(200).json(jokes); 
  } catch (error) {
    console.error("Error fetching jokes:", error); 
    res.status(500).json({ error: "Unknown server error" }); 
  }
};

// Get a random joke
export const getRandomJoke = async (req, res) => {
  try {
    const randomJoke = await Joke.aggregate([{ $sample: { size: 1 } }]); 
    if (randomJoke.length === 0) { 
      return res.status(404).json({ message: "Add a new joke to see the jokes." }); 
    }
    res.status(200).json(randomJoke[0]); 
  } catch (error) {
    console.error("Error fetching random joke:", error); 
    res.status(500).json({ error: "Unknown server error" }); 
  }
};

// Get a specific joke by ID
export const getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id); 
    if (!joke) { 
      return res.status(404).json({ error: "Joke not found" }); 
    }
    res.status(200).json(joke); 
  } catch (error) {
    console.error("Error finding joke by ID:", error); 
    res.status(500).json({ error: "Server error" }); 
  }
};

// Create a new joke
export const createJoke = async (req, res) => {
  const { joke } = req.body; 
  if (!joke) { 
    return res.status(400).json({ error: "Joke is required" }); 
  }
  
  try {
    const newJoke = new Joke({ joke }); 
    await newJoke.save(); 
    res.status(201).json({ message: "Good job!", joke: newJoke }); 
  } catch (error) {
    console.error("Error saving new joke:", error); 
    res.status(500).json({ error: "Server error" }); 
  }
};

// Update an existing joke
export const updateJoke = async (req, res) => {
  try {
    const updatedJoke = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); 
    if (!updatedJoke) { 
      return res.status(404).json({ error: "Joke not found" }); 
    }
    res.status(200).json({ message: "Joke updated successfully", joke: updatedJoke }); 
  } catch (error) {
    console.error("Error updating joke:", error); 
    res.status(500).json({ error: "Server error" }); 
  }
};

// Delete a joke by ID
export const deleteJoke = async (req, res) => {
  try {
    const deletedJoke = await Joke.findByIdAndDelete(req.params.id); 
    if (!deletedJoke) { 
      return res.status(404).json({ error: "Joke not found" }); 
    }
    res.status(200).json({ message: "Joke deleted successfully", joke: deletedJoke }); 
  } catch (error) {
    console.error("Error deleting joke:", error); 
    res.status(500).json({ error: "Server error" }); 
  }
};
