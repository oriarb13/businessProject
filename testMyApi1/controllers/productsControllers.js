import Product from "../models/productModel.js"

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); 
    if (!products.length) { 
      return res.status(404).send({ mes: "Add new Product to see the products" }); 
    }
    res.status(200).send(products); 
  } catch (error) {
    res.status(500).send("Unknown server error"); 
  }
};

// Get a random product
export const getRandomProduct = async (req, res) => {
  try {
    const randomProduct = await Product.aggregate([{ $sample: { size: 1 } }]); 
    if (randomProduct.length === 0) { 
      return res.status(404).send({ mes: "Add new Product to see the products" }); 
    }
    res.status(200).send(randomProduct[0]); 
  } catch (error) {
    res.status(500).send("Unknown server error"); 
  }
};

// Find product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params; 
    const product = await Product.findById(id); 
    if (!product) { 
      return res.status(404).send({ error: "Product not found" }); 
    }
    res.status(200).send(product); 
  } catch (error) {
    console.error("Error finding product by ID:", error); 
    res.status(500).json({ error: "Server error" }); 
  }
};

// Create a new product
export const createProduct = async (req, res) => {
    const { name, price } = req.body; 
    if (!name || price === undefined) { 
      return res.status(400).json({ error: "Name and price are required" }); 
    }
    
    const newProduct = new Product({ name, price }); 
    await newProduct.save(); 
    res.status(201).send({ msg: "Good Job!" }); 
  };
  

// Update an existing product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; 
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true }); 
    if (!updatedProduct) { 
      return res.status(404).send({ error: "Product not found" }); 
    }
    res.status(200).send({ message: "Product updated successfully", product: updatedProduct }); 
  } catch (error) {
    console.error("Error updating product by ID:", error); 
    res.status(500).json({ error: "Server error" }); 
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; 
    const deletedProduct = await Product.findByIdAndDelete(id); 
    if (!deletedProduct) { 
      return res.status(404).json({ error: "Product not found" }); 
    }
    res.json({ message: "Product deleted successfully", product: deletedProduct }); 
  } catch (error) {
    console.error("Error deleting product by ID:", error); 
    res.status(500).json({ error: "Server error" }); 
  }
};
