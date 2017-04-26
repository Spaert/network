var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var fs = require('fs');

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {
    
    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
    // Add a 'data' event handler to this instance of socket
    // sock.on('data', function(data) {
        
    //     console.log('DATA ' + sock.remoteAddress + ': ' + data);
    //     // Write the data back to the socket, the client will receive it as data from the server
    //     sock.write('You said "' + data + '"');
        
   //});
    sock.on('data', function(data) {
        var buffer = '';
        var prev = 0, next;
        data = data.toString('utf8'); // assuming utf8 data...
		  buffer += data;        
        fs.appendFileSync('./output20M.txt', buffer);
        buffer = "";
        
        // do{            
            
            
        // }while(buffer == "\n")
		 
		
        // while ((next = data.indexOf(' ', prev)) > -1) {
             
        //      buffer += data.substring(prev, next);             
        //      // do something with `buffer` here ...
        //      fs.appendFileSync('./output20M.txt', buffer);
        // 	 buffer = '';
        //      prev = next + 1;
        // }
        // console.log('DATA ' + sock.remoteAddress + ': ' + data);
        
    });
    
    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
			
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });
    
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
