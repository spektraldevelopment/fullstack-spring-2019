'use strict';

const express = require('express');
const router = express.Router();

const itemService = require('./itemService');

router.route('/delete/:id')
    .delete(async (req, res, next) => {
        try {

            const { id } = req.params;

            res.status(200).send({
                items: await itemService.deleteItem(id)
            });
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

module.exports.router = router;