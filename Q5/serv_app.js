var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/listUsers', function (req, res) {
   fs.readFile("./" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendfile("./testpost.html");
});
app.get('/listUser/:uuid', function (req, res) {
   // First read existing users.
   fs.readFile( "./" + "users.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.uuid] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

app.post('/addUser', function (req, res) {

     response = {
      uuid : req.body.uuid,
      uname : req.body.uname,
      prof : req.body.prof,
      password : req.body.passwd,

    };  
    
    var user_data = {
        
      "name" : req.body.uname,
	  "password" : req.body.passwd,
	  "profession" : req.body.prof,
	  "id" : req.body.uuid,
      
   };
   var uuid  = req.body.uuid;
     var uname = req.body.uname;
     var prof  = req.body.prof;
     var passwd = req.body.passwd;
     var str = 'Name: '+ uname +', PROF: '+prof+' UUID: '+uuid+' PASS: '+ passwd;
     console.log( str );
     res.end(str);
     var extend = require('node.extend');
     var username = "user" + uname;
     fs.readFile('./users.json', 'utf8', function (err, data) {
        if (err) throw err;         
        var obj = JSON.parse(data);
        extend(obj, {user:user_data});
        console.log(obj);
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('users.json', json, 'utf8');
     });
     
    
     
})

app.put('/updateUser', function (req, res) {
   var uuid  = req.body.uuid;
     var uname = req.body.uname;
     var prof  = req.body.prof;
     var passwd = req.body.passwd;
     var str = 'UPDATE: Name:';
     console.log( str );
     res.end(str);
     console.log(str);
     /* codes needed to update user data in users.json file */
})
app.post('/updateUser', function (req, res) {
   var uuid  = req.body.uuid;
     var uname = req.body.uname;
     var prof  = req.body.prof;
     var passwd = req.body.passwd;
     var str = "its post"
     console.log( str );
     res.end(str);
     console.log(str);
     /* codes needed to update user data in users.json file */
})

app.delete('/deleteUser/:id', function (req, res) {
    var uuid  = req.body.uuid;
    
})

var server = app.listen(8081, function () {

//   var host = server.address().address;
//   var port = server.address().port;

  console.log("Example app listening on port 8081");

})