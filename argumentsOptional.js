// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
  if (typeof arguments[0] !== 'number') {
    return undefined;
  } else if (arguments[1] && typeof arguments[1] !== 'number') {
    return undefined;
  } 

  // check typeof arguments, if not Number return undefined

  else if (arguments.length === 1) {
    var argo = arguments[0];
    return function(arg) {
      var result = 0;
      typeof arg === 'number' ? result = argo + arg : result = undefined;
      return result;
    };
  } else if (arguments.length === 2) {
    return arguments[0] + arguments[1]; // works
  } 
}

console.log(addTogether(5)(7));
