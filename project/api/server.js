'use strict';

//This allows extensibility to create a more robust express server
const express = require('express');
const http = require('http');

const router = express();

const PORT = 8000;

const { router: itemsRouter } = require('./routes/items');

const { handleBodyRequestParsing } = require('./middleware/common');

const applyMiddleware = (middlewareWrapper = [], router) => {
    for (const wrapper of middlewareWrapper) {
        wrapper(router);
    }
}

applyMiddleware([handleBodyRequestParsing], router);

router.use('/items', itemsRouter);

const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


