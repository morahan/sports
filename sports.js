// sports stats and ownership of Win (percentage)
// s - smpl
// g - gnrtn
// cont - Ownrshp

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



let team = {
  players: [],

  createPlayer: function(firstName, lastName, games, sacks, id){
    this.firstName =  firstName;
    this.lastName =  lastName;
    this.games =  games;
    this.sacks =  sacks;
    this.id = id;
    let numPlayers = 0;
    numPlayers ++;
  },

  totalPlayers: function(){
    return this.players.length;
  },

  totalSacks: function() {
    for (let i = 0; i < this.totalPlayers; i++){
      let sumSacks = 0;
    }
  },

  contribution: function(individual){
    if (individual.total > individual.sacks) {
      let result = (individual.sacks / individual.total)
      return result;
    } else {
      return "Total is not greater than sacks";
    }
  }
}
let mike = new team.createPlayer("Michael", "Morahan", 1, 2, 1);
team.players.push(mike);

console.log(team.totalPlayers())

// let mike = new team.createPlayer("Michael", "Morahan", 1, 2, 1);
// console.log(team.createPlayer.totalPlayers)
// console.log(team.contribution(mike));
// player.i.sacks -->
