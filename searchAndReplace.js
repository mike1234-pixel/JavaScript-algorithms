// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
// ______________________________________________________________________________________________________________
function myReplace(str, before, after) {
  
  var afterUppercase = "";

  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    afterUppercase = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
    return str.replace(before, afterUppercase);
  } else {
    return str.replace(before, after);
  }

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("His name is Tom", "Tom", "john");

// if word to be replaced begins with an uppercase letter
// after needs first letter converting to uppercase before replacing
