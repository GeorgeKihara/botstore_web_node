var express = require('express');
var router = express.Router();

var app = express();

app.get('/', function(req, res, next){
    res.render('index.ejs');
});

app.get('/upload', function(req, res, next){
    res.render('upload.ejs');
});

module.exports = app;