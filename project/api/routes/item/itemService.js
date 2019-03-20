'use strict';

//const item = require('./itemModel');

let { items } = require('../../utils/mock-db');

exports.deleteItem = (id) => {
    const newItemList = items.filter((item) => item.id !== id);

    //set items as new item list
    items = newItemList;

    console.log("#### Delete item: ");
    console.log(items);

    return items;
};
