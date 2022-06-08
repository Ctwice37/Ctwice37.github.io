const express = require('express');
const app = express();
var path = require("path")
var ejs = require("ejs")
app.listen(8080, () =>
             console.log("Server running... port: 8080"));




app.set('view engine', 'html');
app.engine('html', ejs.renderFile);



app.get("/admin", function(req, resp){
    console.log("Admin Landing")
    resp.render("myFile", {list: ["apple", "banana", "grape"]});
})