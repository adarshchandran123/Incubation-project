const express = require('express');

const dotenv = require('dotenv');
var bodyParser = require('body-parser');
const { connect } = require('mongoose');
const connectDB = require("./config/connection")
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const {notFount,errorHandler} = require("./middleWares/error")
const cors=require("cors");

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
const app = express();

dotenv.config();

connectDB();

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send("api runnimg")
})



app.use('/api/user',userRoutes)

app.use('/admin',adminRoutes)

app.use(notFount)
app.use(errorHandler)

const PORT = process.env.PORT_NUMBER



app.listen(PORT,console.log(`server started on ${PORT}`));


