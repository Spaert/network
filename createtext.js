var fs = require('fs');
var fd = fs.openSync("testfile1M.txt","w+");

var NotDone = 1;
var K = 1024;
var M = K*K, cnt = 1, str = '1';
var G = M*M;
<<<<<<< HEAD
var SizeLimit = 1*M;
=======
var SizeLimit = 100*M;
>>>>>>> 7eaf27df341de035440b76998d5061bc8bd02cc8
while (NotDone) {
  cnt++;
  str += ','+cnt;
  if(str.length >= SizeLimit) { 
    NotDone = 0; 
  }
}

fs.writeSync(fd,str);
console.log("done");
fs.closeSync(fd);
