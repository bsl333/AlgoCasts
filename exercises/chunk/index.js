// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Option 2
function chunk(array, size) {
  const chunks = []
  array.forEach(element => {
    const last = chunks[chunks.length - 1]
    if(!last || last.length === size) {
      chunks.push([element])
    } else {
      last.push(element)
    }
  });

  return chunks
}

module.exports = chunk;

// Option 1
// function chunk(array, size) {
//   const chunks = []
//   for (let i = 0; i < array.length; i += size) {
//     chunks.push(array.slice(i, i + size))
//   }
//   return chunks
// }