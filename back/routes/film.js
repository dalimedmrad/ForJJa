const express = require("express");
const router = express.Router();
const controllers = require('../controllers/film');
// const isAuth = require('../middleware/passport');




//@Methode POST
//@desc POST film
//@Path:http://localhost:5000/api/film
router.post("/",controllers.postFilm);


//@Methode GET
//@desc GET all films
//@Path:http://localhost:5000/api/film
router.get("/",controllers.getAll);



//@Methode GET
//@desc GET one film by id
//@Path:http://localhost:5000/api/film/:id
//@Params id
router.get("/:id",controllers.getOneById);


//@Methode DELETE
//@desc DELETE ONE film by id
//@Path:http://localhost:5000/api/film/:id
//@Params id
router.delete("/:id",controllers.delete);


//@Methode PUT
//@desc update one film by id
//@Path:http://localhost:5000/api/film/:id
//@Params id Body
router.put("/:id",controllers.update);



module.exports = router;