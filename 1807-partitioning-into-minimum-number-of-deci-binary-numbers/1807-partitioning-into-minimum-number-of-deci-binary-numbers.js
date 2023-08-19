const minPartitions = (n) => {
  let max = 0;
  for (const d of n) if (max < d && (max = d) === 9) break;
  return max;
};