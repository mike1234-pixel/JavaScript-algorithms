// Takes a value (n) and returns a fibonnaci sequence containing n values

function fibonacciGenerator (n) {
    var output = [];
    //Write your code here:
    if (n == 1) {
      output.push(0); // works
    } else if (n == 2) {
      output.push(0,1);
    } else if (n > 2) { // works

      output.push(0,1); // works

      for (var i = 0; i < n; i++) {

        var lastTwo = output.slice(-2);
        var pushValue = lastTwo.reduce((a,b) => a + b);
        output.push(pushValue);
        

        if (output.length == n) {
          return output; // works
        }
      }
    }
    

    return output;

}


fibonacciGenerator(1);


