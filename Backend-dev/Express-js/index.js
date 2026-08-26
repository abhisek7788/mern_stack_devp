const express = require('express');
const app = express()
app.get("/users", (req,res)=>{
    res.send("users")
})
app.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})