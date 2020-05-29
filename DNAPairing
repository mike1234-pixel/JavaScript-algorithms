// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  
  var arr = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "C") {
      arr.push(["C", "G"]);
    } else if (str.charAt(i) === "G") {
      arr.push(["G", "C"]);
    } else if (str.charAt(i) === "A") {
      arr.push(["A", "T"]);
    }else if (str.charAt(i) === "T"){
      arr.push(["T", "A"]);
    }
  }
  console.log(arr);
  return arr;
}

pairElement("GCG");
pairElement("ATCGA");
