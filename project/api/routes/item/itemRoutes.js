'use strict';

const express = require('express');
const router = express.Router();

const itemService = require('./itemService');

router.route('/create')
    .post(async (req, res, next) => {
        try {

            const { id } = req.params;

            res.status(201).send({
                item: await itemService.createItem()
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

module.exports.router = router;