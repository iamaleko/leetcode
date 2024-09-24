type Trie = {
  [key: `${number}` ]: Trie;
  level: number
};

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  const trie: Trie = { level: 1 };
  for (const num of arr1) {
    let node = trie;
    for (const d of String(num)) {
      if (!node.hasOwnProperty(d)) node[d] = { level: node.level + 1 };
      node = node[d];
    }
  }
  let ans = 0;
  for (const num of arr2) {
    let node = trie;
    for (const d of String(num)) {
      if (!node.hasOwnProperty(d)) break;
      if (ans < node.level) ans = node.level;
      node = node[d];
    }
  }
  return ans;
};