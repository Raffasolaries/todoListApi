const config = require('./config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/Tododb', { useCreateIndex: true, useNewUrlParser: true });

module.exports = {
    User: require('../users/user.model')
};