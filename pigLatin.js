function translatePigLatin(str) {

  var consonantRegex = /[bcdfghjklmnpqrstvxzwy]/i;
  var firstConsonantay = "";
  var restOfString = "";
  
  console.log(str.match(/[aeiou]/ig)); // null for rhythm

  if (str.match(/[aeiou]/ig) === null) {
    return str + "ay";
  } else {

   for (var i = 0; i < str.length; i++) {

   if (consonantRegex.test(str.charAt(0)) && consonantRegex.test(str.charAt(1)) && consonantRegex.test(str.charAt(2)) && consonantRegex.test(str.charAt(3))) {
    // if first four chars are consonants
    firstConsonantay = str.slice(0,4) + "ay"; 
    restOfString = str.slice(4, -1);
  } // works artzschway
else if (consonantRegex.test(str.charAt(0)) && consonantRegex.test(str.charAt(1)) && consonantRegex.test(str.charAt(2))) {
    // if first three chars are consonants
    firstConsonantay = str.slice(0,4) + "ay"; 
    restOfString = str.slice(4, -1);
  }
  else if (consonantRegex.test(str.charAt(0)) && consonantRegex.test(str.charAt(1))) {
    // if first two chars are consonants
    firstConsonantay = str.slice(0,2) + "ay"; // cay
    restOfString = str.slice(2, -1);
  } else if (consonantRegex.test(str.charAt(0))) {
    // if first char is consonant
    firstConsonantay = str.slice(0,1) + "ay"; // cay
    restOfString = str.slice(1, -1); 
  } else {
    // if starts with a vowel
  return str + "way";
  }
}
var newConsonantStr = restOfString + str.slice(-1) + firstConsonantay;
 
console.log(firstConsonantay, restOfString, newConsonantStr);
return newConsonantStr;
  }
}

translatePigLatin("glove");
translatePigLatin("schwartz");
translatePigLatin("california");
translatePigLatin("rhythm");
