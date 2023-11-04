const async = require('express-async-handler')
const User = require('../model/schema')
const bcrypt = require('bcryptjs')
const jwt =  require("jsonwebtoken")


// register user account

const postRegister = async(async(req,res)=>{

    
    const {firstName, lastName, email,mobile, identificationNumber, identificationType ,address, confirmPassword,password} = req.body
    bcrypt.hash(password, 10)
    .then(hash =>{
        User.create({firstName, lastName, email,mobile, identificationNumber, identificationType ,address, confirmPassword, password: hash})
        .then(user => res.json({status: 'successfully created'}))
        .catch(error => res.json(error))


    }).catch(error => res.json(error))

   
});


const postLogin = async(async(req, res,) => {
    const {email, password} = req.body
    User.findOne({email: email})

    .then(user =>{
        if(user){
            bcrypt.compare(password, user.password, (err,response) =>{
                if(response){
                    const token = jwt.sign({userId : user._id},process.env.TOKEN_SECRET ,{expiresIn : "1d"});
                    // const token = jwt.sign({email:user.email, role: user.role },
                    //      'jwt-token', {expiresIn: '1d'})
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
//     try{
//         let user = await User.findOne({email: req.body.email})

//         if(user){
//            return res.status({
//                 success:false,
//                 message:"User already exist"
//            })
//         }


//         const salt = await bcrypt.genSalt(10)
//         const postPassword = await bcrypt.hash(req.body.password , salt)
//         req.body.password = postPassword
//         const newUser = new User(req.body)
//         await newUser.save()

//         res.send({
//             message:"created successfully",
//             data: null,
//             success: true
//         })


//     }catch(error) {
//         res.send({
//             message: error.message,
//             success:false,
//         })
//     }

   


//  login user account
// const postLogin = (async(req, res) => {
//     try{
//         let user = await User.findOne({email: req.body.email})

//         if(!user){
//            return res.status({
//                 success:false,
//                 message:"User does not exist",
//            })
//         }
    
//         const validPassword = await bcrypt.compare(req.body.password, user.password)
//         if(!validPassword){
//             return res.status({
//                 success:false,
//                 message:"invalid password",
//            })
    
//         }
//         const token = jwt.sign({userId : user._id},process.env.TOKEN_SECRET ,{expiresIn : "2d"});
//         if(token){
//             res.send({
//                 message:"User logged in successfully",
//                 data: data,
//                 success:true,
//            })
    
//         }
        

//     }catch(error) {
//         res.send({
//             message: error.message,
//             success:false,
//         })
//     }

// });
   






    // if(!req.body.firstName, !req.body.lastName, !req.body.email, !req.body.mobile,!req.body.identificationType,!req.body.identificationNumber,!req.body.address,!req.body.password && !req.body.confirmPassword){
    //     res.status(400)
    //     throw new Error('please add a content')

    // }

    // const person = await user.create({
    //     firstName:req.body.firstName,
    //     lastName:req.body.lastName,
    //     email:req.body.email,
    //     mobile:req.body.mobile,
    //     identificationType:req.body.identificationType,
    //     identificationNumber:req.body.identificationNumber,
    //     address:req.body.address,
    //     password:req.body.password,
    //     confirmPassword:req.body.confirmPassword,
        
        

    
    // })
    // res.status(200).json(person)
   

// const updatePerson = async(async( req ,res)=>{
//     const person = await user.findById(req.params.id)
 
    
//     if(!person){
//         res.status(400)
//         throw new Error('person not found')
//     }

//         const updatedPerson = await user.findByIdAndUpdate(req.params.id, req.body, {new:true})
//     res.status(200).json(updatedPerson)
    
        
        
// });
// const deletePerson = async(async( req ,res)=>{
//     const person = await user.findByIdAndRemove(req.params.id)

    
//     if(!person){
//         res.status(400)
//         throw new Error('person not found')
//     }
//     await user.deleteOne()
//     res.status(200).json({id:req.params.id})
// });
 module.exports = {
    postRegister,postLogin
}
