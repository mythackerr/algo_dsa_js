// Time O(n) Space O(1)
function factorial(n: number): number {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(3));
