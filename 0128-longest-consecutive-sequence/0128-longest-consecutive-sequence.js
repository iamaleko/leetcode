const longestConsecutive = (nums) => {
  if (!nums.length) return 0;

  let max = 0;
  const minmap = new Map(), maxmap = new Map();
  
  for (const num of nums) {
    if (minmap.has(num) || maxmap.has(num)) continue;

    const l = maxmap.get(num - 1), r = minmap.get(num + 1);
    
    if (l && r) {
      maxmap.delete(l[1]);
      minmap.delete(r[0]);
      maxmap.set(l[1] = r[1], l);
      if (l[1] - l[0] > max) max = l[1] - l[0];
    } else if (l) {
      maxmap.delete(l[1]);
      maxmap.set(++l[1], l);
      if (l[1] - l[0] > max) max = l[1] - l[0];
    } else if (r) {
      minmap.delete(r[0]);
      minmap.set(--r[0], r);
      if (r[1] - r[0] > max) max = r[1] - r[0];
    } else {
      const n = [num, num];
      minmap.set(num, n);
      maxmap.set(num, n);
    }
  }

  return max + 1;
};