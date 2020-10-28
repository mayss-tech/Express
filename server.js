const express=require('express');
const cors=require('cors')
const bodyParser = require("body-parser");

let users=[]
const app=express();
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    let date = new Date()
    res.send(date.toString());
    next();
});

//   app.get('/', function(req,res){  
//     res.send('heloo');
    
// });
// app.post('/',function(req,res){
// let body=req.body
// users=[...users,body]
// res.send(body)
// let time = new Date()
// res.send(time.getHours()) // renvoie l'heure
// res.send(time.toDateString()) //renvoie date 
// res.send(time.toTimeString()) // renvoie l'heure/min/sec

// })
const port=4000;
app.listen(port,()=>console.log(`server started on port ${port}`));
