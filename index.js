/**Serve static files */
let SERVER_PORT = 3000;

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
    res.sendfile('static/index.html');
});


/** Socket management */
var io = require('socket.io')(http);
var WebSocketManager = require('./ws/webSocketManager');
WebSocketManager.createSocketManager(io);

/** Match pool */
//TODO: implement this feature
//var MatchPool = require('./model/matchPool');


http.listen(SERVER_PORT, ()=>{
    console.log('Server running on port ', SERVER_PORT);
});