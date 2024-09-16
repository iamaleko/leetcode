function findMinDifference(timePoints: string[]): number {
  const minutes = timePoints.map((e) => {
    return parseInt(e.slice(3, 5), 10) + parseInt(e.slice(0, 2), 10) * 60;
  }).sort((a, b) => a - b);

  let ans = minutes[0] - minutes.at(-1) + 24 * 60;
  for (let i = 1; i < minutes.length; i++) {
    const diff = minutes[i] - minutes[i - 1];
    if (diff < ans) ans = diff;
  }
  return ans;
};