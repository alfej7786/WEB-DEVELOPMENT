//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/login",  function(req, res){
  res.render("login");
})

app.get("/rigister", function(req,res) {
    res.render("rigister");
});


app.listen(8080, function(){
    console.log('Express server listening on port 8080');
})
