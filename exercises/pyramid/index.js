// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0, line='#') {
  // const maxWidth = 2 * n - 1
  // const center = math.flor(maxWidth / 2)
  // let previousRow = ``
  // for (let row = 0; row < n; row++) {
  // }
  if (row === n) return // base case
  const maxWidth = 2 * n - 1
  const numberOfPounds = row * 2 + 1
  if (line.match(/#/g).length <  numberOfPounds) {
    pyramid(n, row, `#${line}#`)
  } else if (line.length < maxWidth) {
    pyramid(n, row, ` ${line} `)
  } else {
    console.log(line)
    return pyramid(n, row + 1)
  }
}

pyramid(4)

module.exports = pyramid;

// Option 1
// function pyramid(n) {
//   const maxWidth = 2 * n - 1 
//   let r0 = '#'
//   while (r0.length < maxWidth) {
//     r0 = ` ${r0} `
//   }
//   let prevRow = r0
//   // let prevRow = '#'
//   for (let row = 0; row < n; row++) {
//     console.log(prevRow)
//     let newRow = `#${prevRow.trim()}#`
//     while (newRow.length < maxWidth) { 
//       newRow = ` ${newRow} `
//     }
//     prevRow = newRow
//   }
// }

//Option 1 refactored
// function pyramid(n) {
//   const maxWidth = 2 * n - 1
//   const midpoint = Math.floor(maxWidth / 2)

//   for (let row = 0; row < n; row++) {
//     let line = ''
//     for (let column = 0; column < maxWidth; column++) {
//       const leftEdge = midpoint - row,
//             rightEdge = midpoint + row
//       if (leftEdge <= column && rightEdge >= column) {
//         line += '#'
//       } else {
//         line += ' '
//       }
//     }
//     console.log(line)
//   }
// }