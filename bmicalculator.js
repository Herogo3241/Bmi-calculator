const express = require('express');

const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req,res){

    res.sendFile(__dirname + "/index.html");
});


app.post("/",  function(req,res){

    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var result = weight / (height * height)

    res.send("The BMI is " + result);
});


app.listen(1000, function(){
    console.log("server started on port 1000");
});