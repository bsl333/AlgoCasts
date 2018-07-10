// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Option 3 - pure recursive
function steps(n, row=0, stair='') {
  if (row === n) return // recursive base-case
  if (stair.length < n) {
    stair += stair.length <= row ? '#' : ' '
    steps(n, row, stair)
  } else {
    console.log(stair)
    return steps(n, row + 1)
  }
}


module.exports = steps;

// Option 2: recursive
// function steps(n, row=0) {
//   if (row === n) return // recursive base-case
//   let line = ''

//   for (let i = 0; i < n; i++) {
//     line += i <= row ? '#' : ' '
//   }
//   console.log(line)
//   steps(n, ++row)
// }


// Option 1: Big O: O(n^2)
// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let line = ''
//     for (let j = 0; j < n; j++) {
//       if (j <= i) { 
//         line += '#'
//       } else {
//         line += ' '
//       }
//     }
//     // while (line.length < n) {
//     //   line += ' '
//     // }
//     console.log(line)
//   }
// }