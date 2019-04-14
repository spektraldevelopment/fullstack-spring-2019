'use strict';

const Items = require('./itemsModel').model;

exports.listItems = async () => {

    const items = await Items.find({});

    return items;
};

exports.findItems = async (term) => {

    let items;

    if(term !== '') {

        console.log("Term is: ", term);

        items = await Items.find({ nameLower: { $regex: term.toString() }});
    } else {
        items = await Items.find({});
    }

    //const items = await Items.find({ name: { $regex: term.toString() }});
    return items;
};
