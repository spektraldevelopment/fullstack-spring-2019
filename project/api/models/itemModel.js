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
    image: {
        type: String
    },
    manufacturer: {
        type: String
    },
    serial: {
        type: String
    },
    receipt: {
        type: String
    }
});

exports.model = mongoose.model('Item', itemSchema);
