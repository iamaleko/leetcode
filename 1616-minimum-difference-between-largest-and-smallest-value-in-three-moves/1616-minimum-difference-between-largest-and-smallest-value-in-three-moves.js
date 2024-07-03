// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minDifference = function(nums) {
//   if (nums.length <= 3) return 0
//   nums.sort((a, b) => a - b)
//   const r = nums.length - 1;
//   return Math.min(
//     nums[r - 0] - nums[3],
//     nums[r - 1] - nums[2],
//     nums[r - 2] - nums[1],
//     nums[r - 3] - nums[0]
//   )
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minDifference = function(nums) {
//   if (nums.length <= 3) return 0
  
//   let sa = Infinity,
//       sb = Infinity,
//       sc = Infinity,
//       sd = Infinity,
//       la = -Infinity,
//       lb = -Infinity,
//       lc = -Infinity,
//       ld = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     let val = nums[i]
//     if (sa >= val) {[val, sa] = [sa, val]}
//     if (sb >= val) {[val, sb] = [sb, val]}
//     if (sc >= val) {[val, sc] = [sc, val]}
//     if (sd >= val) {sd = val}
//     val = nums[i]
//     if (la <= val) {[val, la] = [la, val]}
//     if (lb <= val) {[val, lb] = [lb, val]}
//     if (lc <= val) {[val, lc] = [lc, val]}
//     if (ld <= val) {ld = val}
//   }

//   return Math.min(la - sd, lb - sc, lc - sb, ld - sa)
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
  if (nums.length <= 3) return 0
  const s = [Infinity, Infinity, Infinity, Infinity],
        l = [-Infinity, -Infinity, -Infinity, -Infinity];
  for (const num of nums) {
    if (s[3] > num) {
      let p = 0;
      while (s[p] < num) p++;
      s.splice(p, 0, num);
      s.pop();
    }
    if (l[3] < num) {
      let p = 0;
      while (l[p] > num) p++;
      l.splice(p, 0, num);
      l.pop();
    }
  }
  return Math.min(l[0] - s[3], l[1] - s[2], l[2] - s[1], l[3] - s[0])
};