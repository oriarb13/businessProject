import express from "express"
import mongoose from "mongoose"

const uri = "mongodb+srv://oriarb13690:oriarb13690@cluster0.ys1qc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri).then(()=>{
    console.log("connected");
    
})


const PORT = 3000

const app = express()

app.get("/",(_req,res)=>{
    res.send({
        message:"hello world"
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`);
    
})