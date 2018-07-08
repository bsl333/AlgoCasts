// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//option 2 - maintain proper spacing in string
function capitalize(str) {
  const words = str.match(/[^\s]+/g) // could use /\w+/g
  const spaces = str.match(/\s+/g)
  return words
    .map(val => val[0].toUpperCase() + val.slice(1))
    .reduce((accum, val, idx) => {
      return spaces[idx] ? accum + val + spaces[idx] : accum + val
    }, '')
  
}

module.exports = capitalize;

// Option 1
// function capitalize(str) {
//   return str
//     .split(' ')
//     .map(val => val[0].toUpperCase() + val.slice(1))
//     .join(' ')
// }