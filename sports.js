// sports stats and ownership of Win (percentage)
// V1 -----
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

function Player(firstName, lastName, games, sacks, total){
  this.firstName =  firstName;
  this.lastName =  lastName;
  this.games =  games;
  this.sacks =  sacks;
  this.total = total;
  let self = this;
}

let team = {
  player: Player(),

  contribution: function(player){
    if (player.total > player.sacks) {
      let result = (player.sacks / player.total)
      return result;
    } else {
      return "Total is not greater than sacks";
    }
  },

  playerOne: "First Player"

}



let mike = new Player("Michael", "Morahan", 1, 2, 3);
console.log(team.player(mike))
