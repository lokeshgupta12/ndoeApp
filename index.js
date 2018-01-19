// Please Install Express to Taking Instance Of Express Framework
var express = require("express");
// Please Install body-parser For Post Method
var bodyParser = require("body-parser");
// Calling Of express
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// use Mongodb for database
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
// url that our web services hit
var url = "mongodb://localhost:27017";
// all the method on this "methos file"
var methodInstance = require("./method")
// connect url
MongoClient.connect(url, methodInstance.mongoDbConnect)
// GetDataBt Its name
app.get("/getDataByName/:name", methodInstance.getDataByName);
// submitt from data
app.post("/submit", methodInstance.submitData);
// start node servcer
app.listen(8080, function() {
   console.log("8080 server start")
})