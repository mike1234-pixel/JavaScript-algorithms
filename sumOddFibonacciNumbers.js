// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
 
    var sequence = [];
    var secondSequence = [];
    var total = 0;
  
    //Write your code here:
    if (num == 1) {
      sequence.push(0); // works
    } else if (num == 2) {
      sequence.push(0,1);
    } else if (num > 2) { // works

      sequence.push(0,1); // works

      for (var i = 0; i < num; i++) {

        var lastTwo = sequence.slice(-2);
        var pushValue = lastTwo.reduce((a,b) => a + b);
        sequence.push(pushValue);
            
      }
    }
    // STEP ONE - HAVE FIBONNACCI SEQUENCE 

for (var i = 0; i < sequence.length; i++) {
  if (sequence[i] <= num) {
    secondSequence.push(sequence[i]);
  }
}

    // STEP TWO, SUM ODD NUMS IN THAT SEQUENCE
for (var i = 0; i < secondSequence.length; i++) {
  if (secondSequence[i] % 2 !== 0) {
    total += secondSequence[i];
  }
}
console.log(total);
return total;
}

sumFibs(75025); 
