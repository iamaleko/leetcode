const insert = (nodes, node) => {
  const search = (target, left) => {
    let l = 0, r = nodes.length - 1, c;
    while (l < r) {
      c = l + r >>> 1;
      if (left ? nodes[c][1] < target : nodes[c][0] < target) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
    return l;
  }
  let l = search(node[0], true),
      r = search(node[1], false);
  if (nodes[l] && nodes[l][1] < node[0]) l++;
  if (nodes[r] && nodes[r][0] > node[1]) r--;
  if (l > r) {
    // no overlaps
    nodes.splice(l, 0, node);
  } else if (r === l && nodes[l]) {
    // same existing mode
    if (nodes[l] && nodes[l][1] >= node[0] && nodes[l][0] > node[0]) nodes[l][0] = node[0];
    if (nodes[r] && nodes[r][0] <= node[1] && nodes[r][1] < node[1]) nodes[r][1] = node[1];
  } else {
    // with overlaps
    nodes.splice(l, r - l + 1, [
      nodes[l] ? Math.min(nodes[l][0], node[0]) : node[0],
      nodes[r] ? Math.max(nodes[r][1], node[1]) : node[1],
    ]);
  }
  return nodes;
};