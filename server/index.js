const express = require('express');
const mongoose = require('mongoose');
const app= express();
const url = 'mongodb://localhost/CrudDB'
const cors = require("cors");
app.use(cors())

//mongodb connection
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
con.on("open",()=>{
    console.log("Server Connected")
})
app.use(express.json())
//router
app.use('/api', require('./router/user'));
//app port 
app.listen(5000,()=>{
    console.log("server Started")
})


module.exports = app;

