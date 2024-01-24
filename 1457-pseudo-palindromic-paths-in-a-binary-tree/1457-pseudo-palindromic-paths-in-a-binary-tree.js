const pseudoPalindromicPaths  = (root) => {
  let res = 0;
  const queue = [[root, [0,0,0,0,0,0,0,0,0]]];
  while (queue.length) {
    const [node, mem] = queue.pop();
    ++mem[node.val - 1];
    if (node.left && node.right) {
      queue.push([node.left, mem]);
      queue.push([node.right, mem.slice()]);
    } else if (node.left) {
      queue.push([node.left, mem]);
    } else if (node.right) {
      queue.push([node.right, mem]);
    } else if (mem.filter(e => e % 2 !== 0).length < 2) {
      ++res;
    }
  }
  return res;
};