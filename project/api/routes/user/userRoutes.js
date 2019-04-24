'use strict';

const express = require('express');
const router = express.Router();

const userService = require('./userService');

router.route('/new')
    .post(async (req, res, next) => {
        try {

            const { email, password } = req.body

            res.status(201).send({
                user: await userService.createUser(email, password)
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

router.route('/login')
    .post(async (req, res, next) => {
        try {

            const { email, password } = req.body;
            const user = await userService.findUser(email, password);

            if(user === 'unauthorized') {
                res.status(401).send({
                    user: {}
                });
            } else {
                res.status(200).send({
                    user
                });
            }
        } catch (err) {
            console.error("GOT AN ERROR: ", err);
            next(err);
        }
    });

module.exports.router = router;