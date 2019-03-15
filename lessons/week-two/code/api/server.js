'use strict';

//This allows extensibility to create a more robust express server
const express = require('express');
const http = require('http');

const router = express();

const PORT = 8000;

const { router: userRouter } = require('./routes/users');

const { handleBodyRequestParsing } = require('./middleware/common');

const applyMiddleware = (middlewareWrapper = [], router) => {
    for (const wrapper of middlewareWrapper) {
        wrapper(router);
    }
};

applyMiddleware([handleBodyRequestParsing], router);

router.use("/users", userRouter);

const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});