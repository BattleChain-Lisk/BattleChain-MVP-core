/**
 * List of current matches (on playing or finished)
 */

let matchList = {};


function addMatch(match){
    if(!match)
        throw "Match not specified";
    if(!match.matchId)
        throw "Match ID not specified";

    if(matchList[match.matchId])
        throw "Match with specified ID just exists";

    matchList[match.matchId] = match;
}


function removeMatch(matchId) {
    if(!matchId)
        throw "Match ID not specified";
    if(!matchList[matchId])
        throw "Match with specified ID does not exists";

    delete matchList[matchId];
}


function persistMatch(match){
    // TODO persist to database
    // Perform save operation with database driver
}
 