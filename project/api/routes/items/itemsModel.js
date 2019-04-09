'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemsSchema = exports.schema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
    }
});

exports.model = mongoose.model('Items', itemsSchema);