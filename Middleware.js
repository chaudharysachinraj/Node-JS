const express = require('express');
const app= express();

const reqFilter= (req, resp, next)=>{
    if(!req.query.age){
        resp.send('Please provide age.');
    }
    else if(!req.query.age < 18){
        resp.send('You cannot access this page.');
    }
    else{
        next();
    }
}

app.use(reqFilter)

app.get('/',(req, resp)=>{
resp.send('Welcome to Home Page');
})

app.get('/user',(req, resp)=>{
    resp.send('Welcome to user Page.')
})

app.listen(5000);