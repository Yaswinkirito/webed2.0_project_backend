// MONGO_URI = "mongodb+srv://yaswin:Mfkmq3B6jAMeEjF@cluster0.maydve4.mongodb.net/test?retryWrites=true&w=majority"
// SESSION_SECRET = "hey i am using webapp" env file
const mongoose = require("mongoose")
require("dotenv").config()
const dbConnect = async ()=>{
    mongoose.connect(process.env.MONGO_URI)
    mongoose.connection.on('connected',()=>{
        console.log('Connection established');
    }) 
    mongoose.connection.on('disconnected',()=>{
        console.log('Failed to establish conection');
    })
    mongoose.connection.on('error',()=>{
        console.log('Error while connecting');
    })
}
module.exports = dbConnect