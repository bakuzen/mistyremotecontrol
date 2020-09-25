//This file creates a Web server
var express = require('express');
var app = express();

//Server is listening on port 5503
var server = app.listen(5503);

app.use(express.static('public'));
console.log("Listening on port 5503");

var socket = require('socket.io');

//Starts server 
var io = socket(server);


io.sockets.on('connection', newConnection);
io.to(socket.id).emit("hey");
 function newConnection(socket){
 	console.log("new connection: " + socket.id);
   	socket.on("Hello",pythonConfig);
	
 //This function 
 	function pythonConfig(data){
 		socket.broadcast.emit("Hello", data);
 		console.log(data);
 	}
	
 //function looks for a client who sends "color" and then broadcasts the data to all the clients except the one who sent it
 //This function changes the color of Mistys LED
 	socket.on("color", function jsConfig(data){
 		socket.broadcast.emit("data", JSON.stringify(data));
 		console.log(JSON.stringify(data));
	 })
	 
	 //Controls movement of arms
	 socket.on("arm", function leftArm(data){
		 socket.broadcast.emit("arm",JSON.stringify(data));
		 console.log(JSON.stringify(data))
	 })

	 socket.on("requestVideo", function requestVideo(data){
		 socket.broadcast.emit("requestVideo", JSON.stringify(data));
		 console.log("Requested Video");
	 })

	 socket.on("getVideo", function getVideo(data){
		 socket.broadcast.emit("getVideo", JSON.stringify(data));
		 console.log("Getting Video");
	 })

 }











