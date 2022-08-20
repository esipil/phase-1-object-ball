function gameObject () {
    {
        home:{
            teamName: "Brooklyn Nets"
            colors: ["Black", "White"]
            players: {
                AlanAnderson: {
                    number: 0
                    shoe: 16
                    points: 22
                    rebounds: 12
                    assists: 12
                    steals: 3
                    blocks: 1
                    slamDunks: 1
                }
                ReggieEvans: {
                    number: 30
                    shoe: 14
                    points: 12
                    rebounds: 12
                    assists: 12
                    steals: 12
                    blocks: 12
                    slamDunks: 7
                }

                
            }
        }
        away:{
            teamName:
            colors:
            players:{

            }
        }
    }
}
// console.log(gameObject);

function homeTeamName() {
    const object =gameObject()
    return object['home']["teamName"]
}
console.log(homeTeamName())

