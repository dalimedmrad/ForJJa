const express = require("express");
const router = express.Router();
const controllers = require('../controllers/user');
const {loginRules,registerRules,validation} = require('../middleware/validator');
const isAuth = require('../middleware/passport');
// const { forgotPassword, resetPassword } = require("../controllers/user");


//test
// router.get("/",(req,res)=>{
//     res.send("hheloo");
// });

// router.route("/password/forgot").post(forgotPassword);
// router.route("/password/reset/:token").put(resetPassword);
// register
router.post("/register", registerRules(),validation,controllers.register);

// login 
router.post("/login", loginRules(),validation,controllers.login);

// login with google 
router.post("/googlelogin",controllers.googlelogin);


// current
router.get("/current",isAuth(),controllers.current);
router.get("/",controllers.getAll);

module.exports = router;