// Create a simple HTTP server using the http module that parses and logs query parameters from a URL

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log('Query Parameters:', parsedUrl.query);
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
