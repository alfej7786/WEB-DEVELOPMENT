const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res) {
    // console.log(req.body.cityName);
    const query = req.body.cityName;
    const apikey = "1cb4c9feff2c6a7e121acf9e6f491ddc";
    const unit = "matric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid="+ apikey + "&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on('data', function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            // const icon = weatherData.weather[0].icon;
            const imageURL = "https://cdn.you.com/img/app-assets/app-weather/weather/15.svg"

            res.write("<p>The weather is currently " + description + "</p>")
            res.write("<h1>The temperature in " + query + " is "+ temp + " °C</h1>" );
            res.write("<img src = "+imageURL+" >");
            res.send();
        })
    })
});

app.listen(8080, function() {
    console.log('Server listening on port 8080');
});

