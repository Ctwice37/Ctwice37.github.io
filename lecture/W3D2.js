const express = require('express'); //require it
const app = express();              //instantiate
 app.listen(3000, () =>             //start it
  { console.log('Your Server is running on 3000'); })


  app.get("/", function(req, res, next){            //landing page
      res.send("Welcome")
  })

  
//   app.get("/add", function(req, res, next){        //add page
//     res.send("<h1>Welcome to add</h1>")
// })

// app.get('/add', (req, res, next) => { console.log('In the middleware!'); 
// res.send('');
//  });

 app.get("/add",function(req,res,next){                 //handler -- get info from server //request
    console.log('In the middleware!');
    res.send('<form action="/product" method="post"><input name="title"><button type="submit">Submit</button></form>'); //response
   });


   app.post("/product", function(req,res,next){         //handler -- send information to the server, more secure
       console.log("in the Post")
   })


//    app.get("/add",function(req,res,next){        
//        let count = 0;
//        count++;

//     console.log("count: " + count);
//     res.send('<h1>count</h1>');
//    });

app.get("/add",function(req,res,next){                 //handler -- get info from server
    console.log('In the middleware!');
    res.send('<form action="/product" method="post"><input name="title"><button type="submit">Submit</button></form>');
   });

