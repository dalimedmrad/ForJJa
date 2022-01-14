const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require ('bcrypt');
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const {OAuth2Client}=require('google-auth-library');

const client = new OAuth2Client("90347864426-kffpr6e0mja04u2ahuihb1ruo7pqj2gj.apps.googleusercontent.com");

module.exports = {
    register : async(req,res) => {
        const{name,lastName,email,password,age} = req.body;
        try{
            const newUser = new User({name,lastName,age,email,password});
            // check if the email exist 
            const searchedUser = await User.findOne({email});
            if(searchedUser) return res.status(400).send({msg:"email already exist"});
            // hash password 
            const salt = 10;
            const genSalt = await bcrypt.genSalt(salt);
            const hashedPassword = await bcrypt.hash(password,genSalt);
            newUser.password = hashedPassword;
            
            const newUserToken = await newUser.save();  
            const payload = {
                _id:newUserToken._id,
                name:newUserToken.name,
            };
            const token = await jwt.sign(payload,process.env.SecretOrKey);
            res.status(200).send({user:newUserToken,msg:"user is saved",token:`Bearer ${token}`});
        }catch(error){
            console.log(error)
            res.status(500).send("can not save the user");
        }
    },

    login: async(req,res) =>{
        const {email,password} = req.body;
        try{
            const searchedUser = await User.findOne({email});
            if(!searchedUser) return res.status(400).send({msg:"bad Credential"});

            const  match = await bcrypt.compare(password,searchedUser.password);
            if(!match) return res.status(400).send({msg:"bad Credential"});
            const payload = {
                _id:searchedUser._id,
                name:searchedUser.name,
            };
            const token = await jwt.sign(payload,process.env.SecretOrKey);
            res.status(200).send({user:searchedUser,msg:"success",token:`Bearer ${token}`});
        }catch(error){
            console.log(error)
            res.status(500).send({msg:"can not get the user"});
        }
    },
    
    current :(req,res)=>{
        res.status(200).send({user:req.user});
    },

    // forgotPassword : catchAsyncErrors(async (req, res, next) => {
    // const user = await User.findOne({ email: req.body.email });
    // if (!user) {
    //   return next(new ErrorHander("User not found", 404));
    // }
    // // Get ResetPassword Token
    // const resetToken = user.getResetPasswordToken();
  
    // await user.save({ validateBeforeSave: false });
  
    // const resetPasswordUrl = `${req.protocol}://${req.get(
    //   "host"
    // )}/password/reset/${resetToken}`;
  
    // const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
  
    // try {
    //   await sendEmail({
    //     email: user.email,
    //     subject: `Ecommerce Password Recovery`,
    //     message,
    //   });
  
    //   res.status(200).json({
    //     success: true,
    //     message: `Email sent to ${user.email} successfully`,
    //   });
    // } catch (error) {
    //   user.resetPasswordToken = undefined;
    //   user.resetPasswordExpire = undefined;
    //   console.log(error);
  
    //   await user.save({ validateBeforeSave: false });
  
    //   return next(new ErrorHander(error.message, 500));
    // }
    // }),
  
    // resetPassword : catchAsyncErrors(async (req, res, next) => {
    //     // creating token hash
    //     const resetPasswordToken = crypto
    //     .createHash("sha256")
    //     .update(req.params.token)
    //     .digest("hex");
    
    //     const user = await User.findOne({
    //     resetPasswordToken,
    //     resetPasswordExpire: { $gt: Date.now() },
    //     });
    
    //     if (!user) {
    //     return next(
    //         new ErrorHander(
    //         "Reset Password Token is invalid or has been expired",
    //         400
    //         )
    //     );
    //     }
    
    //     if (req.body.password !== req.body.confirmPassword) {
    //     return next(new ErrorHander("Password does not match", 400));
    //     }
    
    //     user.password = req.body.password;
    //     user.resetPasswordToken = undefined;
    //     user.resetPasswordExpire = undefined;
    
    //     await user.save();
    
    //     sendToken(user, 200, res);
    // }),
    
    googlelogin:async(req,res)=>{
      const { token } = req.body;
      // console.log(token)
        try{
          const ticket = await client.verifyIdToken({
            idToken: token,
            audience:"90347864426-kffpr6e0mja04u2ahuihb1ruo7pqj2gj.apps.googleusercontent.com",});
          const { name, email } = ticket.getPayload();
          const searchedUser = await User.findOne({email});
          if(!searchedUser) {
            const password = email + process.env.SecretOrKey
            // const salt = 10;
            // const genSalt = await bcrypt.genSalt(salt);
            // const hashedPassword = await bcrypt.hash(password,genSalt);
            const newUser = new User({name,email,password});
            const newUserToken = await newUser.save();
            const payload = {
              _id:newUserToken._id,
              name:newUserToken.name,
            };
            const token1 =  await jwt.sign(payload,process.env.SecretOrKey);
            // const {_id,name, email} = newUser;
            res.status(200).send({token:`Bearer ${token1}`,user:newUserToken})
            
          }
          const payload = {
            _id:searchedUser._id,
            name:searchedUser.name,
          };
          const token1 = await jwt.sign(payload,process.env.SecretOrKey);
          res.status(200).send({token:`Bearer ${token1}`,user:searchedUser});
          
        }catch(error){console.log(error);}
    },
    getAll : async(req,res)=>{
      try{
          const result = await User.find()
          res.send({response:result,message:"Geting contacts successful"})
      }catch(error){
          res.status(400).send({message:"Can not get contacts"})
      }
  },
      
    

}