'use strict';

const express = require('express');
const router = express.Router();

const itemService = require('./itemService');

router.route('/create')
    .post(async (req, res, next) => {
        try {

            res.status(201).send({
                item: await itemService.createItem(req.body)
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

router.route('/edit/:id')
    .post(async (req, res, next) => {
        try {

            const { id } = req.params;

            res.status(201).send({
                item: await itemService.editItem(id, req.body)
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

router.route('/get/:id')
    .get(async (req, res, next) => {
        try {

            const { id } = req.params;

            res.status(200).send({
                item: await itemService.getItem(id)
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

router.route('/delete/:id')
    .delete(async (req, res, next) => {
        try {

            const { id } = req.params;

            res.status(200).send({
                item: await itemService.deleteItem(id)
            });

        } catch (err) {
            console.error(err);
            next(err);
        }
    });

module.exports.router = router;