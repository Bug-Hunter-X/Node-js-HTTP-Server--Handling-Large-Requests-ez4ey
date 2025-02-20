const http = require('http');

const server = http.createServer({
  maxHeadersSize: 1024 * 1024 // 1MB
}, (req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});