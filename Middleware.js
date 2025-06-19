const express = require('express');
const reqFilter = require('./middlewares.js');
const app= express();
const route = express.Router();


// app.use(reqFilter)

route.use(reqFilter);
app.get('/',(req, resp)=>{
resp.send('Welcome to Home Page');
})

app.get('/user', (req, resp)=>{
    resp.send('Welcome to user Page.')
})

route.get('/contact',(req, resp)=>{
    resp.send('Welcome to user Page.')
})
app.use('/', route);

app.listen(5000);