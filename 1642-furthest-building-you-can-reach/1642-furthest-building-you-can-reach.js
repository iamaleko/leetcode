const furthestBuilding = (arr, briks, ledders) => {
  // create gaps map
  const gaps = [], map = {}, len = arr.length;
  for (let i = 1; i < len; ++i) {
    if (arr[i] - arr[i - 1] > 0) gaps.push(map[i] = {
      gap: arr[i] - arr[i - 1],
      briks: 0,
      ledders: 0,
    });
  }
  gaps.sort((a, b) => a.gap - b.gap);

  // allocate recources
  let lp = gaps.length - 1, bp = lp, max = len - 1;
  const allocate = () => {
    while (lp >= 0) {
      if (gaps[lp].gap) {
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
      if (gaps[bp].gap) {
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
  allocate();
  
  // remove buildings
  let removed = 0;
  while (bp >= 0 && max > 0 && removed < gaps.length) {
    if (map[max]) {
      ++removed;
      map[max].gap = 0;
      ledders += map[max].ledders;
      map[max].ledders = 0;
      briks += map[max].briks;
      map[max].briks = 0;
      allocate();
    }
    --max;
  }

  return max;
};