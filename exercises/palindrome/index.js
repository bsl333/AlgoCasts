// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((val, idx, arr) => val === arr[arr.length - 1 - idx])
}


//   FOR EVERY --> my imp to forEach
// Array.prototype.forEvery = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this)
//   }
// }

// const newArr = []

// const squareArr = (val, idx, arr) => {
//   const obj = {}
//   obj[idx + 1] = val * val
//   newArr.push(obj)
// }


// x.forEach((val, idx) => newArr.push({ idx: val * val}))
// console.log(newArr)

module.exports = palindrome;

// option 1
// function palindrome(str) {
//   return str.split('').reverse().join('') === str
// }

// option 2
// function palindrome(str) {
//   for (let i = 0; i < Math.ceil(str.length / 2); i++) {
//     if (str[i] !== str[str.length - 1 - i]) return false
//   }
//   return true
// }