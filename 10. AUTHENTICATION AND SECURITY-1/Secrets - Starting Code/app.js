//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://127.0.0.1:27017/userDB', { useNewUrlParser: true });

const userSchema = {
  email: String,
  password: String
};

const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res){
  res.render("home");
});

app.get("/login",  function(req, res){
  res.render("login");
})

app.get("/rigister", function(req,res) {
    res.render("rigister");
});

app.post("/register", function(req, res){
  const newUser = new User({
    email: req.body.username,
    password: req.body.password
  });
})


app.listen(8080, function(){
    console.log('Express server listening on port 8080');
})
