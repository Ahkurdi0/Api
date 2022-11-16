const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=18d04251acf921cfff298c7b6a9a3773&units=metric";
    https.get(url, function (response) {

            response.on("data", function (data) {
                const weatherData = JSON.parse(data);
                const des = weatherData.weather[0].description;
                const tem = weatherData.main.temp;


                res.write("<h1> tempreture is  "+tem+" </h1>");
                res.write("<p> weather city is "+des+" </p>");
                res.send();

        })
    })
});

app.listen(3000, function () {
    console.log("local host is running");
})