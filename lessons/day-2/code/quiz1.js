'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const uuid = require('uuid/v4');

const app = express();

let users = [{
        id: '1c066fdc9-5f6f-4e05-8d4c-66dd73d3210e',
        name: 'Phil',
    },
    {
        id: '50bf253d-a758-445e-b597-80146a5604b0',
        name: 'Mary',
    },
    {
        id: 'ac99815f-1d56-4ab4-8630-a31045f61401',
        name: 'Bailey',
    },
    {
        id: 'f1fcbc30-6669-4438-9db3-e0fd9e028d96',
        name: 'Harper',
    }
];

router.route('/')
    .get((req, res) => {
        res.json({
            data: users
        });
    })

    .post((req, res) => {
        const {
            user
        } = req.body;

        //create unique user id for user
        user.id = uuid();

        users.push(user),

            res.status(201).send({
                data: [user]
            });
    });

router.route('/:id')
    .get((req, res) => {
        const {
            id
        } = req.params;

        const user = users.filter((user) => user.id === id);

        res.json({
            data: user
        });
    })

    .delete((req, res) => {
        console.log('HEY');
        const {
            id
        } = req.params;
        const nextUsers = users.filter((user) => user.id !== id);

        users = nextUsers;

        res.status(204).json({
            data: users
        });
    });


//Set body parser
app.use(bodyParser.json());

//Telling our express instance to pass this route to the router
app.use('/api/users', router);

app.listen(5000, () => {
    console.log('Quiz Question 1: is running...');
});