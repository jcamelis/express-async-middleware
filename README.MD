

## INSTALL

npm i --save @jcamelis/express-async-middleware


## HOW TO USE

```js

const asyncMiddlewarefactory = require('@jcamelis/express-async-middleware');
const express = require('express');

const mw1 = function(req, res, next) {
    return setTimeout(() => {
        req.mw1 = true;
        next();
    }, 2500);
}

const mw2 = function(req, res, next) {
    return setTimeout(() => {
        req.mw2 = true;
        next();
    }, 1500);
}

const asyncMiddlewares = asyncMiddlewarefactory([mw1, mw2]);

const route = express.Router();

route.use(asyncMiddlewares);

```