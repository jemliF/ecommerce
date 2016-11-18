var express = require('express');
var mongojs = require('mongojs');
var router = express.Router();
var mongodb = require('../config/mongo');

var clients = mongojs(mongodb, ['products']);

module.exports = router;