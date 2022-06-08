const express = require('express');
const path = require("path");
const app = express();
app.listen(8080, () =>
             console.log("Server running... port: 8080"));



app.get('/', function(request, response){
   response.sendFile(path.join(__dirname, "", "form.html"));
});

app.post('/',  function(request, response){

    response.redirect("/display.html")
})


app.get('/display', function(request, response){
    response.sendFile(path.join(__dirname, "", "display.html"));
 });


