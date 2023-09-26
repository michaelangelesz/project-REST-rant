// Modules and Globals
const express = require("express")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

// MIDDLEWARE
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

app.get("/", (req, res) => {
  res.render("home")
})

// Controllers & Routes
app.use("/places", require("./controllers/places"))

// 404 not found page
app.get("*", (req, res) => {
  res.render("error404")
})

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`)
})
