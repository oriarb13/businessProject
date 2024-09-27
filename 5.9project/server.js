const express = require('express');
const sql = require('mssql');
const axios = require("axios");
require('dotenv').config();

const app = express();
const port = 3000;

// Database configuration
const dbConfig = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
        },
    options: {
        trustServerCertificate: true, // Bypass SSL certificate validation
        trustedConnection: true,
        connectTimeout: 30000, // Increase connection timeout to 30 seconds
    },
  };

// Route to get data
app.get('/task0', async (req, res) => {
    try{
        //Send Auth request using Axios
        const response = await axios.get(`https://fakestoreapi.com/products`);

        res.json({
            message: 'Data successfully sent via Axios',
            data: response.data
        });

        //Send the results as JSON
        // res.json(result.recordset);
    } catch (err) {
        console.error('', err);
        res.status(500).send('Server Error');
}})
    
app.get('/task1/:id', async (req, res) => {
    try{
        const id = req.params.id
        //Send Auth request using Axios
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

        res.json({
            message: 'Data successfully sent via Axios',
            data: response.data
        });

        if (response.data.rating) {
            res.json({
              //shows only the required values
              name: response.data.title,
              description: response.data.description,
              price: response.data.price,
              category: response.data.category,
              image: response.data.image,
              rating: response.data.rating,
            });
          } else {
            res.json({
              //shows only the required values
              name: response.data.title,
              description: response.data.description,
              price: response.data.price,
              category: response.data.category,
              image: response.data.image,
            });
          }
        } catch (err) {
          console.error("SQL error", err);
          res.status(500).send("Server Error");
        }
      });

      //get all carts
      app.get('/allcarts', async (req, res) => {
        try{
            //Send Auth request using Axios
            const response = await axios.get(`https://fakestoreapi.com/carts`);
    
            res.json({
                message: 'Data successfully sent via Axios',
                data: response.data
            });
    
            //Send the results as JSON
            // res.json(result.recordset);
        } catch (err) {
            console.error('', err);
            res.status(500).send('Server Error');
    }})


    ////edit cart
    app.get("/carts/:id/update", async (req, res) => {
      try {
        const cartId = req.params.id;
    
        // קבלת המשתנים מה-URL (כמו /carts/7/update?userId=3&productId=1&quantity=4)
        const userId = req.query.userId;
        const productId = req.query.productId;
        const quantity = req.query.quantity;
    
        console.log("Received update request for cart:", cartId);
        console.log("Update data:", { userId, productId, quantity });
    
        // נתונים לעדכון בעגלה
        const updatedCartData = {
          userId: userId, // מזהה המשתמש
          date: new Date().toISOString().split("T")[0], // תאריך עדכני
          products: [{ productId: productId, quantity: quantity }],
        };
    
        console.log("Updated cart data:", updatedCartData);
    
    // בקשת PUT לעדכון העגלה
    const response = await axios.put(
        `https://fakestoreapi.com/carts/${cartId}`,
        updatedCartData
      );
  
      console.log("Response from API:", response.data);
  
      // שליחת התוצאה כ-JSON בתגובה
      res.json({
        message: `Cart ${cartId} successfully updated`,
        data: response.data,
      });
    } catch (err) {
      console.error("API error", err);
      res.status(500).send("Server Error");
    }
  });


/////add new product
app.get("/products/update", async (req, res) => {
    try {
     
      // קבלת המשתנים מה-URL (כמו /carts/7/update?userId=3&productId=1&quantity=4)
      const title = req.query.title;
      const price = req.query.price;
      const description = req.query.description;
      const image =req.query.image;
      const category = req.query.category;
      
  
      //console.log("Received update request for title:", title);
      //console.log("Update data:", { price, description, category });
  
      // נתונים
      //console.log("add product", newProduct);
      
      // בקשת PUT לעדכון העגלה
      const response = await axios.post(`https://fakestoreapi.com/products`);
        const newProduct={
          title : title,
          price : price,
          description : description ,
          image:image,
          category : category
        };
    
    // שליחת התוצאה כ-JSON בתגובה
    res.json({
      message:  newProduct,
      data: response.data,
    });
  } catch (err) {
    console.error("API error", err);
    res.status(500).send("Server Error");
  }
});






// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;