var express = require('express');
var router = express.Router();

var app = express();

app.get('/', function(req, res, next){
    res.render('index.html');
});

app.get('/upload', function(req, res, next){
    res.render('upload.html');
});

module.exports = app;