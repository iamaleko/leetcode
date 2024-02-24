const pivotInteger = (n) => {
  const arr = new Array(n + 1).fill(0).map((e,i) => i);
  for (let i = 1; i < arr.length; ++i) {
    arr[i] += arr[i-1];
  }
  const sum = arr.at(-1);
  for (const i in arr) {
    if (sum - arr[i - 1] === arr[i]) return i;
  }
  return -1;
};