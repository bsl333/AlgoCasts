// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's'] // s is a stop character to help manage which level of the tree we are on
  const levelWitdthArr = [0]
  while (!(arr.length === 1 && arr[0] === 's')) {
    const node = arr.shift()
    if (node === 's') {
      arr.push('s')
      levelWitdthArr.push(0)
    } else {
      levelWitdthArr[levelWitdthArr.length - 1]++ // increment counter
      arr.push(...node.children)
    }
  }

  return levelWitdthArr
}

module.exports = levelWidth;
