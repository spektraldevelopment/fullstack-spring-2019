'use strict';

const items = require('./itemsModel');

exports.listItems = () => {
    return [
        {
            name: 'MacBookPro',
            manufacturer: 'Apple',
            serial: '#f837g4f8734gb8f3478f',
            imageUrl: 'http://via.placeholder.com/1600x500',
            receiptImageUrl: 'http://via.placeholder.com/500x100',
            serialImageUrl: 'http://via.placeholder.com/360x640',
            thumbnailUrl: 'http://via.placeholder.com/100x100'
        },
        {
            name: '42\" TV',
            manufacturer: 'Sharp',
            serial: '#u39fbb489f893h4f4hffh89',
            imageUrl: 'http://via.placeholder.com/1600x500',
            receiptImageUrl: 'http://via.placeholder.com/500x100',
            serialImageUrl: 'http://via.placeholder.com/360x640',
            thumbnailUrl: 'http://via.placeholder.com/100x100'
        },
        {
            name: 'Refrigerator',
            manufacturer: 'Samsung',
            serial: '#89u98juw89eud89wuedd98wueu9ew',
            imageUrl: 'http://via.placeholder.com/1600x500',
            receiptImageUrl: 'http://via.placeholder.com/500x100',
            serialImageUrl: 'http://via.placeholder.com/360x640',
            thumbnailUrl: 'http://via.placeholder.com/100x100'
        }
    ]
};
