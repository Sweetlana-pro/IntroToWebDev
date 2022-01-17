var numSides = prompt("How many sides does the die have?");
var numPlayers = prompt("How many persons are going to play?");
function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}
for (var i = 0; i < numPlayers; i++) {
    console.log(rollDice(numSides));
}
