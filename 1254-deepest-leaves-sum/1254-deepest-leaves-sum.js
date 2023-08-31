/**
 * @param {TreeNode} root
 * @return {number}
 */
const deepestLeavesSum = function(root) {
  if (!root) return 0;
  const sum = [];
  const add = (root, level) => {
    if (sum[level] === undefined) sum[level] = 0;
    sum[level] += root.val;
    root.left && add(root.left, level + 1);
    root.right && add(root.right, level + 1);
  }
  add(root, 0);
  return sum.at(-1);
};