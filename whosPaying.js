// function that selects a random person from a list to pay for lunch

function whosPaying(names) {

    var length = names.length;
    var randomNum = Math.floor(Math.random() * length);
    var randomPerson = names[randomNum];

    return randomPerson + " is going to buy lunch today!"

}
whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);


// generate randomNum between 0 and length of array
// pick out names[randomNum]
