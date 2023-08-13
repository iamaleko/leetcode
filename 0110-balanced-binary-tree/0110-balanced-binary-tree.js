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
 * @return {boolean}
 */
const isBalanced = (root) => {
    if (!root) return true;
    let ok = true;
    const traverse = (node) => {
        const l = node.left ? traverse(node.left) : 0, 
              r = node.right ? traverse(node.right) : 0;
        if (ok) {
            if (l > r) {
                if (l - r > 1) {
                    ok = false;
                } else {
                    return l + 1;   
                }
            } else {
                if (r - l > 1) {
                    ok = false;
                } else {
                    return r + 1;   
                }
            }
        }
    }
    traverse(root);
    return ok;
};