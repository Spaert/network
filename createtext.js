var fs = require('fs');
var fd = fs.openSync("testfile1M.txt","w+");

var NotDone = 1;
var K = 1024;
var M = K*K, cnt = 1, str = '1';
var G = M*M;
var SizeLimit = 20*M;
while (NotDone) {
  cnt++;
  str += ','+cnt;
  if(str.length >= SizeLimit) { 
    NotDone = 0; 
  }
}
str += "\n";
fs.writeSync(fd,str);
console.log("done");
fs.closeSync(fd);