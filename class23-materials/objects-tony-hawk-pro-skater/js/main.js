//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function Skater(sk8r, board, homeTown, eyes) {
  (this.name = sk8r),
    (this.board = board),
    (this.homeTown = homeTown),
    (this.eyes = eyes),
    (this.kickflip = console.log(`${this.name} performs a kickflip!`));
  this.ollie = console.log(
    `${this.name} deftly flips his ${this.board} to perform an Ollie!`
  );
  this.ultimate = console.log(
    `${this.name} jumps into a 720 bro-scope, slides his ${this.board} into place then strikes a pose!!!`
  );
}

let tonyHawks = new Skater("Tony", "shredmaster4000", "LA", "blue");

console.log(
  `Whee the carousel spins around, it has gone around ${i} times so far`
);
