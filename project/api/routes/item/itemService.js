'use strict';

const Item = require('./itemModel').model;

exports.createItem = (item) => {

    const newItem = new Item(item);
    //Save model to DB
    newItem.save()
};

exports.editItem = (id, update) => {

    console.log("UPDATE IS: ", update);

    Item.findOneAndUpdate({ _id: id }, update)
        .then((updated) => {
            console.log("UPDATED ITEM: ", updated);
        })

    // console.log("EDIT THIS ITEM: ", item);
    // console.log("Item to update: ", update);

    // return item;
}

exports.getItem = async (id) => {
    const item = await Item.findOne({ _id: id });
    return item;
}

exports.deleteItem = (id) => {
    Item.findByIdAndDelete(id)
        .then(() => Item.findOne({ _id: id }))
};

