const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', ejs);

app.get('/', (req, res) => {
    console.log('here');
    res.render('index.ejs');
})
app.listen(3000);
