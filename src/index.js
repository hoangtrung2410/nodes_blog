const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine setup
app.engine('hbs', handlebars.engine({extname:'.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log("PATH:", path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/tintuc', (req, res) => {
    res.render('news');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
