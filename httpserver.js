var ip = "127.0.0.1";
port = 8080;
http = require('http');
var fs = require('fs');
var cnt=0;
var fd = fs.readFileSync("./helloworld.html", "utf-8")
function onRequest(request, response) {
    cnt++;
    console.log("Request received. cnt="+cnt);
    response.writeHead(200, {"Content-Type": "html"});
    response.write(fd);
    response.end();
}
http.createServer(onRequest).listen(port, ip);
console.log("My server has started.");
