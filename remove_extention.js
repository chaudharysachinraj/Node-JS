const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.get('',(_, resp) => {
    resp.sendFile(`${publicPath}/home.html`);
})

app.get('/about',(_, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
})

app.get('*',(_, resp) => {
    resp.sendFile(`${publicPath}/PageNotFound.html`);
})

app.listen(5000);