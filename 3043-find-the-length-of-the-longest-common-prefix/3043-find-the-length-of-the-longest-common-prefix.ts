type Trie = {
  [key: `${number}` ]: Trie;
};

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  const trie: Trie = {};
  for (const num of arr1) {
    let node = trie, s = String(num);
    for (let i = 0; i < s.length; i++) {
      if (!node.hasOwnProperty(s[i])) node[s[i]] = {};
      node = node[s[i]];
    }
  }
  let ans = 0;
  for (const num of arr2) {
    let node = trie, s = String(num);
    for (let i = 0; i < s.length;) {
      if (!node.hasOwnProperty(s[i])) break;
      node = node[s[i]];
      if (ans < ++i) ans = i;
    }
  }
  return ans;
};