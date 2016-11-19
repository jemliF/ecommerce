var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var mongodb = require('../config/mongo');

var db = mongojs(mongodb, ['clients']);
var jsonParser = bodyParser.json();

router.get('/clients', function (req, res, next) {
    db.clients.find(function (err, clients) {
        if (err) {
            res.send(JSON.stringify(err));
        } else {
            res.json(clients);
        }
    });
});

router.get('/clients/:id', function (req, res, next) {
    db.clients.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, client) {
        if (err) {
            res.send(JSON.stringify(err));
        } else {
            res.json(client);
        }
    });
});

router.post('/clients', jsonParser, function (req, res, next) {
    var client = req.body;
    console.log(client);
    if (!client.firstname || !client.lastname || !client.password || !client.email) {
        res.status(400);
        res.json({
            "error": "Invalid Data!"
        });
    } else {
        db.clients.save(client, function (err, result) {
            if (err) {
                res.send(JSON.stringify(err));
            } else {
                res.json(result);
            }
        });
    }
});

router.put('/clients/:id', jsonParser, function (req, res, next) {
    var client = req.body;
    console.log(client);
    if (!client.firstname || !client.lastname || !client.password || !client.email) {
        res.status(400);
        res.json({
            "error": "Invalid Data!"
        });
    } else {
        db.clients.update({
            _id: mongojs.ObjectId(req.params.id)
        }, client, function (err, result) {
            if (err) {
                res.send(JSON.stringify(err));
            } else {
                res.json(result);
            }
        });
    }
});

router.delete('/clients/:id', function (req, res, next) {
    db.todos.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function (err, result) {
        if (err) {
            res.send(JSON.stringify(err));
        } else {
            res.json(result);
        }
    });
});

module.exports = router;