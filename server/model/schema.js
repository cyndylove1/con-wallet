const mongoose = require('mongoose')


const UserSchema =new mongoose.Schema({
firstName:{
    type: String,
    required:[true, 'please add a text value']

  } ,
  lastName:{
    type: String,
    required:[true, 'please add a text value']

} ,
  email: {
    type: String,
    required:[true, 'please add a text value']
  },
  mobile: {
    type: Number,
    required:[true, 'please add a text value']
  },
  identificationType: {
    type: String,
    required:[true, 'please add a text value']
  },
  identificationNumber: {
    type: String,
    required:[true, 'please add a text value']
  },
  address: {
    type: String,
    required:[true, 'please add a text value']
  },
  password: {
    type: String,
    required:[true, 'please add a text value']
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },

  
},{
    timestamps: true,
           
});
module.exports = mongoose.model('User', UserSchema)
      
      

