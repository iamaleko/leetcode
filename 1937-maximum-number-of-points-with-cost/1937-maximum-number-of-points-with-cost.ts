function castShadow(arr) {
  const shadow = new Array(arr.length).fill(0);
  for (let l = 0, r = 0, i = 0, j = arr.length - 1; i < arr.length; i++, j--, l--, r--) {
    if (arr[i] > l) l = arr[i];
    if (arr[j] > r) r = arr[j];
    if (shadow[i] < l) shadow[i] = l;
    if (shadow[j] < r) shadow[j] = r;
  }
  return shadow;
}

function maxPoints(points: number[][]): number {
  let dp = castShadow(points[0]);
  for (let y = 1; y < points.length; y++) {
    for (let x = 0; x < dp.length; x++) dp[x] += points[y][x];
    dp = castShadow(dp);
  }
  return Math.max(...dp);
};

// TLE
// function maxPoints(points: number[][]): number {
//   let dp = points[0];
//   for (let y = 1; y < points.length; y++) {
//     const row = new Array(dp.length).fill(0);
//     for (let x = 0; x < dp.length; x++) {
//       for (let j = 0; j < dp.length; j++) {
//         const val = points[y][x] + dp[j] - Math.abs(x - j);
//         if (val > row[x]) row[x] = val;
//       }  
//     }
//     dp = row;
//   }
//   return Math.max(...dp);
// };