/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) return '';
  const ans: string[] = [],
        q: [TreeNode, number][] = [[root, 0]];
  let i = 0;
  while (q.length) {
    let [node, ind] = q.pop();
    let str = `${(ind).toString(16)}=${(node.val).toString(16)}`;
    if (node.left) {
      ++i;
      str += `<${(i).toString(16)}`
      q.push([node.left, i]);
    }
    if (node.right) {
      ++i;
      str += `>${(i).toString(16)}`
      q.push([node.right, i]);
    }
    ans.push(str);
  }
  return ans.join('/');
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (!data) return null;
  const map: Record<number, [TreeNode,number|null,number|null]> = {};
  for (const record of data.split('/')) {
    const vi = record.indexOf('='),
          li = record.indexOf('<',vi),
          ri = record.indexOf('>',li === -1 ? vi : li),
          i = parseInt(record.slice(0, vi), 16),
          v = parseInt(record.slice(vi + 1, li === -1 ? ri === -1 ? undefined : ri : li), 16),
          l = li === -1 ? null : parseInt(record.slice(li + 1, ri === -1 ? undefined : ri), 16),
          r = ri === -1 ? null : parseInt(record.slice(ri + 1), 16);
    map[i] = [new TreeNode(v),l,r];
  }
  const build = (i: number)=> {
    const [node, l, r] = map[i];
    if (l) {
      node.left = map[l][0];
      build(l);
    }
    if (r) {
      node.right = map[r][0];
      build(r);
    }
  }
  build(0);
  return map[0][0];
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */