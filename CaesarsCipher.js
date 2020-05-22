function rot13(str) {
  var lookup = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
    " ": " ",
    "!": "!",
    "?": "?",
    ".": ".",
  };

  var ar = [];
  var newArr = []; //[ 'F', 'R', 'E', 'E', ' ', 'C', 'O', 'D', 'E', ' ', 'C', 'A', 'M', 'P' ]
  ar = str.split(""); //[ 'S', 'E', 'R', 'R', ' ', 'P', 'B', 'Q', 'R', ' ', 'P', 'N', 'Z', 'C' ]
  console.log(ar);

  for (var i = 0; i < ar.length; i++) {
    let lookupValue = ar[i];
    let matchingValue = lookup[lookupValue];
    newArr.push(matchingValue);
  }
  var newStr = newArr.join(",").replace(/,/g, ""); // FREE CODE CAMP

  return newStr;
}

rot13("SERR PBQR PNZC");
