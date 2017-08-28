var express = require('express');
var router = express.Router();

router.use(express.static(__dirname+'/../static'));
router.use(express.static(__dirname+'/../assets'));
router.use('/templates',express.static(__dirname+'/../templates'));

module.exports = router;