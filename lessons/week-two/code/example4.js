'use strict';

const express = require('express');
const app = express();

app.get('/query', (req, res) => {
    const { completed } = req.query;

    console.log(completed);

    res.json({
        data: req.query
    });
});

app.get('/params/:bookName/something/:foobar', (req, res) => {
    const { bookName } = req.params;

    console.log("BookNaMe: ", bookName);

    res.json({ data: req.params });
});

app.get('/method', (req, res) => {
    res.json({ data: req.method });
}); 

app.get('/path/*', (req, res) => {
    res.json({ data: req.path });
}); 


app.listen(5000, ()=> {
    console.log('Ex4 is running...');
});