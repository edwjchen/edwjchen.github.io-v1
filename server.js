var http = require('http'),
    express = require('express'),
    path = require('path');

var app = express();

app.use(express.static(__dirname));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/test', function(req, res){
  res.sendFile('assets/html/test.html', { root: __dirname });
})


app.get('/lagrange', function(req, res){
  res.sendFile('assets/html/lagrange.html', { root: __dirname });
})

var server = http.createServer(app);

server.listen(1500);