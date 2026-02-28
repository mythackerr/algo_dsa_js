// primality test O(sqrt(n)) if we remove the sqrt it will also work and the Big-o: O(n)
function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(10000));
console.log(
  Array.from({ length: 1000000 })
    .map((_, i) => i)
    .map(isPrime)
    .filter((v) => v).length,
);
