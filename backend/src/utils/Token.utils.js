const jwt = require("jsonwebtoken");
const { PUBLIC_DATA } = require("../../constant")

const generateToken = (user, expire = '1d') {
    const token = jwt.sign({userid: user._id}, PUBLIC_DATA.jwt_auth, {expiresIn: expire

    })

    return token;
}


const validateToken = (token) {
    const token = jwt.verify(token, PUBLIC_DATA.jwt_auth)

    return token;
}