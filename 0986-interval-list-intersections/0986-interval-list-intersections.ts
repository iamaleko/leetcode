function intervalIntersection(a: number[][], b: number[][]): number[][] {
  const ans: number[][] = [];
  let ap = 0, bp = 0;
  main: while (ap < a.length && bp < b.length) {
    while (a[ap][1] < b[bp][0]) {
      if (++ap >= a.length) break main;
    }
    while (b[bp][1] < a[ap][0]) {
      if (++bp >= b.length) break main;
    }
    if (b[bp][0] > a[ap][1]) continue;
    const int = [Math.max(a[ap][0], b[bp][0]), Math.min(a[ap][1], b[bp][1])];
    // console.log(a[ap], b[bp], int)
    if (ans.length && ans.at(-1)[1] > int[0]) {
      ans.at(-1)[1] = int[1];
    } else {
      ans.push(int);
    }
    a[ap][1] > b[bp][1] ? bp++ : ap++;
    // console.log(ans)
  }
  return ans;
};