// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3



function fib(n) {
  if (n < 2) {
    return n
  }
  else {
    return fib(n - 2) + fib(n - 1)
  }
}

function memoize(fn) {
  const cache = {}
  // passing all params into args
  return function (...args) {
    if (cache[args]) {
      return cache[args]
    } else {
      const result = fn.apply(this, args)
      cache[args] = result
      return result
    }
  }
}

fib = memoize(fib)

module.exports = fib;

// Option 1: iterative... f(n) = f(n - 1) + f(n - 2)
// function fib(n) {
//   if (n === 0) {
//     return 0
//   }
//   const f0 = 0
//   const f1 = 1

//   const values = [f0, f1]
//   for (let i = 2; i <= n; i++) {
//     let nextValue = values[i - 2] + values[i - 1]
//     values.push(nextValue)
//   }
  
//   return values[n]
// }

// Option 2: Recursive... f(n) = f(n - 1) + f(n - 2)
// PROBLEM: runtime complexity ~ 2^n (exp)s
// f(4) => f(2) + f(3) => 1 + f(1) + f(2) = 1 + 1 + 1 = 3
// function fib(n) {
//   if (n < 2) {
//     return n
//   } else {
//     return n - 2 > 0 ? fib(n - 2) + fib(n - 1) : fib(n - 1)
//   }
// }