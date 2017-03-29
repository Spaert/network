var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client 
    
    var fs = require('fs');
    // var fd = fs.openSync("testfile1M.txt","r");
    // var M = 1024*1024;
    // const buf = new Buffer(1*M);
    // fs.readSync(fd, buf, 0, 1*M, 0);
    // console.log("content: " +　buf);
    // var len = buf.length;
    // console.log(len)
    // fs.closeSync(fd);
    // //console.log("content: " +　buf);
    
    // client.write(buf);
    fs.readFile("testfile1M.txt", "utf-8", function(err, data) {
        client.write(data)
        console.log("done")
    });
    

});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {
    
    console.log('DATA: ' + data);
    // Close the client socket completely
    client.destroy();
    
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});