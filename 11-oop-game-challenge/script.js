function Player(name) {
  this.name = name;
  this.level = 1;
  this.points = 0;
}

// Method to gain experience points
Player.prototype.gainXp = function (xp) {
  this.points += xp;

  while (this.points >= 10) {
    this.points -= 10;
    this.level++;
  }
};

// Method to display player's info
Player.prototype.describe = function () {
  return `${this.name} is level ${this.level} with ${this.points} experience points`;
};

// Create a new player
let player1 = new Player('Juan');
let player2 = new Player('Pedro');

player1.gainXp(15);
player2.gainXp(5);
player1.gainXp(20);
player2.gainXp(10);
player1.gainXp(3);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe());
console.log(player2.describe());
