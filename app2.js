var http = require('http');

var server = http.createServer(function(req, res){
  console.log('Firing' + req);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Herro frends.');
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3k');
