// love calculator - take two names and generate a random number between 1-100
// takes input from user.

var input1 = prompt("What is your name?");
var input2 = prompt("What is their name");

function loveCalculator(name1, name2) {
    var n = Math.random();
    var scale = n * 100; 
    var compatibility = Math.floor(scale + 1);

    if (compatibility < 16) {
    customMessage = "COLD FISH";
    } else if (compatibility < 33) {
    customMessage = "LOVE LORN";
    } else if (compatibility < 48) {
    customMessage = "LUKE WARM";
    } else if (compatibility < 64) {
    customMessage = "HUBBA - HUBBA";
    } else if (compatibility < 80) {
    customMessage = "HOT TAMALE";
    } else if (compatibility <= 100) {
    customMessage = "CASANOVA";
    }


    alert(name1 + " and " + name2 + " are " + compatibility + "% compatible. " + customMessage);
}

loveCalculator(input1, input2);
