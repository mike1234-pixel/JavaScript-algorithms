// iterates from 1 to 100
// if number divisible by 3, returns fizz
// by 5, returns buzz
// by both, returns fizzbuzz
// none of the above, returns the number.

function fizzBuzz() {
    
    for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
    } else if (i % 3 == 0) {
    console.log("fizz");
    } else if (i  % 5 == 0) {
    console.log("buzz");
    } else {
    console.log(i);
    }
    }

}
