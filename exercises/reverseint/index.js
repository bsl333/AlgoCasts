// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const nToStr = n.toString()
//   for (let i = 0; i < nToStr.length; i++) {

//   }
// }

module.exports = reverseInt;

// Option 1
function reverseInt(n) {
  return Math.sign(n) > -1
  ? parseInt(n.toString().split('').reverse().join(''))
  : parseInt(n.toString().slice(1).split('').reverse().join('')) * - 1
}
