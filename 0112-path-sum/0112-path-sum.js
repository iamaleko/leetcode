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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let found = false;
    const traverse = (node, sum) => {
        if (!node || found) return;
        sum += node.val;
        if (node.left === null && node.right === null) {
            if (sum === targetSum) {
                found = true;
            }
        } else {
            traverse(node.left, sum);
            traverse(node.right, sum);
        }
    }
    traverse(root, 0);
    return found;
};