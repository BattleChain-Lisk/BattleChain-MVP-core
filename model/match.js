let matchIdentifierCounter = 0;



/** 
 * Math is the representation of a match proposal
 * 
 */
class MatchProposal{

    constructor(player1, ammount, game){
        this.matchId = matchIdentifierCounter++;
        this.player1 = player1;
        this.player2 = undefined;
        this.ammount = ammount;
        this.game = game;
        this.timestamp = Date.now();
        this.state = module.exports.MATCH_STATE.WAITING;
    }


    setState(state){
        this.state = state;
    }


    joinMatch(player2){
        this.player2 = player2;
        this.setState(module.exports.MATCH_STATE.ON_PROGRESS);
    }

    
    toString(){
        return `${this.matchId}, ${this.player1}, ${this.ammount}, ${this.game}, ${this.timestamp}`;
    }

}


// Create some existent match proposals
(()=>{
    var firstProposal = new MatchProposal("ADDRESS_P1", 500, "SPACE_INVADERS");
    var secondProposal = new MatchProposal("ADDRESS_P2", 20, "SPACE_INVADERS");
    var thirdProposal = new MatchProposal("ADDRESS_P3", 620, "SPACE_INVADERS");

    console.log(firstProposal.toString());
    console.log(secondProposal.toString());
    console.log(thirdProposal.toString());
})();

/**
 * Exports
 */
module.exports = MatchProposal;
module.exports.MATCH_STATE = {
    WAITING: "Waiting for player",
    ON_PROGRESS: 'Playing...',
    FINISHED: 'Match finished',
    TRANSFERED: 'Funds transfered'
};

module.exports.updateMatchStatus = function(match, state){
    if(!module.exports.MATCH_STATE[state])
        throw "Specified match state not exists";
    match.setState(state);
}