function castShadow(arr) {
  const shadow = new Array(arr.length).fill(0);
  let l = 0, r = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l) l = arr[i];
    if (arr[arr.length - i - 1] > r) r = arr[arr.length - i - 1];
    if (shadow[i] < l) shadow[i] = l;
    if (shadow[arr.length - i - 1] < r) shadow[arr.length - i - 1] = r;
    l--;
    r--;
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