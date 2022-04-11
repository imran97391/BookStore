const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/books-routes")
const app = express();

//middlewares
app.use(express.json())
app.use('/books',router)


mongoose.connect("mongodb+srv://admin:admin748596@cluster0.zewgt.mongodb.net/bookSorte?retryWrites=true&w=majority").then(()=>{console.log("Database connected")}).then(()=>{app.listen(5000)}).catch((err)=>console.log(err))
//admin748596