var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var aylien = require("aylien_textapi")

const dotenv = require('dotenv')
dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

app.use(express.static('dist'))
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/article', function (req, res){
    textapi.sentiment({
        url: req.body.text
    },function(error, response){
        res.send(response);
    });
})

module.exports = app;