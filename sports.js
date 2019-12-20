// sports stats and ownership of Win (percentage)
// s - smpl
// g - gnrtn
// cont - Ownrshp
// tm - sng
//
// Goals:
// -\/ create players from constructor function
// -\/ attribute contribution to each player
// - total sacks per game:
// - create games
// - create array of sacs- games
// - create season averages
// - create contribution arrays - contribution per game
// - create teams from constructor function --> array of teams
// - compare teams:
// - players can switch teams
// -

// V1.1 -----
// function Player (firstName, lastName, games, sacks, total){
//   this.firstName =  firstName;
//   this.lastName =  lastName;
//   this.games =  games;
//   this.sacks =  sacks;
//   this.total = total;
//   let self = this;
// }
//
// function winContribution(player){
//   if (player.total > player.sacks) {
//     let result = (player.sacks / player.total)
//     return result;
//   } else {
//     return "Total is not greater than sacks";
//   }
// }
// //
//
// let mike = new Player("Michael", "Morahan", 1, 2, 3);
// console.log(winContribution(mike))

// // ------ v1.2

// function Player(firstName, lastName, games, sacks, total){
//   this.firstName =  firstName;
//   this.lastName =  lastName;
//   this.games =  games;
//   this.sacks =  sacks;
//   this.total = total;
//   let self = this;
// }
//
// function contribution(individual){
//   if (individual.total > individual.sacks) {
//     let result = (individual.sacks / individual.total)
//     return result;
//   } else {
//     return "Total is not greater than sacks";
//   }
// };
//
//
// let mike = new Player("Michael", "Morahan", 1, 2, 3);
// console.log(contribution(mike));


// v2.2 ------------
// let self = team;

// let team = {
//   players: [],
//
//   Player: function(firstName, lastName, games, sacks, id, contribution){
//     this.firstName =  firstName;
//     this.lastName =  lastName;
//     this.games =  games;
//     this.sacks =  sacks;
//     this.id = id;
//     this.contribution = contribution(mike);
//     // let self = this;
//     // let push = function(){
//     //   for (let key in Player){
//     //     self.players.push(key)
//     //   }
//     // }
//     // push();
//
//     // totalPlayers:  function(){
//     //   for (let key in  new createPlayer){
//     //     this.players.push([key])
//     //   }
//     // }
//   },
//
//
//
//   totalPlayers: function(){
//     return this.players.length;
//   },
//
//   totalSacks: function() {
//     for (let i = 0; i < this.players.length; i++){
//       let sumSacks = 0;
//       sumSacks += this.player[i].sacks;
//     }
//   },
//
//   contribution: function(individual){
//     if (individual.total > individual.sacks) {
//       let result = (individual.sacks / individual.total)
//       return result;
//     } else {
//       return "Error! Total is not greater than sacks";
//     }
//   }
// }
//
//
// let mike = new team.Player("Michael", "Morahan", 1, 2, 1, team.contribution());
// // team.players.push(mike);
// // let mel = new team.Player("Mel", "Lola", 3, 5, 2);
// // team.players.push(mel);
// // console.log(team.players)
//
// // console.log(team.players[0]);
// console.log(team.players)
//
// // let mike = new team.createPlayer("Michael", "Morahan", 1, 2, 1);
// // console.log(team.createPlayer.totalPlayers)
// // console.log(team.contribution(mike));
// // player.i.sacks -->
//

// V 2.3:
// let team = {
//   players: [],
//
//   Player: function(firstName, lastName, games, sacks, id){
//     this.firstName =  firstName;
//     this.lastName =  lastName;
//     this.games =  games;
//     this.sacks =  sacks;
//     this.id = id;
//   },
//
//   totalPlayers: function(){
//     return this.players.length;
//   },
//
//   totalSacks: function() {
//     let sumSacks = 0;
//     for (let i = 0; i < team.players.length; i++){
//       sumSacks += team.players[i].sacks;
//     }
//     return sumSacks;
//   },
//
//   contribution: function(){
//     for (let i = 0; i < team.players.length; i++) {
//       if (team.totalSacks() >= team.players[i].sacks) {
//         let result = (Math.round((team.players[i].sacks / team.totalSacks()) * 100)) + "%";
//         team.players[i].contribution = result;
//       } else {
//         return "Error! Total is not greater than or equal to individual sacks";
//       }
//     }
//   }
// }
//
// let mike = new team.Player("Michael", "Morahan", 1, 8, 1);
// team.players.push(mike);
//
// let mel = new team.Player("Mel", "Lola", 3, 1, 2);
// team.players.push(mel);
//
// team.contribution();
// console.log(team.players[0])


// v 2.5:
// let players = [];
//
// const Player = function(firstName, lastName,  sacks, id) {
//   let fName =  firstName;
//   let lName =  lastName;
//   let sacksArr =  sacks;
//   let idNum = id;
// }
//
// let totalPlayers = function(){
//   return this.players.length;
// }
//
// let games = function() {
//   let count = 0;
//   for (let i = 0; i < team.players.length; i++) {
//     if (team.players[i].sacks.length > count){
//       count = team.players[i].sacks.length;
//     }
//   }
//   return count;
// }
//
// let totalSacksPerGame = []

// calculateSacks: function() {
//   let mostGamesPlayed = team.players.reduce((p, c, i, a) => a[p].length > c.length ? p : i, 0);
//   for (let i = 0; i < team.players[mostGamesPlayed].sacks.length; i+2) {
//     for (let x = 0; x < team.players.length; x++) {
//       // error in two lines below!-/
//       let totalSacksInOneGame = (team.players[i].sacks[x] + team.players[(i+1)].sacks[x]);
//       team.totalSacksPerGame.push(totalSacksInOneGame);
//     }
//   }
// },

// let contribution = function(){
//   for (let x = 1; x < team.games.lenght; x++) {
//     for (let i = 0; i < team.players.length; i++) {
//       if (team.calculateSacks() >= team.players[i].sacks) {
//         let result = (Math.round((team.players[i].sacks / team.calculateSacks()) * 100)) + "%";
//         team.players[i].contribution = result;
//       } else {
//         return "Error! Total is not greater than or equal to individual sacks";
//       }
//     }
//   }
// }
//
//
// let mike = Player("Michael", "Morahan", [1,2,3], 1);
// players.push(mike);
// console.log(players)
//
// let mel = Player("Mel", "Lola", [3,2,1], 2);
// players.push(mel);

// team.contribution();

// console.log(team.totalSacksPerGame);


// firstName, lastName,  sacks,
// new comment




// ----- 2.6 - reOrganization
// let team = {
//   games: [],
//   players.id: []
// }

// let team = {
//   games: {
//     create: function(id, opponent, players) {
//       //            ( #,    ""   ,    []  )
//       this.id =  id;
//       this.opponent = opponent;
//       this.players = players;
//       let totalSacks = this.totalGameSacks();
//     },
//
//     totalGameSacks: function(gameNumber){
//       let totalSacksArr = [];
//       for (let x = 0; x < (Object.keys(this.games).length - 2); x++) {
//         for (let i = 0; i < Object.keys(this.players.id).length; i++) {
//           let gameTotalSacks = 0;
//           gameTotalSacks += this.players.id[i].sacks[this.games[x]];
//           totalSacksArr.push(gameTotalSacks);
//         }
//       }
//     },
//
//     contribution: function(playerId, gameID){
//       // return result of this.games.id[].totalSacks
//       // return result result to players.id[i].conttibution
//     },
//
//     id: [
//       {
//         totalPlayers: function(){
//           Object.keys(this.players).length;
//         },
//         totalSacks: this.totalGameSacks(0),
//         contribution: function(){},
//       },
//       {
//         totalPlayers: function(){
//           Object.keys(this.players).length;
//         },
//         totalSacks: this.totalGameSacks(0),
//         contribution: function(){},
//       }
//     ]
//   },
//
//   players: {
//     create: function(firstName, lastName,  sacks, id) {
//         this.firstName =  firstName;
//         this.lastName =  lastName;
//         this.sacks =  sacks;
//         this.fullName = firstName + lastName;
//         this.id = id;
//     },
//
//     id: [
//       {
//       name: "Mi Mo",
//       games: [],
//       sacks: [],
//       contribution: this.games.contribution(playerId, gameId);
//       },
//       {
//       name: "Gordon Zhu",
//       games: [],
//       sacks: [],
//       contribution: function(){};
//       }
//    ]
//   }
// }

//  2.7 isolate problem attempt

// // Both of the following push the same player into the list --- why!?
// const mi = Object.create(Player)
// mi.firstName = "Mi", mi.lastName = "Mo", mi.sacks = [0,1,2,3], mi.id = 1
// list.push(mi)
//
// Object.create(Player)
// Player.firstName = "Yao", Player.lastName = "Ming", Player.sacks = [12,7,5,4,20], Player.id = 2
// list.push(Player)
// // team.create("Yao", "Ming", [3,5,62,63], 7)
// console.log(list);

// team.listOfPlayers.push(team.create("Mi", "Mo", [0,1,2,3], 1));
// team.listOfPlayers.push(team.create("Yao", "Ming", [3,5,62,63], 7));
// console.log(team.listOfPlayers)

// // ideal list:
// [ { firstName: 'Mi',
//     lastName: 'Mo',
//     sacks: [ 0, 1, 2, 3 ],
//     fullName: 'MiMo',
//     id: 1 },
//   { firstName: 'Yao',
//     lastName: 'Ming',
//     sacks: [ 3, 5, 62, 63 ],
//     fullName: 'YaoMing',
//     id: 7 }
// ]


//-------- Random Answer from Web....----
//
// let partyList = new Map();
//
// // List of seats.
// let seatsList = [];
//
// //JAVASCRIPT Constants.
// const	VVD = new Party("vvd", "VVD", 33),
// 			PVDV = new Party("pvdv", "PvdV", 20),
// 			CDA = new Party("cda", "CDA", 19),
// 			D66 = new Party("d66", "D66", 19),
// 			GL = new Party("gl", "GroenLinks", 14),
// 			SP = new Party("sp", "SP", 14),
// 			PVDA = new Party("pvda", "PvdA", 9),
// 			CU = new Party("cu", "ChristenUnie", 5),
// 			PVDD = new Party("pvdd", "PvdD", 5),
// 			PLUS = new Party("plus", "50Plus", 4),
// 			SGP = new Party("sgp", "SGP", 3),
// 			DENK = new Party("denk", "Denk", 3),
// 			FVD = new Party("fvd", "Forum", 2),
// 			TOTAL = 150;
//
// // Party constructor.
// function Party(key, name, seats) {
// 	this.key = key;
// 	this.name = name;
// 	this.seats = seats;
// 	partyList.set(key, { name: name, seats: seats, show: false });
// }
//
// console.log(partyList)

//  ------ Random solution above ----------

//  ----- copied refactored solution below ----

// let listOfPlayers = new Map;
// function Player(firstName, lastName, sacksArr, id){
//   this.firstName =  "firstName";
//   this.lastName = "lastName";
//   this.sacks = [];
//   this.fullName = this.firstName + " " + this.lastName;
//   this.id = 100;
//   listOfPlayers.set(firstName, {firstName: firstName, lastName: lastName, fullName: firstName + " " + lastName, sacks: sacksArr});
// }
// let mike = new Player("Mi", "Mo", [0,1,2,3,4], 1),
//     yao = new Player("yao", "ming", [4,3,2,1], 2),
//     ran = new Player("Ran", "dom", [5,1,0,8,3], 3)
// console.log(listOfPlayers)
//  ------copied refactored solution above -----



// ------- example solution from web (below)-----------
// var Entry = function(name, numbers, address, addressBook) {
//   this.name = name;
//   if(!(numbers instanceof Array)) {
//     this.numbers = [numbers];
//   }
//   else this.numbers = numbers;
//   this.address = address;
//   addressBook.push(this);
// };
//
// var addressBook = [];
//
// function addContact(name, numbers, address) {
//   new Entry(name, numbers, address, addressBook)
// }
// ------- example solution from web (above)-----------


// --------- refactored solution from above ex___________
// let listOfPlayers = [];
// var Player = function(fName, lName, sacks, id){
//   this.firstName =  fName;
//   this.lastName = lName;
//   this.sacks = sacks;
//   this.fullName = this.firstName + " " + this.lastName;
//   this.id = 100;
// }
//
// function addPlayer(fName, lName, sacks, id) {
//   listOfPlayers.push(new Player(fName, lName, sacks, id))
// }
//
// let mike = addPlayer("Mi", "Mo", [0,1,2,3,4], 1),
//     yao = addPlayer("yao", "ming", [4,3,2,1], 2),
//     ran = addPlayer("Ran", "dom", [5,1,0,8,3], 3)
// console.log(listOfPlayers)
// //// --------- refactored solution from above code_____________



//  ---------- refactoring into obj form -----------
// let team = {
//   listOfPlayers: [],
//
//   Player: function(fName, lName, sacks, id){
//     this.firstName =  fName;
//     this.lastName = lName;
//     this.sacks = sacks;
//     this.fullName = this.firstName + " " + this.lastName;
//     this.id = 100;
//   },
//
//   addPlayer: function(fName, lName, sacks, id) {
//     team.listOfPlayers.push(new team.Player(fName, lName, sacks, id))
//   }
// }
//
// let mike = team.addPlayer("Mi", "Mo", [0,1,2,3,4], 1),
//     yao = team.addPlayer("yao", "ming", [4,3,2,1], 2),
//     ran = team.addPlayer("Ran", "dom", [5,1,0,8,3], 3)
// // console.log(team.listOfPlayers)
// console.log(team.listOfPlayers)
// ---------------------------------------------------

// I finally figured out how to push new objs into an array from a constructor function!!
// the key was sepearting the constructor function and the pushing function.
// send the new info to the push function, which then passes it to the constructor.
// I was previously trying to do the reverse, by sending info to constructor first.

// ---- 2.8 -----
// Goals count players in team\/, count sacks per game, find greatest length of sackArr\/ as GamesInSeason.

// let team = {
//   listOfPlayers: [],
//
//   Player: function(fName, lName, s, id){
//     this.fullName = fName + " " + lName;
//     this.firstName = fName;
//     this.lastName = lName;
//     this.sacks = s;
//     this.id = id;
//   },
//
//   addPlayer: function(fName, lName, s, id){
//     team.listOfPlayers.push(new team.Player(fName, lName, s, id));
//   },
//
//   numOfPlayers: function(){
//     return this.listOfPlayers.length;
//   },
//
//   maxGamesPlayed: function() {
//     let max = 0;
//     for (let i = 0; i < this.numOfPlayers(); i++){
//       if (max < team.listOfPlayers[i].sacks.length){
//         max = team.listOfPlayers[i].sacks.length;
//       }
//     }
//     return max;
//   },
//
//   sackArr: function(){
//     let sackArr = [];
//     for (let i = 0; i < this.listOfPlayers.length; i++){
//       sackArr.push(this.listOfPlayers[i].sacks)
//     }
//     return sackArr;
//   },
//
//   adjSackArr: function(){
//     let adjSackArr = [];
//     for (let i = 0; i < this.sackArr().length; i++){
//       adjSackArr.push(this.sackArr()[i]);
//       if (adjSackArr[i].length < this.maxGamesPlayed()) {
//         let diff = this.maxGamesPlayed() - adjSackArr[i].length;
//         for (let x = 0; x < diff; x++){
//           adjSackArr[i].push(0)
//         }
//       }
//     }
//     return adjSackArr;
//   },
//
//   totalSacksPerGame: function(){
//     let totalSacksArr = [];
//     for (let x = 0; x < this.maxGamesPlayed(); x++){
//       let tempTotal = 0;
//       for (let i = 0; i < this.numOfPlayers(); i++){
//         tempTotal += this.adjSackArr()[i][x]
//       }
//       totalSacksArr.push(tempTotal);
//     }
//     return totalSacksArr;
//   }
// }
// team.addPlayer("tim", "dunkin", [6,1,23,8,3,3,1,2,3,3,1], 2);
// team.addPlayer("mike", "mo", [10,2,3], 1);
// team.addPlayer("yao", "ming", [0,1,32,4], 2);
//
// console.log(team.listOfPlayers)
// console.log(team.totalSacksPerGame())


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


//  new commit - first proper from terminal.  Staying fresh on terminal
// new comment from branch two
// adding new comment to first branch 
