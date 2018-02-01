/**
 * Web socket manager to manage all SERVERs related to a socket
 */

let SERVER_CONNECT = 'connect';
let SERVER_DISCONNECT = 'disconnect';
let SERVER_CREATE_MATCH_RESPONSE = 'create-match';
let SERVER_REMOVE_MATCH_RESPONSE = 'remove-match';

let CLIENT_CREATE_MATCH = 'create-match';
let CLIENT_REMOVE_MATCH = 'remove-match';
let CLIENT_UPDATE_CANDIDATES = 'update-candidates';


module.exports.dispatchSocketEvent = function(){
    // TODO do something with web socket event
}


 module.exports.registerClientSocket = function(){}

 module.exports.broadcastMatches = function(){}

 module.exports.notifyMatchResultToUser = function(){}