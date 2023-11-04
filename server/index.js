const mongoose = require('mongoose')
const {urlencoded} = require('express')
const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt =  require("jsonwebtoken")
const User = require('./model/schema')
const cookieParser = require('cookie-parser');
 


connectDB()
const app = express()
app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:3000'],
    methods:['GET', 'POST'],
    credentials: true
}))
app.use(express.urlencoded({extended: false}));






// app.use('api/Sign', require('./route/route'))

app.post('/Sign',(req,res)=>{
    const {firstName, lastName, email,mobile, identificationNumber, identificationType ,address, confirmPassword,password} = req.body
    bcrypt.hash(password, 10)
    .then(hash => {
        User.create({firstName, lastName, email,mobile, identificationNumber, identificationType ,address, confirmPassword, password: hash})
        .then(user => res.json('successfully'))
        .catch(err => res.json(err))


    }).catch(err => res.json(err))

   
});


app.post('/form',(req, res,) => {
    const {email, password} = req.body
    User.findOne({email: email})

    .then(user =>{
        if(user){
            bcrypt.compare(password, user.password, (err,response) =>{
                if(response){
                    const token = jwt.sign({email: user.email, role: user.role },
                         'jwt-secret-key', {expiresIn: '1d'})
                         res.cookie('token', token)
                         return res.json("successful")

                }else{
                    return res.json("incorrect password")

                }
            });
        }else{
            return res.json("No User Found")
        }
    })
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)

}) ;