'use strict';

const User = require('./userModel').model;

exports.createUser = async (email, password) => {
    console.log("CREATE USER");
    console.log("Email: ", email);
    console.log("Password: ", password);

    const user = new User({ email, password })
    try {
      // save it
      const doc = await user.save()
      return doc;
    } catch(e) {}
}

exports.findUser = async (email, password) => {
    console.log("FIND USER");
    console.log("Email: ", email);
    console.log("Password: ", password);

    const user = await User.findOne({ email })

    try {
        if (user && user.password === password) {
            // if they match, send back the user
            return user;
        } else {
            // if they don't match, send back a 401
            return 'unauthorized';
        }
    } catch (err) {
        console.error(err);
        next (err);
    }
}