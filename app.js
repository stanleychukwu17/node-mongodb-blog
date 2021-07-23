const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')

const db = require('./server/lib/db');
const config = require('./server/config/index')[process.env.NODE_ENV || 'development'];
const userRoutes = require('./server/routes/userRoutes')

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.json());


//--start-- for connecting to the database & listening on port 8080
 db.connect(config.database.dsn)
 .then(() => { app.listen(8080); })
 .catch((err) => { console.log(err) });
//--end--

// for home page
app.get('/', function(req, res) {
    // app.render('index', {'title':'john'});
    res.render('index', {'title':'john'});
});

// for about page
app.get('/about-us', function(req, res) {
    res.render('about', {'title':'john'});
});

// for new blog page-11
app.get('/new-blog', function(req, res) {
    res.render('newBlog', {'title':'john'});
});

// for saving of new blog post to our mongodb
app.post('/new-blog-post', function(req, res) {
    res.json({'msg':'okay'})
});

app.use('/users/', userRoutes)