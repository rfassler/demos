var http = require('http');

var text = process.argv[2];

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(text);
  res.end();
});

server.listen(80);

