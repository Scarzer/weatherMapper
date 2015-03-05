var express     = require('express');
var mongoose    = require('mongoose');
var async       = require('async');
var fs          = require('fs');

var app         = express();

// Empty response stub
app.get('/', function(req, res){
    res.end();
});

app.listen(8088);


