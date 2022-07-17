var express = require('express');
var app = express();
var path = require("path");
var fs = require("fs");

app.use(express.static(path.join(__dirname,'publick')));

app.get('/', function (req , res){
    res.sendFile(path.join(__dirname+ '/index.html'));
});

app.get('/hello', function (req , res){
    console.log("calling rest api");
    var person={firstname:'ravi', lastname:'Tambade', age:'47'};
    res.send(person);
});
var server = app.listen(8081, function(){

    console.log("Express app listning at 8081");
});