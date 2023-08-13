/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
    if (!nums.length) return null;
    const build = (root, ll, lr, rl, rr) => {
        if (ll <= lr) {
            const center = Math.floor((lr - ll) / 2),
                  node = new TreeNode(nums[ll + center]);
            root.left = node;
            build(node, ll, ll + center - 1, ll + center + 1, lr);
        }
        if (rl <= rr) {
            const center = Math.floor((rr - rl) / 2),
                  node = new TreeNode(nums[rl + center]);
            root.right = node;
            build(node, rl, rl + center - 1, rl + center + 1, rr);
        }
    }
    const center = Math.floor(nums.length / 2),
          root = new TreeNode(nums[center]);
    build(root, 0, center - 1, center + 1, nums.length - 1);
    return root;
};