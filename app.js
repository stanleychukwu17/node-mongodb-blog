const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.listen(8080);

app.get('/', function(req, res) {
    // app.render('index', {'title':'john'});
    res.render('index', {'title':'john'});
});