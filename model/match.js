/**
 * Available match states
 * 
 * CREATED: match created by player 1
 * ON_PROGRESS_1: the match is being played by player 1
 * WAITING_PLAYER_2: player 1 finished the match, generated a score and match is waiting for player 2
 * ON_PROGRESS_2: the match is being played by player 2
 * FINISHED: after player 2 finishes the match, the match is ready to be processed as a payment
 * RESOLVED: the payment is already processed
 * TRANSFERED: funds are transfered from loser player to winner player
 * 
 */
module.exports.MATCH_STATE = {
    CREATED: 'created',
    ON_PROGRESS_1: 'on_progress_1',
    WAITING_PLAYER_2: 'waiting_player_2',
    ON_PROGRESS_2: 'on_progress_2',
    FINISHED: 'finished',
    RESOLVED: 'resolved',
    TRANSFERED: 'transfered'
};



let matchIdentifierCounter = 0;
/** 
 * Match is the representation of a match proposal
 */
class MatchProposal{

    constructor(player1, ammount, game){
        this.matchId = matchIdentifierCounter++;
        this.player1 = player1;
        this.player2 = undefined;
        this.ammount = ammount;
        this.game = game;
        this.timestamp = Date.now();
        this.state = module.exports.MATCH_STATE.CREATED;
    }


    setState(state){
        this.state = state;
    }


    joinMatch(player2){
        this.player2 = player2;
        this.setState(module.exports.MATCH_STATE.ON_PROGRESS_2);
    }

    
    toString(){
        return `${this.matchId}, ${this.player1}, ${this.ammount}, ${this.game}, ${this.timestamp}`;
    }

}


/**
 * Exports
 */
module.exports = MatchProposal;


module.exports.updateMatchStatus = function(match, state){
    if(!module.exports.MATCH_STATE[state])
        throw "Specified match state not exists";
    match.setState(state);
}


module.exports.loadTestOperations = function(){
    // Create some existent match proposals
    var firstProposal = new MatchProposal("ADDRESS_P1", 500, "SPACE_INVADERS");
    var secondProposal = new MatchProposal("ADDRESS_P2", 20, "SPACE_INVADERS");
    var thirdProposal = new MatchProposal("ADDRESS_P3", 620, "SPACE_INVADERS");

    console.log(firstProposal.toString());
    console.log(secondProposal.toString());
    console.log(thirdProposal.toString());
}