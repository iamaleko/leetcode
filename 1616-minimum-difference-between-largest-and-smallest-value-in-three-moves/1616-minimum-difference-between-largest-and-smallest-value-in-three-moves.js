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
  
  let s = new Array(4).fill(Infinity),
      l = new Array(4).fill(-Infinity);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0, val = nums[i]; j < 5; j++) if (s[j] >= val) [val, s[j]] = [s[j], val];
    for (let j = 0, val = nums[i]; j < 5; j++) if (l[j] <= val) [val, l[j]] = [l[j], val];
  }
  return Math.min(l[0] - s[3], l[1] - s[2], l[2] - s[1], l[3] - s[0])
};