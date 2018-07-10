// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// option 3
function reverse(str) {
  return str.split('').reduce((accum, currentVal) => currentVal + accum, '')
}

module.exports = reverse;

// Option 1
// function reverse(str) {
//   return str.split('').reverse().join('')
// }



// Option 2: Big O: O(n)
// function reverse(str) {
//   let reversed = ''
//   for (let char of str) {
//     reversed = char + reversed
//   }
//   return reversed
// }