const AuthValidation = require("../validations/Auth.validation");
const Validation = require("../middlewares/Validation");
const AuthController = require("../controllers/Auth.controller");
const router = require("express").Router();


router.post("/register", AuthValidation.RegisterUser, Validation, AuthController.RegisterUser);
router.get("/register", AuthValidation.LoginUser, Validation, AuthController.LoginUser);






module.exports = router;