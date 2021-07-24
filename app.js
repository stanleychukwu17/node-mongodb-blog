const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const session = require('express-session');
const MongoStore = new require('connect-mongo');
const flash = require('express-flash')

const db = require('./server/lib/db');
const config = require('./server/config/index')[process.env.NODE_ENV || 'development'];
const userRoutes = require('./server/routes/userRoutes')
const auth = require('./server/lib/auth')

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(flash());


//--start-- for connecting to the database & listening on port 8080
 db.connect(config.database.dsn)
 .then(() => {
    app.listen(8080);
}).catch((err) => { console.log(err) });
//--end--


//--start-- for creating of session for the current user and the authentication of the user anytime they login
app.use(cookieParser());
app.use(session({
    store: MongoStore.create({mongoUrl: config.database.dsn}),
    secret: '83938494884abjhdhu', resave: false, saveUninitialized: false
}));

app.use(auth.initialize);
app.use(auth.session);

app.use(function(req, res, next) {
    console.log(req.user, req.isAuthenticated())
    req.session.visits = req.session.visits ? req.session.visits + 1 : 1;
    next();
})
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