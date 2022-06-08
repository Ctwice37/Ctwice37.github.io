const express = require('express');
const path = require("path");
const app = express();
app.listen(8080, () =>
    console.log("Server running... port: 8080"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./", "", "form.html"));
});


app.get('/display', function(req, res){
    res.sendFile(path.join(__dirname, "./", "", "display.html"));
    
});

let obj = {}

app.post('/display', function(req, res){

    console.log(req.body);
    obj = req.body;
    
   
    for (const key in obj) {

        res.send( key + " " + obj[key]);
        }
        // res.send(text);
    })






