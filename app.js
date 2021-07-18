const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.listen(8080);

// for home page
app.get('/', function(req, res) {
    // app.render('index', {'title':'john'});
    res.render('index', {'title':'john'});
});

// for about page
app.get('/about-us', function(req, res) {
    res.render('about', {'title':'john'});
});

// for new blog page
app.get('/new-blog', function(req, res) {
    res.render('newBlog', {'title':'john'});
});