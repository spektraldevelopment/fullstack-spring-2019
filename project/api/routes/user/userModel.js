'use strict';

const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    unique: true, // email is set to unique to prevent multiple signups with the same email
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

exports.model = model('User', userSchema)
