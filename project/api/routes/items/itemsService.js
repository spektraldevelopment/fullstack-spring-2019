'use strict';

//const items = require('./itemsModel');

let { items } = require('../../utils/mock-db');

exports.listItems = () => {
    console.log("#### List Items: ");
    console.log(items);
    return items;
};
