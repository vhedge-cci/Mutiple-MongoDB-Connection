/*
    Description : This model is for departmentOfficerDailyScore collection from the third database.
*/
var envConfig = require('../config/config.env.js');

var Mongoose = require('mongoose').Mongoose;
var instance1 = new Mongoose();

instance1.connect(envConfig.mongoUrlWarehouse2, function (err) {
    if (err) {
        mongooseLog('Mongoose error: ' + err);
    }
});

var departmentOfficerDailyScore = instance1.model('departmentOfficerDailyScores', new instance1.Schema({},{strict : false}), 'departmentOfficerDailyScores');

module.exports = { DepartmentOfficerDailyScore: departmentOfficerDailyScore };