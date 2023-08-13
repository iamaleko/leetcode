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
const maxDepth = (root) => {
    let maxDepth = 0;
    const traverse = (node, depth) => {
        if (!node) return;
        ++depth;
        if (node.left === null && node.right === null) {
            if (depth > maxDepth) maxDepth = depth;
        } else {
            traverse(node.left, depth);
            traverse(node.right, depth);
        }
    }
    traverse(root, 0);
    return maxDepth;
    
};