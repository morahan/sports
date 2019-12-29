// 2.9.1 - nested stats inside of teams & players
let league = {
  teams: {
    listOfTeams: [],

    Team: function(tName, city, players, id){
      this.teamName = tName;
      this.city = city;
      this.players = [];
      this.id = id;
    },

    addTeam: function(tName, city, players, id){
      league.teams.listOfTeams.push(new league.teams.Team(tName, city, players, id))
    },
    stats: {
      calculateTeamSacksPerGame: function(){
        for (let i = 0; i < league.teams.listOfTeams.length; i++) {
          let gameTotal = [];
          for (let y = 0; y < league.teams.listOfTeams[i].players[0].sacks.length; y++) {
            let tempTotal = 0;
            for (let x = 0; x < league.teams.listOfTeams[i].players.length; x++) {
              tempTotal += league.teams.listOfTeams[i].players[x].sacks[y]
            }
            gameTotal.push(tempTotal)
          }
          league.teams.listOfTeams[i].gameTotalSacks = gameTotal;
        }
      },
      averageSacksPerGame: function(){
        for (let i = 0; i < league.teams.listOfTeams.length; i++){
          let totalSacksPerSeason = 0;
          for (let x = 0; x < league.teams.listOfTeams[i].gameTotalSacks.length; x++){
            totalSacksPerSeason += league.teams.listOfTeams[i].gameTotalSacks[x];
          }
          league.teams.listOfTeams[i].seasonTotalSacks = totalSacksPerSeason;
          let avgSacksPerGame = totalSacksPerSeason / league.teams.listOfTeams[i].gameTotalSacks.length
          league.teams.listOfTeams[i].avgSacksPerGame = avgSacksPerGame.toFixed(2);
        }
      }
    }
  },

  players: {
    listOfPlayers: [],

    addPlayersToTeams: function(){
      for (let i = 0; i < league.teams.listOfTeams.length; i++){
        for (let x = 0; x < league.players.listOfPlayers.length; x++){
          if (league.teams.listOfTeams[i].id === league.players.listOfPlayers[x].team){
            league.teams.listOfTeams[i].players.push(league.players.listOfPlayers[x])
          }
        }
      }

    },

    Player: function(fName, lName, s, teamID, id){
      this.fullName = fName + " " + lName;
      this.firstName = fName;
      this.lastName = lName;
      this.sacks = s;
      this.team = teamID
      this.id = id;
      this.totalSacks = function(){
        let totalSacks = 0;
        for (let i = 0; i < this.sacks.length; i++){
          totalSacks += this.sacks[i];
        }
        return totalSacks;
      };
      this.avgSacks = function(){
        let avg = (this.totalSacks() / this.sacks.length);
        return avg.toFixed(2);
      }

    },

    addPlayer: function(fName, lName, s, teamID, id){
      league.players.listOfPlayers.push(new league.players.Player(fName, lName, s, teamID, id));

    },

    stats: {
      numOfPlayers: function(){
        return league.players.listOfPlayers.length;
      },

      maxGamesPlayed: function() {
        let max = 0;
        for (let i = 0; i < league.players.stats.numOfPlayers(); i++){
          if (max < league.players.listOfPlayers[i].sacks.length){
            max = league.players.listOfPlayers[i].sacks.length;
          }
        }
        return max;
      },

      sackArr: function(){
        let sackArr = [];
        for (let i = 0; i < league.players.listOfPlayers.length; i++){
          sackArr.push(league.players.listOfPlayers[i].sacks)
        }
        return sackArr;
      },

      adjSackArr: function(){
        let adjSackArr = [];
        for (let i = 0; i < league.players.stats.sackArr().length; i++){
          adjSackArr.push(this.sackArr()[i]);
          if (adjSackArr[i].length < league.players.stats.maxGamesPlayed()) {
            let diff = league.players.stats.maxGamesPlayed() - adjSackArr[i].length;
            for (let x = 0; x < diff; x++){
              adjSackArr[i].push(0)
            }
          }
        }
        // league.players.pushAdjSackArr();
        return adjSackArr;
      },

      totalSacksPerGame: function(){
        let totalSacksArr = [];
        for (let x = 0; x < league.players.stats.maxGamesPlayed(); x++){
          let tempTotal = 0;
          for (let i = 0; i < league.players.stats.numOfPlayers(); i++){
            tempTotal += league.players.stats.adjSackArr()[i][x]
          }
          totalSacksArr.push(tempTotal);
        }
        return totalSacksArr;
      }
    }
  }
}

league.teams.addTeam("Broncos", "Denver", [], 1);
league.teams.addTeam("Browns", "Cleavland", [], 2);
// console.log(league.teams.listOfTeams)

league.players.addPlayer("mike", "mo", [10,2,3], 1, 1);
league.players.addPlayer("tim", "dunkin", [6,1,23,8,3,3,1,2,3,3,1], 1, 2);
league.players.addPlayer("yao", "ming", [0,1,32,4], 2, 3);
league.players.addPlayersToTeams();
league.players.stats.adjSackArr();
// console.log(league.players.listOfPlayers[0])
console.log(league.teams.stats.calculateTeamSacksPerGame());
console.log(league.teams.stats.averageSacksPerGame())
console.log(league.teams.listOfTeams)


// console.log(league.players.listOfPlayers[0].avgSacks());
// console.log(league.players.totalSacksPerGame());


//  --- v2.9.1 ---------
// ------------\/ add back in: totalSacksPerGame, max games played, arrOfPlayerSacks (sacksArr).
// ------------\/ Create: average sacks per game for team.
// ------------\/ Create avg sacks/game for player.

// ---- v2.9.2 ----------
// -------------- create 2d arr of player sacks, to identify game (week).
// -------------- add third team
// -------------- create schedule for teams: week 1, week 2, week 3
// -------------- create negitive sack count (sacks given up). total sacks allowed/ game / team

// v 2.9.3
// -------------- auto run all team or player stats after one command.  Have one command trigger all stats to be created


//  cleaned up file and erased previous versions
