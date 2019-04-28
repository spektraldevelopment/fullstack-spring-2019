'use strict';

exports.URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/coverage';
exports.PORT = process.env.PORT || 5000;
exports.SECRET = process.env.SECRET || 'super-secret-passphrase';
