/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
const getTargetCopy = (original, cloned, target) => {
  let node;
  const search = (a, b) => {
    if (node) return;
    if (
      a.val === target.val &&
      a.left?.val === target.left?.val &&
      a.right?.val === target.right?.val
    ) return node = b;
    if (a.left) search(a.left, b.left);
    if (a.right) search(a.right, b.right);
  }
  search(original, cloned);
  return node;
};