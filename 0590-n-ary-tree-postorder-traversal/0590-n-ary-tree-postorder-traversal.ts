/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
  const ans: number[] = [];
  const traverse = (node: _Node): void => {
    for (const child of node.children) traverse(child);
    ans.push(node.val)
  }
  if (root) traverse(root);
  return ans;
};