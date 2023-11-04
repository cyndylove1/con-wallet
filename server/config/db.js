const mongoose = require('mongoose')


const  connectDB = async () => {
    try{
        mongoose.set('strictQuery', false)
       const conn = await mongoose.connect(process.env.MONGO_DB)
       console.log( `mongoDB connected at : ${conn.connection.host}`)

    }catch(error){
        console.log('unable to connect')
        process.exit(1)
    }
   

}
module.exports = connectDB
