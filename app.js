const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const users = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next) => {
   res.render('home', {pageTitle: 'Home'});
});

app.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'Users', users: users});
});

app.post('/add-users', (req, res, next) => {
    users.push({name: req.body.username})
    res.redirect('/users');
});



app.listen(3000);