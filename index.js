function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName){
    const allPlayers = Object.assign({}, gameObject().home.players, gameObject().away.players)
    
    for(const key in allPlayers){
        if(key === playerName){
            return allPlayers[key].points
        }
    }

    return "Player not found"
}

function shoeSize(playerName){
    const allPlayers = Object.assign({}, gameObject().home.players, gameObject().away.players)
    
    for(const key in allPlayers){
        if(key === playerName){
            return allPlayers[key].shoe
        }    
    }

    return "Player not found"
}

function teamColors(teamName){
    if("Brooklyn Nets" === teamName){
        return gameObject().home.colors
    } else if("Charlotte Hornets" === teamName){
        return gameObject().away.colors
    } else {
        return "Team name not found!"
    }
}

function teamNames(){
    return [gameObject().home.teamName, gameObject().away.teamName]
}

function playerNumbers(teamName){
    const playerNumbers = []

    if("Brooklyn Nets" === teamName){
        for(const key in gameObject().home.players){
            playerNumbers.push(gameObject().home.players[key].number)
        }
    } else if("Charlotte Hornets" === teamName){
        for(const key in gameObject().away.players){
            playerNumbers.push(gameObject().away.players[key].number)
        }
    } else {
        return "Invalid team name"
    }

    return playerNumbers
}

function playerStats(playerName){
    const allPlayers = Object.assign({}, gameObject().home.players, gameObject().away.players)
    
    for(const key in allPlayers){
        if(key === playerName){
            return allPlayers[key]
        }    
    }

    return "Player not found"
}

function bigShoeRebounds(){
    const allPlayers = Object.assign({}, gameObject().home.players, gameObject().away.players)
    let shoeSize = 0
    let bigShoePlayer
    for(const key in allPlayers){
        if(allPlayers[key].shoe > shoeSize){
            shoeSize = allPlayers[key].shoe
            bigShoePlayer =allPlayers[key]
        }
    }

    return bigShoePlayer.rebounds
}

numPointsScored("Brendan Hayword")
// console.log(shoeSize("Brendan Hayword"))
// console.log(teamColors("Charlotte Hornets"))
// console.log(teamNames())
// console.log(playerNumbers("Charlotte Hornets"))
// console.log(playerStats("Brendan Hayword"))
console.log(bigShoeRebounds())