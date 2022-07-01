// TODO (Ex.0): document and write tests for this function

/**
 * Given a number, returns the negative version of that number.
 * @param {number} n- the number
 * @returns {number} the negative version of the number
 */
function asNegative(n) {
  if (n <= 0) {
    return n;
  }
  return -1 * n;
}

//test cases

console.log(asNegative(1), -1);
console.log(asNegative(-5), -5);
console.log(asNegative(7.2), -7.2);
console.log(asNegative(0), 0);

