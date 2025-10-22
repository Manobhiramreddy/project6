const http = require('http');
const PORT = process.env.PORT || 2020;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello from Project6! CI/CD is working perfectly at ' + new Date().toLocaleString() + '\n');
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
