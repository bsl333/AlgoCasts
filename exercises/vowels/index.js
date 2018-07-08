// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Option 4: improved iterative solution
function vowels(str) {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u']
  return str.toLowerCase()
    .split('')
    .reduce((accum, val) => vowelsArr.includes(val) ? accum + 1 : accum, 0)
}

module.exports = vowels;

// Option 3: using RegExp -- BEST SOLUTION
// function vowels(str) {
//   return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0 
// }

// Option 2: recursive solution
// function vowels(str, count=0) {
//   if (!str) return count
//   str = str.toLowerCase()
//   const vowelsArr = ['a', 'e', 'i', 'o', 'u']
//   if (vowelsArr.includes(str[0])) {
//     count++
//   }
//   return vowels(str.slice(1), count)
// }

// Option 1 interative solution
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   let count = 0
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++
//     }
//   }

//   return count

// }


