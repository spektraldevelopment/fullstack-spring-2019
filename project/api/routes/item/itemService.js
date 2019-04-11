'use strict';

const Item = require('./itemModel').model;

exports.createItem = (item) => {

    const newItem = new Item(item);
    //Save model to DB
    newItem.save()
};

exports.deleteItem = (id) => {
    Item.findByIdAndDelete(id)
        .then(() => Item.findOne({ _id: id }))
};

