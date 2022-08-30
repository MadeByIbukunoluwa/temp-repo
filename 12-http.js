const http = require("http");

// The create server method accepts a callback function which takes in two parameters
// They are mostly called "req" and "res" the req represnts the incoming request while res represents the response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage ");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else
    res.end(`
<h1>0ops</h1>
<p> We can't seeem to find that you are looking for </p>
<a href = "/"> back home </a>`);
});

server.listen(5000);

// Page switch to about is not working
