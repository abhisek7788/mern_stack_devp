const express = require("express")
const urlRoutes = require("./routes/url")
const {connectToMongoDB} = require("./connect")
const app = express()
const PORT = 8001

connectToMongoDB("mongodb://127.0.0.1:27017/shortner").then(() => 
  console.log("Connected to MongoDB")
)
app.use("/url",urlRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})