var http = require('http');
var request = require('request');

var text = process.argv[2];

var server = http.createServer(function (req, res) {

	request(text, function (error, response, body) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(body);
		res.end();
	});

});

server.listen(80);

