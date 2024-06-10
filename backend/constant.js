class PUBLIC_DATA {

    static port = process.env.PORT || 4000
    static mongo_uri = process.env.MONGO_URI || `mongodb://localhost/inventory`
    static jwt_auth = process.env.JWT_AUTH || "lkjas87d9tr8querhti#$%$^%$^@#$^"
}




module.exports = {
    PUBLIC_DATA,
}