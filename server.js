const express = require('express');
const path = require('path');
const bodyParser  = require('body-parser');
const request = require('request');
const database = require('./configs/database');
const mongoose = require('mongoose');
const mongojs = require('mongojs');

const app = express();
const db = mongojs(database.database);
db.on('connected',function () {  
    console.log('connected to db: ' + database.database);
  }); 

var index = require('./routes/index');
  

  
//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

  
//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
  
app.use('/', index);

app.listen((process.env.PORT || 5000));