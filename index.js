'use strict';
var express = require('express');
var app = express();

app.set("port", process.env.PORT || 8080);

app.get('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "GET" }
   res.end(JSON.stringify(response));
})
app.get('/:id', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is GET method with id=" + req.params.id + "." }
   res.end(JSON.stringify(response));
})
app.post('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "POST" }
   res.end(JSON.stringify(response));
})
app.put('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "PUT" }
   res.end(JSON.stringify(response));
})
app.delete('/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "DELETE" }
   res.end(JSON.stringify(response));
})

var server = app.listen(app.get("port"), function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Server Started at http://", host, port)
})