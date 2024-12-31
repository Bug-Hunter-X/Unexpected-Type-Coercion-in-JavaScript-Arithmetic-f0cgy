function foo(a, b) {
  // Ensure both inputs are numbers before performing addition
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Both parameters must be numbers";
  }

  return a + b;
}

console.log(foo(1, '1')); // Output: 2
console.log(foo(1, 1)); // Output: 2
console.log(foo('a', 1)); // Output: Invalid input: Both parameters must be numbers