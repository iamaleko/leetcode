const sumOfLeftLeaves = (root) => {
  let sum = 0;
  const search = (n, isLeft) => {
    if (n.left) search(n.left, true)
    if (n.right) search(n.right)
    if (!n.left && !n.right && isLeft) sum += n.val;
  } 
  search(root);
  return sum;
};