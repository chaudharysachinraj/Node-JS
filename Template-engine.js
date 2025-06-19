const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine', 'ejs');

app.get('',(_, resp) => {
    resp.sendFile(`${publicPath}/home.html`);
})

app.get('/about',(_, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
})

app.get('/profile',(_, resp) => {
    const user ={
        name: 'Sachin Chaudary',
        age: 20,
        email: 'sachin001@gmail.com',
        country: 'India',
        skills: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'C', 'C++', 'Python']
    }
    resp.render('profile',{user});
})

app.get('/login',(_, resp) => {
    resp.render('login');
})

app.listen(5000);