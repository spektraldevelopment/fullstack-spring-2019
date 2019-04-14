'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = exports.schema = new Schema({
    id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String
    },
    nameLower: {
        type: String
    },
    manufacturer: {
        type: String
    },
    serial: {
        type: String
    },
    cost: {
        type: String
    },
    imageUrl: {
        type: String
    },
    receiptImageUrl: {
        type: String
    },
    serialImageUrl: {
        type: String
    },
    thumbnailUrl: {
        type: String
    },
});

exports.model = mongoose.model('Item', itemSchema);
