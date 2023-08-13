/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root) => {
    if (!root) return 0;
    let min = Infinity;
    const traverse = (node, d) => {
        if (++d < min) {
            if (!node.left && !node.right) {
                min = d;
            } else {
                if (node.left) traverse(node.left, d);
                if (node.right) traverse(node.right, d);
            }
        }
    }
    traverse(root, 0)
    return min;
};