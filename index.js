var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var products = require('./routes/products');
var clients = require('./routes/clients');
var orders = require('./routes/orders');
//var cartLines = require('./routes/cartlines');

var app = express();

app.use('/api/v1/', clients);
app.use('/api/v1/', products);
app.use('/api/v1/', orders);

app.use(bodyParser.json());

app.listen(8080, function () {
    console.log('Server listen on port 8080');
});