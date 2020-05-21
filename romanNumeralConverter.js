function convertToRoman(num) {
  const lookup = {
    0: "0", // removed from the result by regex at the end of the function
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM",
  };
  var numStrings = num.toString().split("").reverse(); // index 0 = 1s, index 1 = 10s, index 2 = 100s etc [ '6', '3' ] for 36
  console.log(numStrings);

  var newArr = []; // [ 'VI', 'XXX' ]
  var numZero = numStrings[0]; // 6
  for (var i = 0; i < numStrings.length; i++) {
    if (i === 0) {
      let index = numStrings[i];
      newArr.push(lookup[index]);
      console.log(newArr);
    } else if (i === 1) {
      let index = numStrings[i] * 10;
      newArr.push(lookup[index]);
      console.log(newArr);
    } else if (i === 2) {
      let index = numStrings[i] * 100;
      newArr.push(lookup[index]);
      console.log(newArr);
    } else if (i === 3) {
      let index = numStrings[i] * 1000;
      newArr.push(lookup[index]);
      console.log(newArr);
    }
  }
  var reversedArr = newArr.reverse();
  console.log(reversedArr);
  var result = reversedArr.toString().replace(/0|,/g, ""); // XXXVI
  console.log(result);
  return result;
}

convertToRoman(500);
