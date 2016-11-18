var express = require('express');
var mongojs = require('mongojs');
var router = express.Router();
var mongodb = require('../config/mongo');

var db = mongojs(mongodb, ['clients']);

module.exports = router;