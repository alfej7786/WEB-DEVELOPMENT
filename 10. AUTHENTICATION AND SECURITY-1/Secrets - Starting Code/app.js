//jshint esversion:6
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bcrypt = require("bcrypt");
const saltRound = 10;

const app = express();
console.log(process.env)


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://127.0.0.1:27017/userDB', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});


const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res){
  res.render("home");
});

app.get("/login",  function(req, res){
  res.render("login");
})

app.get("/register", function(req,res) {
    res.render("register");
});

app.post("/register", function(req, res){

    bcrypt.hash(req.body.password, saltRound, function(err, hash) {
        // Store hash in your password DB.
        const newUser = new User({
          email: req.body.username,
          password: hash
        });
      
        newUser.save(function(err) {
          if (err) {
            console.log(err);
          } else {
            res.render("secrets");
          }
        });
    });
});

app.post("/login", function(req, res){
    const email = req.body.username;
    const password = md5(req.body.password);

    User.findOne({email: username} , function(err, foundUser) {
      if (err) {
        console.log(err);
      } else {
          if (foundUser) {
            if (foundUser.password === password) {
              res.render("secrets");
            }
          }
      }
    });
  });


app.listen(8080, function(){
    console.log('Express server listening on port 8080');
})
