'use strict';

const express = require('express');
const app = express();

// const options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//       res.set('x-timestamp', Date.now())
//     }
//   };

//Serve content from a folder instead of a specific route
app.use('/', express.static('public'));

app.listen(5000, () => {
    console.log('Ex 6 is running...');
})