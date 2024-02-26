const longestConsecutive = (nums) => {
  if (!nums.length) return 0;

  let max = 0;

  const minmap = new Map(),
        maxmap = new Map(),
        merge = (l, r) => {
          maxmap.delete(l[1]);
          minmap.delete(r[0]);
          l[1] = r[1];
          maxmap.set(r[1], l);
          return l;
        },
        expandRight = (l) => {
          maxmap.delete(l[1]);
          maxmap.set(++l[1], l);
          return /*minmap.has(l[1] + 1) ? merge(l, minmap.get(l[1] + 1)) : */l;
        },
        expandLeft = (r) => {
          minmap.delete(r[0]);
          minmap.set(--r[0], r);
          return /*maxmap.has(r[0] - 1) ? merge(maxmap.get(r[0] - 1), r) : */r;
        };
  
  for (const num of nums) {
    if (minmap.has(num) || maxmap.has(num)) continue;

    const l = maxmap.get(num - 1),
          r = minmap.get(num + 1),
          n = l && r ? merge(l, r) : l ? expandRight(l) : r ? expandLeft(r) : [num, num];

    if (n[0] !== n[1]) {
      if (n[1] - n[0] > max) max = n[1] - n[0];
    } else {
      minmap.set(num, n);
      maxmap.set(num, n);
    }
  }

  return max + 1;
};