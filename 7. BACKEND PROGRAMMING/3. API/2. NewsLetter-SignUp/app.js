

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { url } = require("inspector");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/signup.html');
})

app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.sName;
    const email = req.body.email;
    
    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/lists/fd5e193cf5"
    const options = {
        method: "POST",
        auth: "alfej:8afade9fddbeab5d29ea349f2c14887a-us21"
    }

    const request = https.request(url, options, function(response) {
        if (response.statusCode == 200){
            res.sendFile(__dirname + '/success.html');
        } else {
            res.sendFile(__dirname + '/failure.html');
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });
    });
    request.write(jsonData);
    request.end();
});

app.post('/failure', function(req,res) {
    res.redirect('/');
});

app.listen(process.env.PORT || 8080, function() {
    console.log("listening on port 8080");
});

// API KEY
// 8afade9fddbeab5d29ea349f2c14887a-us21

// Audience ID
// fd5e193cf5