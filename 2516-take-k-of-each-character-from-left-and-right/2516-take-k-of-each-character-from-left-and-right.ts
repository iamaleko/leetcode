// TLE
// function takeCharacters(s: string, k: number): number {
//   let ans = Infinity;
//   if (k * 3 <= s.length) {
//     const mem: Record<string, number> = {};
//     const key = (a: number, b: number, c: number) => `${a}.${b}.${c}`;
//     const step = (l: number, r: number, a: number, b: number, c: number): void => {
//       if (l + r > s.length || l + r > ans) return;
//       if (a >= k && b >= k && c >= k) {
//         if (ans > l + r) ans = l + r;
//         return;
//       }
//       const _key = key(a, b, c);
//       if (mem.hasOwnProperty(_key) && mem[_key] < l + r) return;
//       mem[_key] = l + r;
//       switch (s[l]) {
//         case 'a': step(l + 1, r, a + 1, b, c); break;
//         case 'b': step(l + 1, r, a, b + 1, c); break;
//         case 'c': step(l + 1, r, a, b, c + 1); break;
//       }
//       switch (s[s.length - r - 1]) {
//         case 'a': step(l, r + 1, a + 1, b, c); break;
//         case 'b': step(l, r + 1, a, b + 1, c); break;
//         case 'c': step(l, r + 1, a, b, c + 1); break;
//       }
//     }
//     step(0, 0, 0, 0, 0);
//     // console.log(mem);
//   };
//   return ans === Infinity ? -1 : ans;
// };

// PASS, O(n log n), beats 100%
// function takeCharacters(s: string, k: number): number {
//   if (k === 0) return 0;
//   if (k * 3 > s.length) return -1;

//   const n = s.length,
//         ra = new Uint32Array(n),
//         rb = new Uint32Array(n),
//         rc = new Uint32Array(n);
//   for (let a = 0, b = 0, c = 0, i = n - 1; i >= 0; i--) {
//     ra[i] = s[i] === 'a' ? ++a : a;
//     rb[i] = s[i] === 'b' ? ++b : b;
//     rc[i] = s[i] === 'c' ? ++c : c;
//   }

//   if (ra[0] < k || rb[0] < k || rc[0] < k) return -1;

//   let ans = Number.MAX_SAFE_INTEGER;
//   for (let a = 0, b = 0, c = 0, i = 0; i < n; i++) {
//     let l = i + 1, r = n - 1, j: number;
//     while (l <= r) {
//       j = l + r >>> 1;
//       if (a + ra[j] < k || b + rb[j] < k || c + rc[j] < k) {
//         r = j - 1;
//       } else {
//         l = j + 1;
//       }
//     }
//     if (ans > i + n - r) ans = i + n - r;

//     s[i] === 'a' ? ++a : s[i] === 'b' ? ++b : ++c;
//     if (a >= k && b >= k && c >= k) {
//       if (ans > i + 1) ans = i + 1;
//       break;
//     }
//   }
  
//   return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
// };

function takeCharacters(s: string, k: number): number {
  if (k === 0) return 0;
  if (k * 3 > s.length) return -1;

  const n = s.length,
        ra = new Uint32Array(n),
        rb = new Uint32Array(n),
        rc = new Uint32Array(n);
  for (let a = 0, b = 0, c = 0, i = n - 1; i >= 0; i--) {
    ra[i] = s[i] === 'a' ? ++a : a;
    rb[i] = s[i] === 'b' ? ++b : b;
    rc[i] = s[i] === 'c' ? ++c : c;
  }

  if (ra[0] < k || rb[0] < k || rc[0] < k) return -1;

  let ans = Number.MAX_SAFE_INTEGER;
  for (let a = 0, b = 0, c = 0, l = 0, r = 0; l < n; l++) {
    while (a + ra[r] >= k && b + rb[r] >= k && c + rc[r] >= k) r++;
    if (ans > l + n - r) ans = l + n - r;

    s[l] === 'a' ? ++a : s[l] === 'b' ? ++b : ++c;
    
    if (a >= k && b >= k && c >= k) {
      if (ans > l) ans = l;
      break;
    }
  }
  
  return ans === Number.MAX_SAFE_INTEGER ? -1 : ++ans;
};