var PORT = 33333;
var HOST = '127.0.0.1';
var dgram = require('dgram');
var log = require('sys').log;
var client = dgram.createSocket('udp4');

var fs = require('fs');


fs.readFile("./testfile1M.txt", "utf-8", function (err,data){
  if (err) {
    return console.log(err);
  }
  else{
    var buffer = new Buffer('');
    buffer += data;
    console.log(data);  
    console.log("start sending");  
    client.send(buffer, 0, buffer.length, PORT, HOST, function(err, bytes){
      if (err) throw err;
      log('UDP file sent to ' + HOST +':'+ PORT);
      log('File sise: ' + buffer.length);
    });
    console.log("end send");
    buffer = '';
    console.log(buffer);
  }
  
});


// var PORT = 33333;
// var HOST = '127.0.0.1';

// var dgram = require('dgram');
// var message = new Buffer('My KungFu is Good!');

// var client = dgram.createSocket('udp4');
// client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
//     if (err) throw err;
//     console.log('UDP message sent to ' + HOST +':'+ PORT);
//     client.close();
// });