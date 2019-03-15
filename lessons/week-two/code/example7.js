'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');
const app = express();

app.use(bodyParser.json());

let users = [
    {
        name: "phil",
        id: uuid()
    },
    {
        name: 'bailey',
        id: uuid()
    },
    {
        name: 'mary',
        id: uuid()
    },
    {
        name: 'samson',
        id: uuid()
    }
]

app.get('/users', (req, res) => {
    res.json({
        data: users
    });
});

app.get('/users/:identifier', (req, res) => {
    const { identifier } = req.params;
    const user = users.filter((user) => user.id === identifier);

    res.json({
        data: user
    });
});

app.post('/users', (req, res) => {
    const { user } = req.body;

    //create unique user id for user
    user.id = uuid();

    users.push(user),

    res.status(201).send({
        data: [user]
    });
});

app.delete('/users/:identifier', (req, res) => {
    const { identifier } = req.params;
    const nextUsers = users.filter((user) => user.id !== identifier);

    users = nextUsers;

    res.status(204).json({
        data: users
    });
});

app.listen(5000, () => {
    console.log("Ex 7 is running");
});