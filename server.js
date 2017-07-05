const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body><h1>Why not</h1></body></html>');
}).listen(3000, () => console.log('server work'));
