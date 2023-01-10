//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO
mongoose.connect('mongodb://127.0.0.1:27017/wikiDB', { useNewUrlParser: true });


app.listen(8080, function() {
  console.log("Server started on port 8080");
});