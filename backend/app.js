const express = require('express');

const app=express();
const cookieParser=require('cookie-parser');
const errorMiddleware=require('./middleware/error');
const path=require('path');
app.use(express.json({limit:'50mb'}))
 app.use(cookieParser());

 //Route Imports
const  member = require('./routes/memberRoute');
const user=require('./routes/userRoute');

app.use('/api/v1',member);
 app.use('/api/v1',user)
//Middleware for error

app.use(errorMiddleware);
app.use(express.static(path.join(__dirname,'../frontend/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'));

});


module.exports = app;