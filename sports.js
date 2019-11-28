// sports stats and ownership of Win (percentage)
// s - smpl
// g - gnrtn
// cont - Ownrshp
// tm - sng
//
// Goals:
// - create players from constructor function
// - attribute contribution to each player
// - total sacks:
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
// // ------

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


// v 2.4:
let team = {
  players: [],
  games: function(){
    let count = 0;
    for (let i = 0; i < team.players.length; i++) {
      if (team.players[i].sacks.length > count){
        count = team.players[i].sacks.length;
      }
    }
    return count;
  },

  totalSacksPerGame: [],

  Player: function(firstName, lastName,  sacks, id){
    this.firstName =  firstName;
    this.lastName =  lastName;
    // this.gamesPlayed =  gamesPlayed;
    this.sacks =  sacks;
    this.id = id;
  },

  totalPlayers: function(){
    return this.players.length;
  },

  calculateSacks: function() {
    let sumSacks = 0;
    let self = this;
    for (let i = 0; i < team.players.length; i+2){
      for (let x = 0; x < team.players[i].sacks.length; x++) {
        sumSacks += team.players[i].sacks[x];
        team.totalSacksPerGame.push(team.players[i].sacks[x] + team.players[i+1].sacks[x]);
      }
    
    }
  },

  contribution: function(){
    for (let x = 0; x < team.games.lenght; x++) {
      for (let i = 0; i < team.players.length; i++) {
        if (team.calculateSacks() >= team.players[i].sacks) {
          let result = (Math.round((team.players[i].sacks / team.calculateSacks()) * 100)) + "%";
          team.players[i].contribution = result;
        } else {
          return "Error! Total is not greater than or equal to individual sacks";
        }
      }
    }

  },

  // gamesPlayed: function() {
  //   for (let i = 0; i < team.players.length; i++) {
  //     for (let x = 0; x < team.players.gamesPlayed; x++) {
  //       team.games.push(team.players[i]);
  //     }
  //   }
  // }
}

let mike = new team.Player("Michael", "Morahan", [1,2,3], 1);
team.players.push(mike);

let mel = new team.Player("Mel", "Lola", [3,2,1], 2);
team.players.push(mel);

// team.contribution();

// team.gamesPlayed();
console.log(team.games())
team.calculateSacks();
console.log(team.totalSacksPerGame);
// console.log(team.players)
