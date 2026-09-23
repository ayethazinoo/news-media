const express = require('express')
require('dotenv').config()
const newsRoute = require('./routes/news');
const usersRoute = require('./routes/users');
const morgan = require('morgan');
const mongoose = require('mongoose')
var cookieParser = require('cookie-parser')
const cors = require('cors')
const AuthMiddleware = require('./middleware/AuthMiddleware');

const app = express();

//const mongoURL = "mongodb+srv://newsmedia:newsmedia1234@newsmedia.pazxiu5.mongodb.net/?appName=newsmedia";

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('database connected....');    

    app.listen(process.env.PORT,()=>{
    console.log('app is running on port '+ process.env.PORT);    
})
}) 

// app.use(cors());

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api/news', AuthMiddleware,newsRoute)
app.use('/api/users' , usersRoute)

app.get('/',(req,res)=>{
    return res.json({message : "this is testing..."})
})

app.get('/set-cookie',(req,res)=>{
    res.cookie('testing' , 'Code Lab testing...')  //can read write permission
    res.cookie('password' , 'cookietesting123',{httpOnly:true})     //can acess http request
    return res.send('cookie set success...')
})

app.get('/get-cookie',(req,res)=>{
    let data = req.cookies;     //get data from cookie
    return res.json(data)
})