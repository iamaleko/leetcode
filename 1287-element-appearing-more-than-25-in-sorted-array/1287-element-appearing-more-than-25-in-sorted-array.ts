function findSpecialInteger(arr: number[]): number {
  if (arr.length === 1) return arr[0];
  const freq = Math.floor(arr.length / 4);
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      if(++count > freq) return arr[i];
    } else {
      count = 1;
    }
  }
};