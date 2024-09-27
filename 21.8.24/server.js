console.log('hi mom');

const express = require("express");
const app = express();


//3.1
app.get("/", (req, res) => {
    res.send("Welcome to my basic Express server!");
});
//3.2
app.get("/about", (req, res) => {
    res.json("This server was created by ori");
});
//3.3 
const obj1 = {email:"ori@gemail.com",phone:'0523080860'}
app.get("/contact", (req, res) => {
    res.send(obj1);
});

//3.4
arr1=[{id:'1',name:'apple',price:5},{id:'2',name:'banana',price:7},{id:'3',name:'watermelon',price:10}]
app.get("/api/products", (req, res) => {
    res.json(arr1);
});

app.get("/api/products/:id", (req, res) => {
    const Id = req.params.id;
    let product = null;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].id === Id) product = arr1[i];
    }
    if (product === null) res.send("the product not found");
    else res.json(product);
  });



app.listen(3000, () => {
 console.log('Server running at http://localhost:3000/');
});

