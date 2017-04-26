var express = require('express');
var app = express();
var fs = require("fs");
var jQuery = require('jquery')((require("jsdom").jsdom().defaultView));
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
    res.end(JSON.stringify(response));
        
    //  var uuid  = req.body.uuid;
    //  var uname = req.body.uname;
    //  var prof  = req.body.prof;
    //  var passwd = req.body.passwd;
    //  var str = 'Name: '+ uname +', PROF: '+prof+' UUID: '+uuid+' PASS: '+ passwd;
    //  console.log( str );
    //  res.end(JSON.stringify(str));

    //  function appendObject(obj){
    //     var configFile = fs.readFileSync('./users.json');
    //     var config = JSON.parse(configFile);
    //     var array = new Array();
    //     array.push(config);
    //     array.push(obj);
    //     var configJSON = JSON.stringify(array);
    //     fs.writeFileSync('./users.json', configJSON);
    //  }
    
    var data = {
        
      "name" : req.body.uname,
	  "password" : req.body.passwd,
	  "profession" : req.body.prof,
	  
      
   };
    
    //  appendObject(response);
    var fd = fs.readFileSync('./users.json');
    var json = JSON.stringify(eval("(" + fd + ")"));
    var username = "user" + req.body.uuid;
    var element = {}, cart = [];
    element.name = req.body.uname;
    element.password = req.body.passwd;
    element.profession = req.body.prof;
    element.id = req.body.uuid;
    element.word = "user" + req.body.uuid;
    jQuery.extended(json,element);
    cart.push({element : element});
    console.log(cart);
    console.log(json);    
    // var extend = require('util')._extend;
    // var object = extend(json, data);
    
    // console.log("object: "+ object);
    // fs.writeFileSync('./users.json', object);
    

    
    
     
})

app.put('/updateUser', function (req, res) {
   var uuid  = req.body.uuid;
     var uname = req.body.uname;
     var prof  = req.body.prof;
     var passwd = req.body.passwd;
     var str = 'UPDATE: Name: '+ uname +', PROF: '+prof+' UUID: '+uuid+' PASS: '+ passwd;
     console.log( str );
     res.end(JSON.stringify(str));
     /* codes needed to update user data in users.json file */
})

app.delete('/deleteUser/:id', function (req, res) {

})

var server = app.listen(8081, function () {

//   var host = server.address().address;
//   var port = server.address().port;

  console.log("Example app listening on port 8081");

})