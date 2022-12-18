const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(res, req){
    res.send("Hello World")
})

app.listen(8080, function() {
    console.log("listening on port 8080");
})