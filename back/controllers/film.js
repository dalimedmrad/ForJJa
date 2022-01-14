const Film = require("../models/Film");


module.exports = {

    postFilm : async(req,res)=>{
        try{
            const newFilm = new Film({...req.body});
            // if(!req.body.depart || !req.body.arrive || !req.body.date_dep || !req.body.nombredepassage || 
            //     !req.body.prix || !req.body.modelvoiture || !req.body.couleurvoiture){
            //     res.status(400).send({message:"bad credential"});
            //     return;
            // }
            const response =  await newFilm.save();
            res.send({response:response,message:"Film added"})
        }catch(error){
            console.log(error);
            res.status(500).send({message:"Can not save"});
        }
    },

    getAll : async(req,res)=>{
        try{
            const result = await Film.find()
            res.send({response:result,message:"Geting Films successful"})
        }catch(error){
            res.status(400).send({message:"Can not get Films"})
        }
    },

    getOneById : async(req,res)=>{
        try{
            const result = await Film.findOne({_id:req.params.id})
            res.send({response:result,message:"Geting Film successful"})
        }catch(error){
            res.status(400).send({message:"There is no Film"})
        }
    },

    delete : async(req,res)=>{
        try{
            const result = await Film.deleteOne({_id : req.params.id});
            console.log(result);
            result.deletedCount? res.send("Film deleted successful"):res.send("There is no Film with this id"); 
        }catch(error){
            res.send({message:"There is no Film"})
        }
    },

    update : async(req,res) => {
        try{
            const result = await Film.updateOne({_id:req.params.id},{$set:{...req.body}});
            result.modifiedCount?res.send({message:"Film updated"}):res.send({message:"Film already updated"});
        }catch(error){
            res.status(400).send({message:"No Film with this id"})
        }
    }
}