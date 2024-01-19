const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello, Server!');
});
server.listen(3000, () => { //listening on port
  console.log('Server listening on port 3000');
});

//Create a simple HTTP server using the http module that responds with "Hello, Server!" when accessed.
