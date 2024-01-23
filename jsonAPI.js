const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello, JSON API!' }));
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
