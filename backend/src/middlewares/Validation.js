const { validationResult } = require("express-validator");
const ApiError = require ("../utils/ApiError");
const httpStatus = require("http-status");


const validation = (req, res, next) => {
    try {
        
          const result =  validationResult(req);

          if(!result.isEmpty()) {
            throw new ApiError(httpStatus.BAD_REQUEST, result.array()[0].msg)

            return
          }

          next();

    } catch (error) {
        next(error);
    }
}


module.exports = validation;