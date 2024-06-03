const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({limit: "10mb"}))

const PORT = process.env.PORT || 5000
//mongodb connection
// console.log(process.env.MONGODB_URL)
// mongoose.connect(process.env.MONGODB_URL)

//api


app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.post("/signup",(req,res)=>{
    console.log(req.body)
})
app.listen(PORT,()=>console.log("Server is running at port : " + PORT))