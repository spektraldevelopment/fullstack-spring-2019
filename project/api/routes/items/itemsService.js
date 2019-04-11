'use strict';

const Items = require('./itemsModel').model;

exports.listItems = async () => {

    const items = await Items.find({});

    return items;
};

exports.findItems = async (term) => {

    console.log('Search Term: ', term);

    const items = await Items.find({ name: { $regex: term.toString() }});
    return items;
};
