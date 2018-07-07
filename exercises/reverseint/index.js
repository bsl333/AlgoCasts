// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Option 2: NOTE: parseInt(num) returns a parse int up to the first non numeric character (assuming base 10)
// Using Number(num) or +num assumes base10 and will return NaN if
  // E.g, 
    // parseInt('123ab') // 123
    // parseInt('5-') // 5 
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;

// Option 1 
// function reverseInt(n) {
//   return Math.sign(n) > -1
//   ? parseInt(n.toString().split('').reverse().join(''))
//   : parseInt(n.toString().slice(1).split('').reverse().join('')) * - 1
// }


