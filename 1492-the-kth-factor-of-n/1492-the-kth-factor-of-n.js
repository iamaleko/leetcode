const kthFactor = (n, k) => {
  const a = [], b = [], max = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= max; i++) {
    if (n % i === 0) {
      a.push(i);
      b.push(n / i);
    }
  }
  if (a.at(-1) === b.at(-1)) b.pop();
  return k > a.length ? (k - a.length > b.length ? -1 : b.at(-k + a.length)) : a[k - 1];
};