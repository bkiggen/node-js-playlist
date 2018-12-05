// var http = require('http');
// var fs = require('fs');

// 23 EXPRESS (easier than 18-22)
var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('this is the homepage');
});
app.get('/contact', function(req, res){
  res.send('this is the contact page');
});
app.get('/profile/:name/:id', function(req, res){ //:id for dynamic rendering
  res.send('You wanna see this: ' + req.params.name + ' and ' + req.params.id);
});

app.listen(3000);







// 18 - 22

// var server = http.createServer(function(request, response) {
//   if(request.url === '/home' || request.url === '/'){
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/index.html').pipe(response);
//   } else if(request.url === '/contacts') {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/contacts.html').pipe(response);
//   } else if (request.url === '/api/ninjas'){
//     var ninjas = [{name: 'ryp', age: 22}, {name: 'yosh', age: 32}];
//     response.writeHead(200, {'Content-Type': 'application/json'});
//     response.end(JSON.stringify(ninjas));
//   } else {
//     response.writeHead(404, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(response);
//   }
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('Listening on port 3000');


// 17

// var server = http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//   myReadStream.pipe(response);
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('Listening on port 3000');

// 14/15 Readable Streams / Writable Streams

// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');
//
// myReadStream.on('data', function(chunk) {
//   console.log('new chunk received');
//   myWriteStream.write(chunk)
// });

// 16 Pipes



// PRELIMINARY LESSONS

// 10 Creating and Removing directories
// var fs = require('fs');
//
// // fs.unlink('./stuff/writeMe.txt', function() {
// //   fs.rmdir('stuff');
// // });
// fs.mkdirSync('shit'); // create directory, synchronous
// // var data = fs.readFileSync('readMe.txt', 'utf8');
// fs.mkdir('stuff', function() {
//   fs.readFile('readMe.txt', 'utf8', function(err, data) {
//     fs.writeFile('./stuff/writeMe.txt', data, function() {return;});
//     if (err) {console.log(err);}
//   })
// });
// fs.writeFile('./stuff/writeMe.txt', data);


// fs.rmdirSync('shit'); // delete directory, synchornous

// // 9 Reading and Writing files:
// var fs = require('fs');
// var readMe = fs.readFile('./readme.txt', 'utf8', function(err, data) {
//   fs.writeFile('writeMe.txt', data, function() {return;});
// });

// // 8 Event emitters
// var events = require('events');
// var util = require('util');
//
// var Person = function(name){
//   this.name = name;
// };
//
// util.inherits(Person, events.EventEmitter);
//
// var james = new Person('james');
// var maree = new Person('maree');
// var breen = new Person('breen');
// var people = [james, maree, breen];
//
// people.forEach(function(person){
//   person.on('speak', function(mssg){
//     console.log(person.name + 'said: ' + mssg);
//   });
// });
//
// james.emit('speak', 'hey, guysss');
