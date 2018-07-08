// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//option 1
function anagrams(stringA, stringB) {
  const regEx = /[a-z]/gi
  const stringArrayA = stringA.toLowerCase().match(regEx)
  const stringArrayB = stringB.toLowerCase().match(regEx)
  // return JSON.stringify(stringArrayA.sort()) === JSON.stringify(stringArrayB.sort())
  return stringArrayA.sort().join('') === stringArrayB.sort().join('')
}

module.exports = anagrams;


//option 1
// function anagrams(stringA, stringB) {
//   const regEx = /[a-z]/gi
//   // console.log(stringA.match(/\w+/g))
//   const newStringA = stringA.match(regEx).join('').toLowerCase()
//   const newStringB = stringB.match(regEx).join('').toLowerCase()
//   if (newStringA.length !== newStringB.length) return false
//   const stringAObj = {}
//   const stringBObj = {}
//   for (let idx in newStringA) {
//     const charA = newStringA[idx]
//     const charB = newStringB[idx]
//     stringAObj[charA] = ++stringA[charA] || 1
//     stringBObj[charB] = ++stringB[charB] || 1
//   }
//   for (let char in stringAObj) {
//     if (stringAObj[char] !== stringBObj[char]) return false
//   }
//   return true
// }