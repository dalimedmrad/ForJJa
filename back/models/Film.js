const mongoose = require('mongoose');
const schema = mongoose.Schema


const FilmSchema = new schema({
    name:{
        type:String,
        required:true
    },
    date_sortie:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    affiche:{
        type:String
    },
    videoSrc:{
        type:String
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    }
});
module.exports = mongoose.model("film",FilmSchema);