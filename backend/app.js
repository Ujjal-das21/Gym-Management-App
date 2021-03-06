const express = require('express');

const app=express();
const cookieParser=require('cookie-parser');
const path=require('path');
if(process.env.NODE_ENV!=="production"){
    require("dotenv").config({path:"backend/config/config.env"})
}
const errorMiddleware=require('./middleware/error');

app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}));
 app.use(cookieParser());

 //Route Imports
const  member = require('./routes/memberRoute');
const user=require('./routes/userRoute');

app.use('/api/v1',member);
 app.use('/api/v1',user);
 
  //Middleware for error
 app.use(errorMiddleware);
 
 app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});


module.exports = app;
