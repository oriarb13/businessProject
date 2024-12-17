const bcrypt = require("bcrypt");
const { error } = require("console");
const express = require('express')

const app= express()

const PORT = 3000;
const saltRounds = 10
const hashKey='jbvjgjv344'

//dummy user
const dummyUser = {}

app.use(express.json())

//check if the server work
app.get("/", (req, res) => {
    res.status(200).send({ message: "server is running" });
});


app.post("/encrypt-password",async (req, res) => {
    try{
        const {userPassword} = req.body
        console.log(userPassword);
        const hashedPassword =await bcrypt.hash(userPassword+hashKey,saltRounds)
    
        return res.send ({
            hashedPassword
        })
    }
    catch{
        res.status(500).send(error);
        
    }
})

app.post("/sign-up",async (req, res) => {
    try{
        const {email,userPassword} = req.body
        console.log(userPassword);
        const hashedPassword = await bcrypt.hash(userPassword+hashKey,saltRounds)
   
        dummyUser.email=email
        dummyUser.password=hashedPassword
        return res.send ({
            you:dummyUser
        })
    }
    catch{
        res.status(500).send(error);
        
    }
})

app.post ('/sign-in',async(req,res)=>{
    try{
        const {email,userPassword} = req.body

        //מסד נתונים במציאות
        if (dummyUser.email !== email) {
            return res.status(401).send("NO SUCH USER");
        }
        
        const isCorrectPassword = await bcrypt.compare(userPassword+hashKey,dummyUser.password)
        if (isCorrectPassword){
            return res.status(200).send ({
                status:"success",
                message:"",
                data:dummyUser.email
            })  
        }
    }
    catch(error){
        res.status(401).send(error);

    }
})


app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
})