const express = require("express");
const router = express.Router();
const controllers = require("../controllers/category")


// test routing
// router.get("/",(req,res)=>{
//     res.send("hello")
// });


//@Methode POST
//@desc POST category
//@Path:http://localhost:5000/api/category
router.post("/", controllers.postCategory);


//@Methode GET
//@desc GET all categorys
//@Path:http://localhost:5000/api/category
router.get("/",controllers.getAll);



//@Methode GET
//@desc GET one category by id
//@Path:http://localhost:5000/api/category/:id
//@Params id
router.get("/:id",controllers.getOneById);


//@Methode DELETE
//@desc DELETE ONE category by id
//@Path:http://localhost:5000/api/category/:id
//@Params id
router.delete("/:id",controllers.delete);


//@Methode PUT
//@desc update one category by id
//@Path:http://localhost:5000/api/category/:id
//@Params id Body
router.put("/:id",controllers.update);


module.exports = router;