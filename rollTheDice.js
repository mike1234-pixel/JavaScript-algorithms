// diceRoll, random number generator between 1-6

function rollTheDice() {
    var n = Math.random();
    var diceRoll = n * 6;
    return Math.floor(diceRoll + 1);
}
