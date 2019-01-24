var http = require('http');

var text = process.argv[2];

var server = http.createServer(function (req, res) {

	http.get(text, (res1) => {
		const { statusCode } = res1;
		const contentType = res1.headers['content-type'];

		let error;
		
		res1.setEncoding('utf8');
		let rawData = '';
		res1.on('data', (chunk) => { rawData += chunk; });
		res1.on('end', () => {
			try {
			  
			  res.writeHead(200, {'Content-Type': 'text/html'});
			  res.write(rawData);
			} 
			catch (e) {
			  res.write(e.message);
			}
			res.end();
		});
	}).on('error', (e) => {
		console.error(`Got error: ${e.message}`);
	});
});

server.listen(80);

