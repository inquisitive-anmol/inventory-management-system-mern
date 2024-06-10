const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const {UserModel, ProfileModel} = require("../models")

class AuthService {
    static async LoginUser(body){
        const {email, name, password } = body;

        const checkExist = await UserModel.findOne({email})
        if(!checkExist) {
            throw new ApiError(httpStatus.BAD_REQUEST, "User not Registered");
            return
        }

        if(password !== checkExist.password) {
throw new ApiError(httpStatus.BAD_REQUEST, "Invalid credentials!");
return
        }

        // const user = await UserModel.create({
        //     email,password, name
        // })


        // await ProfileModel.create({
        //     user: user._id
        // })

        return {
            msg: "User Logged in successfully",
            token: ""
        }
    }
}


module.exports = AuthService;