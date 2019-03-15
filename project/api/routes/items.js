'use strict';

const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json({
            items : [
                {
                    name: 'MacBookPro',
                    manufacturer: 'Apple',
                    serial: '#f837g4f8734gb8f3478f',
                    imageUrl: 'http://via.placeholder.com/1600x500',
                    receiptImageUrl: 'http://via.placeholder.com/500x100',
                    serialImageUrl: 'http://via.placeholder.com/360x640',
                    thumbnailUrl: 'http://via.placeholder.com/100x100'
                }
            ]
        });
    })

module.exports.router = router;