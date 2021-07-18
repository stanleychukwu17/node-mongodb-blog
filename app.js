const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.listen(8080);

app.get('/', function(req, res) {
    console.log('for home page again');
    // app.render('index', {'title':'john'});
    res.render('index', {'title':'john'});
});