'use strict';

const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json({
            path: req.path,
            methods: req.method,
            baseUrl: req.baseUrl
        });
    })

module.exports.router = router;