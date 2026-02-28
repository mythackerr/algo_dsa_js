// Complexity Analysis
// Time -> O(n)
// Space -> O(n)

function fibo(n: number): number[] {
  const fib_array: number[] = [];
  for (let i = 0; i < n; i++) {
    if (i == 0) fib_array.push(0);
    else if (i == 1) fib_array.push(1);
    else fib_array.push(fib_array[i - 1] + fib_array[i - 2]);
  }
  return fib_array;
}

// Testing
for (let i = 0; i < 10; i++) {
  console.log(fibo(i));
}
