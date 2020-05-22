function telephoneCheck(str) {
  var regexFormatOne = /^([1]{1})?([\s(])?[\s()]?([0-9]{3})([\s)-])?([\s])?([0-9]{3})([\s-])?([0-9]{4})$/;

  if (
    (str.includes("(") && str.includes(")") === false) ||
    (str.includes("(") === false && str.includes(")"))
  ) {
    return false;
  } else if (regexFormatOne.test(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(telephoneCheck("9889999999"));
