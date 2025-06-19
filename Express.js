const express = require('express');
const app = express();

app.get('',(req, res) => {
    res.send('<h1>Hello, This is Home Page</h1>');
});

app.get('/about',(req, res) => {
    res.send(`
        <input type="text" placeholder="Enter your name" />
        <button>Click Me</button>
        `);
});

app.get('/help',(req, res) => {
    res.send({
        name:'Sachin',
        email:'sachin@gmail.com'
    });
});

app.listen(5000);

