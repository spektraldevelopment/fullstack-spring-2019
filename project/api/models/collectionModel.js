'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const { schema: itemSchema } = require('./itemModel');

const collectionSchema = exports.schema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
    },
    items: [itemSchema]
});

exports.model = mongoose.model('Collection', collectionSchema);