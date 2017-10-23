const express = require('express');
const bodyParser  = require('body-parser');
const request = require('request');
const database = require('./configs/database');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(database.database);
mongoose.connection.on('connected',function () {  
    console.log('connected to db: ' + database.database);
  }); 

var index = require('./routes/index');
  
var port = 4000;
  
//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
  
//Set Static Folder
app.set(express.static(path.join(__dirname,'angular')));
  
//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
  
app.use('/', index);
  
app.listen(port, function(){
     console.log('server started on port '+port);
});