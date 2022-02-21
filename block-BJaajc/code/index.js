function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
  function isPalindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
      let x = str[i];
      let y = str[j - i];
      if (x != y) {
        return false;
      }
    }
    return true;
  }
  
  function getCircumference(radius) {
    let result = 2 * (22 / 7) * radius;
    return `The circumference is ${result}`;
  }
  
  function getArea(radius) {
    let result = (22 / 7) * radius * radius;
    return `The area is ${result}`;
  }
  
  module.exports = {
    getFullName,
    isPalindrome,
    getCircumference,
    getArea,
  };