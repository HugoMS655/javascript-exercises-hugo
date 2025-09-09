const fibonacci = function (arg) {
  let n;
  if (typeof arg !== "number") {
    n = Number(arg);
  } else {
    n = arg;
  }

  if (n < 0) {
    return "OOPS";
  }
  if (n === 0) {
    return 0;
  }
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
