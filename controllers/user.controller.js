var User = function () {
    var User = require('../models/users.model').User;
    var Domain = require('../models/domain.model').Domain;
    var Logs = require('../models/log.model').Logs;
    var DepartmentOfficerDailyScore = require('../models/departmentOfficerDailyScore.model').DepartmentOfficerDailyScore;


    //...search user based on Email ID
    this.getUser = function (req, res) {        
        User.find({ }, { }).lean().exec(function (err, usersList) {            
            return res.send({ users: usersList });
        });
    };

    this.getDomain = function (req, res) {        
        Domain.find({ }, { }).lean().exec(function (err, domains) {            
            return res.send({ domains: domains });
        });
    };

    this.getLogs = function (req, res) {       
        Logs.find({ }, { }).limit(10).lean().exec(function (err, logs) {            
            return res.send({ logs: logs });
        });
    };

    this.getDepartmentOfficerDailyScores = function (req, res) {       
        DepartmentOfficerDailyScore.find({ }, { }).limit(10).lean().exec(function (err, deptOffDailyGoals) {            
            return res.send({ deptOffDailyGoals : deptOffDailyGoals });
        });
    };

}

module.exports.User = User;