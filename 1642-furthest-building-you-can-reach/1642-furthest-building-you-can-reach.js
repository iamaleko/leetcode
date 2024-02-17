const furthestBuilding = (arr, briks, ledders) => {
  // create gaps map
  const gaps = [];
  const map = {};
  for (let i = 1; i < arr.length; ++i) {
    const gap = arr[i] - arr[i - 1];
    if (gap > 0) gaps.push(map[i] = { gap: gap, briks: 0, ledders: 0, deleted: 0 });
  }
  gaps.sort((a, b) => a.gap - b.gap);

  // set pointers
  let lp = gaps.length - 1, bp = lp, max = arr.length - 1;
  const count = () => {
    while (lp >= 0) {
      if (!gaps[lp].deleted) {
        if (!ledders) break;
        --ledders;
        gaps[lp].ledders = 1;
        briks += gaps[lp].briks;
        gaps[lp].briks = 0;
      }
      --lp;
    }
    if (bp > lp) bp = lp;
    while (bp >= 0) {
      if (!gaps[bp].deleted) {
        if (!briks) break;
        const need = Math.min(briks, gaps[bp].gap - gaps[bp].briks);
        gaps[bp].briks += need;
        briks -= need;
        if (gaps[bp].briks === gaps[bp].gap) --bp;
      } else {
        --bp;
      }
    }
  } 
  
  // remove buildings
  count();
  let deleted = 0;
  while (bp >= 0 && max > 0 && deleted < gaps.length) {
    if (map[max]) {
      ++deleted;
      map[max].deleted = 1;
      ledders += map[max].ledders;
      briks += map[max].briks;
      map[max].ledders = 0;
      map[max].briks = 0;
      count();
    }
    --max;
  }

  return max;
};