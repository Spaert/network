var fs = require('fs'); 
// var fd = fs.openSync("testfile1M.txt","r");
// var M = 1024*1024; 
// var BufSize = 3*M; 
// const buf = new Buffer(BufSize); 
// fs.readSync(fd,buf,0,BufSize,0); 
// var len = buf.length; 
// fs.closeSync(fd); 
// console.log("Done reading text file, length=" + len); 
fs.stat(("./testfile1M.txt", function(err, stat) {
  if(err) {
    // handle error
  }
  console.log(stat.size);    
}));