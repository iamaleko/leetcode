function maxDistance(arrays: number[][]): number {
  let aMin = Infinity, aMinI = -1,
      bMin = Infinity, bMinI = -1,
      aMax = -Infinity, aMaxI = -1,
      bMax = -Infinity, bMaxI = -1;
  
  for (let i = 0; i < arrays.length; i++) {
    let min = arrays[i][0],
        max = arrays[i][0];
    for (let j = 1; j < arrays[i].length; j++) {
      if (min > arrays[i][j]) {
        min = arrays[i][j];
      } else if (max < arrays[i][j]) {
        max = arrays[i][j];
      }
    }
    if (aMin > min) { bMin = aMin; bMinI = aMinI; aMin = min; aMinI = i; }
    else if (bMin > min) { bMin = min; bMinI = i; }
    if (aMax < max) { bMax = aMax; bMaxI = aMaxI; aMax = max; aMaxI = i; }
    else if (bMax < max) { bMax = max; bMaxI = i; }
  }

  if (aMinI !== aMaxI) return aMax - aMin;
  return Math.max(bMax - aMin, aMax - bMin);
};