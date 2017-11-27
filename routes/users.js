var express = require('express');
var router = express.Router();
var UserCtrl = new(require('../controllers/user.controller')).User();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', UserCtrl.getUser);

router.get('/domain', UserCtrl.getDomain);

router.get('/logs', UserCtrl.getLogs);

router.get('/departmentOfficerDailyScores', UserCtrl.getDepartmentOfficerDailyScores);

module.exports = router;
