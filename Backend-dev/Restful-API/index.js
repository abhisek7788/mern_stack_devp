const express = require("express")
const users = require('./MOCK_DATA.json')
const fs = require("fs")
const mongoose = require("mongoose")

const app = express() 
app.use(express.json())
const PORT = 8000;

// middleware - plugin 

app.use(express.urlencoded({ extended: false}))

app.get("/api/users", (req,res) => {
    return res.json(users)
})

// make connection
mongoose
    .connect("mongodb://127.0.0.1:27017/youtube-app")
    .then(() => console.log("Db connected"))
    .catch((err) => console.log("mangoDB",err))

//Db schema
const userSchema = new mongoose.Schema({
      firstname:{
    type:String,
    require:true,
  },
  lastname:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  jobtitle:{
    type:String,
    require:true,
  },
  gender:{
    type:String
  }
},{timestamps:true})

const User = mongoose.model("user", userSchema);

app.use((req, res, next) => {
    console.log("hellow from middleware-1...")
    // return res.json("hey")
    req.myUsername = "abhi@gmail.com"
    next()
})

app.use((req, res, next) => {
    console.log("Hello from middleware-2....")
    next()
})

app.get("/api/users", (req,res) => {
    console.log("i am in GET route", req.myUsername)
    return res.json(users)
})

app.get("/users", (req,res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>` ).join("")}
    </ul>
    `
    res.send(html)
})

// example -> (req.params.id)
// app.get("/users/:id", (req,res) => {
//     console.log(req.params.id)
//     res.send(user id id ${req.params.id})
// })

app
    .route("/api/users/:id")
    .get((req,res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user)
        
    .patch((req,res) => {
        return res.json({ status: "pending"})
    })
    .delete((req,res) => {
        return res.json({ status: "pending"})
    })
})

app.post("/api/users", async (req,res) => {
    const body = req.body;
    if(
        !body ||
        !body.first_name || 
        !body.last_name ||
        !body.email ||
        !body.gender || 
        !body.job_title
    ){
        return res.status(400).json({msg:"all fields are required"})
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender, 
        jobTitle: body.job_title,
    })

    console.log("result", result)
    return res.status(201).json({msg: "success"});
})

app.listen(PORT, () => {
    console.log(`server strated at localhost : ${PORT}`)
})