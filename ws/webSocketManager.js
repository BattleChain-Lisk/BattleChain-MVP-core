/**
 * Web socket manager to manage all SERVERs related to a socket
 */
let SERVER_CONNECT = 'connect';
let SERVER_DISCONNECT = 'disconnect';
let CLIENT_CREATE_MATCH = 'create-match';
let CLIENT_REMOVE_MATCH = 'remove-match';

let ERROR_SOCKET_NOT_PROVIDED = 'Socket object manager not provided';

// Socket management object needed to perform all operations
let socketObjects;

module.exports.createSocketManager = function(io){
    if(!io)
        throw ERROR_SOCKET_NOT_PROVIDED;

    socketObjects = io;
    dispatchSocketEvent();
    console.log('Socket Manager successfully created');
}

/**
 * Event dispatcher
 */
function dispatchSocketEvent(){
    if(!socketObjects)
        throw ERROR_SOCKET_NOT_PROVIDED;
    // Server connection event (init)
    socketObjects.on(SERVER_CONNECT, (socket)=>{dispatchNewConnections(socket)});
}

/**
 * Dispatch connection event and set the related events from this connection
 * @param {*} socket 
 */
function dispatchNewConnections(socket){
    console.log('User connected');
    // Events related to connection
    socket.on(SERVER_DISCONNECT, (data)=>{ dispatchServerDisconnection(data);  });
    socket.on(CLIENT_CREATE_MATCH, (msg)=>{dispatchMatchCreation(msg)});
}


/**
 * Manage the disconnection of a client
 */
function dispatchServerDisconnection(data){
    console.log('User disconnected');
}


// Client actions
function dispatchMatchCreation(msg){
    console.log('User created a match with data: ' + JSON.stringify(msg));
    
    // TODO remove the next function when match pool integrated
    // Notify other users for match creation
    socketObjects.sockets.emit('broadcast', msg);
}


function dispatchMatchRemoval(){}
function dispatchMathResultNotifier(){}


/** Actions to perform with this manager */
 module.exports.broadcastMatches = function(){
     // TODO implement broadcast matches
     if(!socketObjects)
        throw ERROR_SOCKET_NOT_PROVIDED;
 }

 module.exports.notifyMatchResultToUser = function(){
    // TODO implement notifications to users
    if(!socketObjects)
        throw ERROR_SOCKET_NOT_PROVIDED;
 }