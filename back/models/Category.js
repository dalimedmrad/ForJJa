const mongoose = require('mongoose');
const schema = mongoose.Schema

const CategorySchema = new schema({
    name:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("categorie",CategorySchema);