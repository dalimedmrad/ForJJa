const Category = require("../models/Category");


module.exports = {

    postCategory : async(req,res)=>{
        try{
            const newCategory = new Category({...req.body});
            // if(!req.body.email){
            //     res.status(400).send({message:"Email is required"});
            //     return;
            // }
            // const category = await Category.findOne({name:req.body.name});
            // if(category){
            //     res.status(400).send({message:"Category already exist"});
            //     return;
            // }
            const response =  await newCategory.save();
            res.send({response:response,message:"Category added"})
        }catch(error){
            console.log(error);
            res.status(500).send({message:"Can not save Category"});
        }
    },

    getAll : async(req,res)=>{
        try{
            const result = await Category.find()
            res.send({response:result,message:"Geting Categories successful"})
        }catch(error){
            res.status(400).send({message:"Can not get Categories"})
        }
    },

    getOneById : async(req,res)=>{
        try{
            const result = await  Category.findOne({_id:req.params.id})
            res.send({response:result,message:"Geting Category successful"})
        }catch(error){
            res.status(400).send({message:"There is no Category"})
        }
    },

    delete : async(req,res)=>{
        try{
            const result = await Category.deleteOne({_id : req.params.id});
            console.log(result);
            result.deletedCount? res.send("Category deleted successful"):res.send("There is no Category with this id"); 
        }catch(error){
            res.send({message:"There is no Category"})
        }
    },

    update : async(req,res) => {
        try{
            const result = await Category.updateOne({_id:req.params.id},{$set:{...req.body}});
            result.modifiedCount?res.send({message:"Category updated"}):res.send({message:"Category already updated"});
        }catch(error){
            res.status(400).send({message:"No Category with this id"})
        }
    }
}