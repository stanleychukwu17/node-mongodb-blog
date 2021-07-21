const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.json());

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

// for new blog page-11
app.get('/new-blog', function(req, res) {
    res.render('newBlog', {'title':'john'});
});

// for saving of new blog post to our mongodb
app.post('/new-blog-post', function(req, res) {
    res.json({'msg':'okay'})
});

// for the login-and logout page