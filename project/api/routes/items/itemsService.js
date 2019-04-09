'use strict';

const Items = require('./itemsModel').model;

exports.listItems = async () => {

    const items = await Items.find({});

    return items;
};
