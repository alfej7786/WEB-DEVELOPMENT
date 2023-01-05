const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const date = require(__dirname + "/date.js");

const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({encoded : true}));

app.use(express.static("public"));

app.get("/", function(req, res){
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options)
    
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(8080, function(){
    console.log('listening on port 8080');
});