var MatchPool = require('./model/matchPool');
var WebSocketManager = require('./ws/webSocketManager');

/** Test Web Socket */



/** Test Pool */
let pool = new MatchPool();
console.log(pool);
pool.addMatch();
pool.removeMatch();
pool.clearPool();
pool.runMatchRevisionLoop();
pool.stopMatchRevisionLoop();