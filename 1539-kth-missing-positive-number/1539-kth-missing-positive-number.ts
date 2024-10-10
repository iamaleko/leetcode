function findKthPositive(arr: number[], k: number): number {
  arr.unshift(0);
  for (let i = 1; i < arr.length; i++) {
    while (arr[i] > arr[i - 1] + 1) {
      arr[i - 1]++;
      k--;
      if (!k) return arr[i - 1];
    }
  }
  return arr.at(-1) + k;
};