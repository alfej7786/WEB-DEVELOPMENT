const express = require('express');
const app = express();

app.get('/', function(req, res) {
    // console.log(req);
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact Me at: aasavaya@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("My name is Alfej Savaya, this is my first Express server");
}); 

app.listen(8080, function(){
    console.log('listening on 8080');
});