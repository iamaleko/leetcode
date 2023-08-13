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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const values = [], travers = (node) => {
        if (node === null) return;
        values.push(node.val)
        travers(node.left)
        travers(node.right)
    }
    travers(root);
    return values;
};