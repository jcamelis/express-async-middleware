const factory = require('../src/index');

const mw1 = function(req, res, next) {
    console.log('MD1::start');
    return setTimeout(() => {
        req.mw1 = true;
        console.log('MD1::end');
        next();
    }, 2500);
}

const mw2 = function(req, res, next) {
    console.log('MD2::start');
    return setTimeout(() => {
        req.mw2 = true;
        console.log('MD2::end');
        next();
    }, 1500);
}

const mw3 = function(req, res, next) {
    console.log('MD3::start');
    setTimeout(() => {
        res.mw3 = true;
        console.log('MD3::end');
        next();
    }, 5500);
}

const mw4 = function(req, res, next) {
    console.log('MD4::start');
    setTimeout(() => {
        res.mw3 = true;
        console.log('MD4::end');
        next(new Error('Some Error'));
    }, 100);
}

const mockReq = {

}


const mockRes = {
    
}
function constrollerFactory (req, res) {

    return (error) => {
        if (error) {
            console.log('ERROR');
            console.error(error);
        } else {
            console.log('NO_ERROR');
            console.log(req, res);
        }
    } 
}

const asyncMW = factory([
    mw1,
    mw2,
    mw3
    // mw4
]);

asyncMW(mockReq, mockRes, constrollerFactory(mockReq, mockRes));

