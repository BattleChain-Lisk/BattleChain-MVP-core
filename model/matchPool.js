/**
 * Pool that contains all matches
 */
let MAX_CAPACITY_POOL = 1000;
let MATCH_TTL_IN_SECONDS = 60;
let LOOP_TIME = 1000; // Every minute
let lastTimestamp = Date.now();


class MatchPool{

    constructor(){
        this.matchPool = {};
    }


    clearPool(){
        this.matchPool = undefined;
        this.matchPool = {};
    }

    
    addMatch(match){
        // TODO
        console.log('Add match operation');

        // Check if match just exists
            // if exists and pool size not greater than MAX_CAPACITY_POOL throw error
            // else add match to pool
    }


    removeMatch(matchId){
        // TODO
        console.log('Remove match operation');
        // match exists on pool?
            // Yes: remove
            // No: throw error
    }


    joinMatch(matchId, playerId){
        // TODO
        // Another player joins to match
        // Remove from pool
        // Persistence the match
        console.log('Join match operation');
    }


    matchExpired(matchTimestamp){
        return 
            matchTimestamp > (lastTimestamp + MATCH_TTL_IN_SECONDS*1000);
    }


    reviseCurrentMatches(){
        console.log('Reviewing the matches...');
        if(!this.matchPool) return;

        let currentMatchIdList = Object.keys(this.matchPool);
        for(var i=currentMatchIdList.length; i >= 0; i++){
            let match = this.matchPool[i];
            if( matchExpired(match.timestamp) ){
                delete this.matchPool[match.matchId];
            }
        }

    // TODO Broadcast clients with renewed list
    }


    runMatchRevisionLoop(){
        console.log('Run Match Revision Loop operation')
        // Make the reviseCurrentMatches a periodic function
        this.revisionLoop = setInterval(this.reviseCurrentMatches, LOOP_TIME);
    }


    stopMatchRevisionLoop(){
        // TODO: revisionLoop.stop
        console.log('Stop Match Revision Loop operation');
    }


}

module.exports = MatchPool;