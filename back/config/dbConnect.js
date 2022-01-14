const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        let res = await mongoose.connect("mongodb+srv://med:1234@cluster0.h8mj7.mongodb.net/Database?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("database is connected")

    }catch(error){
        console.log("database is not connected")
    };
    
}
module.exports = connectDB;