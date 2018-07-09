// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // initialize grid
  const matrix = []
  while (matrix.length < n) matrix.push([]) 
  let startRow = 0,
      endRow = n - 1,
      startColumn = 0,
      endColumn = n - 1,
      count = 1

  while (count <= n * n) {
    // create top row
    for (let i = startColumn; i <= endColumn; i++) {
      matrix[startRow][i] = count++
    }
    startRow++

    // create right side
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endColumn] = count++
    }
    endColumn--

    // create bottom
    for (let i = endColumn; i >= startColumn; i--) {
      matrix[endRow][i] = count++
    }
    endRow--

    // create leftside
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startColumn] = count++
    }
    startColumn++
  }
  
  // matrix.forEach(val => console.log(val));
  return matrix
  
}


module.exports = matrix;
