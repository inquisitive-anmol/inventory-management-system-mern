const CatchAsync = (fn) => (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch((e) => {
        console.log("Promise can e bracked");
    })
}



module.exports = CatchAsync;