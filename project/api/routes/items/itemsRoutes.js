'use strict';

const express = require('express');
const router = express.Router();

const itemsService = require('./itemsService');

router.route('/get')
    .get(async (req, res, next) => {
        try {
            res.status(200).send({
                items : await itemsService.listItems()
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    })

router.route('/find/')
    .get(async (req, res, next) => {
        try {
            res.status(200).send({
                items : await itemsService.listItems()
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    })

router.route('/find/:term')
    .get(async (req, res, next) => {
        try {

            const { term } = req.params;

            res.status(200).send({
                items : await itemsService.findItems(term.toLowerCase())
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    })

module.exports.router = router;