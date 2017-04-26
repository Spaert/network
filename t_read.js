var fs = require('fs');
var fd = fs.openSync("testfile1M.txt","r");
const buf = new Buffer(1024);
fs.readSync(fd, buf, 0, 1024, 0);

var len = buf.length;
fs.closeSync(fd);
console.log("content: " +　buf);
console.log("done");