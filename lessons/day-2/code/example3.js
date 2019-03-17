'use strict';

const express = require('express');
const app = express();

app.get('/html', (req, res) => {
    res.send('<h1>Hello World</h1><br><h3>HTML Route</h3>');
});

app.get('/json', (req, res) => {
    res.json({ main: 'hello world', meta: 'JSON Route'});
});

app.get('/custom', (req, res) => {
    res.status(418).send({
        data: "I'm a teapot"
    });
});

app.listen(5000, () => {
    console.log("app is running...");
});