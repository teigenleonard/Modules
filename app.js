var http = require('http');
var my = require('./export.js');
var min = 100;
var max = 1000000;

http.createServer(function(request, response){
  var number = my.account()+ my.makeBalance(min,max) + "\n";
  console.log("here");
  response.writeHead(200);
  response.write(number);
  response.end();
}).listen(3000);


console.log('listening');


// var http = require('http');
// var kitty = require('./modules/sum.js');
//
// //Hey Node! Go get me http.
// //This signals to node that it needs that functionality (not inherently active)
//
// http.createServer(function(request, response){
//   //inside node function must pass a function(request, response)
//   var someNumber = 0;
//   someNumber = kitty(7, 4);
//   console.log("App Module: "
//   response.writeHead(200);
//   response.write("Holla at me Chi!");
//   response.end();
// }).listen(8000);
//
// //Specifing connection port for server.
//
//
// console.log("listening!");
