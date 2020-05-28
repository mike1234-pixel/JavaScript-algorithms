// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr) {
  
  var args = []; // [2,3]
  var newArr = [];

  console.log(arr);

  for (var i = 0; i < arguments.length; i++) {
    if (i > 0) {
      args.push(arguments[i]);
    }
  } for (var j = 0; j < arr.length; j++) {
    if (args.includes(arr[j])  === false) {
      newArr.push(arr[j]);
    }
  }
  console.log("arguments[1]: " + arguments[2]);
  console.log("args: " + args);
  console.log("arr: " + arr);
  console.log("newArr: " + newArr);
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// input is array, then args
// loop through the arguments object. if index > 0 (not the array value), push into args array
// loop through arr, check if args array includes current value, if not, push it newArr
// return newArr
