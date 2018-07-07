// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = new Map()
  let mostOccurences = [null, null]

  for(let char of str) {
    chars.get(char) ? chars.set(char, chars.get(char) + 1) : chars.set(char, 1)
    if (chars.get(char) > mostOccurences[1]) {
      mostOccurences = [char, chars.get(char)]
    }
  }

  return mostOccurences[0]


}

module.exports = maxChar;
