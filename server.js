const express = require('express');
const app = express(); //create an instance of express
const PORT = 3000;
const HOST = '127.0.0.1';





app.get('/',(req,res)=>{
    res.status(200);
    res.send("welcome to root url of server");
})

//respond to get request on the root (/get),the applications home page
app.get('/get',(req,res)=>{
    res.status(200);
    res.send("Got a get request");
 });
 //Responce to post request on the route root(/post),the application s home page
 app.post('/get',(req,res)=>{
    res.status(200);
    res.send("Got a post request");
 });
 //Respond to put request on the route root(/put),the applications home page
 app.get('/put',(req,res)=>{
    res.status(200);
    res.send("Got a put request");
 });
 //Respond to put request on the route root(/delete),the applications home page
 app.get('/delete',(req,res)=>{
    res.status(200);
    res.send("Got a delete request");
 });

app.listen(PORT,HOST,(error)=>{
    if(!error)
    console.log("serve ris  running succesfully,and app is listening to port"+PORT);
else
console.log("error server cant start",error);
});
 