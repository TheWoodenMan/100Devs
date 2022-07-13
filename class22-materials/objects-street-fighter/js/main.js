//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(fighterName, fightingStyle, specialMove, ultimateMove) {
  (this.name = fighterName),
    (this.style = fightingStyle),
    (this.move = specialMove),
    (this.ultimate = ultimateMove),
    (this.combo = function () {
      console.log(
        `${fighterName} executes ${this.move} followed by a devastating ${this.ultimateMove}`
      );
    }),
    (this.celebration = function () {
      console.log(
        `${fighterName} displays a perfect demonstration of ${fightingStyle} and thumbs-downs his opponent.`
      );
    }),
    (this.finisher = function () {
      console.log(
        `${fighterName} blasts their opponent through a wall using ${this.move}`
      );
    });
}
let blanka = new StreetFighter(
  "Blanka",
  "Capoeira",
  "Cannonball",
  "Electrocute"
);
