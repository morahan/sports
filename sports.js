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


// v2.1 ------------

let team = {
  createPlayer: function(firstName, lastName, games, sacks, total){
    this.firstName =  firstName;
    this.lastName =  lastName;
    this.games =  games;
    this.sacks =  sacks;
    this.total = total;
    let self = this;
  },

  contribution: function(individual){
    if (individual.total > individual.sacks) {
      let result = (individual.sacks / individual.total)
      return result;
    } else {
      return "Total is not greater than sacks";
    }
  },
}
let mike = new team.createPlayer("Michael", "Morahan", 1, 2, 3);

console.log(team.contribution(mike));
