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
    dp = castShadow(points[y].map((v, x) => v + dp[x]));
  }
  return Math.max(...dp);
};