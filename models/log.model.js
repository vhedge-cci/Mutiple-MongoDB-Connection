/*
    Description : This model is for log collection.
*/
var mongoose = require('mongoose');

var logModel = mongoose.model('log', new mongoose.Schema({},{strict : false}), 'logs');

module.exports = { Logs: logModel };