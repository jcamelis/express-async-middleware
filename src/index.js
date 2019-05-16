

module.exports = function expressAsyncMiddlewarefactory(middlewares) {

    return function (req, res, next) {
        const promises = middlewares.map((middleware) => {
            
            return new Promise((resolve, reject) => {
                middleware(req, res, (error) => {
                    error ? reject(error): resolve();
                });
            });
        });
        Promise.all(promises).then(() => next()).catch(next);
    }
}
