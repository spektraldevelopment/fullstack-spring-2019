'use strict';

const Item = require('./itemModel').model;

exports.createItem = () => {

    const newItem = new Item({
        name: 'MacBookPro',
        manufacturer: 'Apple',
        serial: '#f837g4f8734gb8f3478f',
        imageUrl: 'http://via.placeholder.com/1600x500',
        receiptImageUrl: 'http://via.placeholder.com/500x100',
        serialImageUrl: 'http://via.placeholder.com/360x640',
        thumbnailUrl: 'http://via.placeholder.com/100x100'
    });
    
    //Save model to DB
    newItem.save()
};

