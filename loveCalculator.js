// love calculator - take two names and generate a random number between 1-100
// takes input from user.

var input1 = prompt("What is your name?");
var input2 = prompt("What is their name");

function loveCalculator(name1, name2) {
    var n = Math.random();
    var scale = n * 100; 
    var compatibility = Math.floor(scale + 1);
    alert(name1 + " and " + name2 + " are " + compatibility + "% compatible.");
}

loveCalculator(input1, input2);
