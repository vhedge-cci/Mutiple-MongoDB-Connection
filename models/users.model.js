/*
    Description : This model is for users collection.
*/
var mongoose = require('mongoose');
var envConfig = require('../config/config.env.js');

var user = mongoose.model('users', new mongoose.Schema({},{strict : false}), 'users');

module.exports = { User: user };