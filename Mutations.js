// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  var lowerCase1 = arr[0].toLowerCase().split("");//[ 'h', 'e', 'l', 'l', 'o' ]
  var lowerCase2 = arr[1].toLowerCase().split("");// [ 'h', 'e', 'y' ]

  var charMatchesCount = 0;
  var result = false;

  for (var i = 0; i < lowerCase2.length; i++) {
    if (lowerCase1.includes(lowerCase2[i])) {
      charMatchesCount += 1;
    }
}
if (charMatchesCount === lowerCase2.length) {
  result = true;
}
return result;

}

mutation(["hello", "hey"]);
