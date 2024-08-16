function maxDistance(arrays: number[][]): number {
  let aMin = Infinity, aMinI = -1,
      bMin = Infinity, bMinI = -1,
      aMax = -Infinity, aMaxI = -1,
      bMax = -Infinity, bMaxI = -1,
      min: number, max: number;
  
  for (let i = 0; i < arrays.length; i++) {
    min = arrays[i][0]
    max = arrays[i][arrays[i].length - 1];
    if (aMin > min) { bMin = aMin; bMinI = aMinI; aMin = min; aMinI = i; }
    else if (bMin > min) { bMin = min; bMinI = i; }
    if (aMax < max) { bMax = aMax; bMaxI = aMaxI; aMax = max; aMaxI = i; }
    else if (bMax < max) { bMax = max; bMaxI = i; }
  }

  if (aMinI !== aMaxI) return aMax - aMin;
  return Math.max(bMax - aMin, aMax - bMin);
};