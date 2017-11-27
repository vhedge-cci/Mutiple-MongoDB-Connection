/*
    Description : This model is for domain collection from the second database.
*/
var envConfig = require('../config/config.env.js');

var Mongoose = require('mongoose').Mongoose;
var instance1 = new Mongoose();
instance1.connect(envConfig.mongoUrlWarehouse, function (err) {
    if (err) {
        mongooseLog('Mongoose error: ' + err);
    }
});

var domain = instance1.model('domains', new instance1.Schema({},{strict : false}), 'domains');

module.exports = { Domain: domain };