function sortJumbled(mapping: number[], nums: number[]): number[] {
  return nums.map((num, i): number[] => {
      let mapped = parseInt(String(num).split('').map((ch) => mapping[ch]).join(''), 10);
      return [num, mapped, i]
    })
    .sort((a, b) => a[1] === b[1] ? a[2] - b[2] : a[1] - b[1])
    .map(([num]) => num);
};