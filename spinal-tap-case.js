// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {;

  var arr = [];

 for (var i = 0; i < str.length; i++) {

  if (str.charAt(i) === "-" || str.charAt(i) === " ") {
     arr.push("-")
   } 
   else if (arr.slice(-1)[0] !== "-" && str.charAt(i) === str.charAt(i).toUpperCase()) {
     arr.push("-" + str.charAt(i).toLowerCase());
   } else {
     arr.push(str.charAt(i));
   }
  
}

var result = arr.join(",").replace(/,/g, "").toLowerCase().replace(/-_/g, "");

if (result.charAt(0) === "-") {
  result = result.substr(1);
} else {
  return result;
}


console.log(arr.join(",").replace(/,/g, "").toLowerCase().replace(/-_/g, ""));
  return result;

}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap")
spinalCase("AllThe-small Things");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");




