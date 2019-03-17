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
        }
    ]
};

// exports.getBook = async (bookId) => {

// };

// exports.createBook = async (bookData) => {
//   // 1. Create a book instance
//   const book = new Book(bookData);
//   try {
//     // 2. Save book to database
//     const doc = await book.save();
//     // 3. return with created book
//     return doc;
//   } catch (e) {
//     // 4. If error, throw and controller will catch
//     throw e;
//   }
};
