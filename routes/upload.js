var express = require('express');
var router = express.Router();

router.get('/upload', function(req, res, next){
    res.render('upload.html');
});

module.exports = router;