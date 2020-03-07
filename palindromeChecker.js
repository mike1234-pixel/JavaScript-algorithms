function palindrome(str) {
    var removed = str.replace(/[\W,_]/g,'').toLowerCase();
    var backward = removed.split('').reverse().join('');
    if (removed === backward) {
      return true;
    } else {
      return false;
    }
}

// first remove the non-alphanumeric characters and convert letters to lower case
// Second create a var that reverses the string
// if the string(minus alphanumeric characters) and the backwards string are the same, return true, else false.
