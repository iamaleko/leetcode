type Trie = {
  score: number;
  items: {
    [key: string]: Trie;
  }
}

function sumPrefixScores(words: string[]): number[] {
  const trie: Trie = { score: 0, items: {} };
  for (const word of words) {
    let node = trie;
    for (const ch of word) {
      if (!node.items.hasOwnProperty(ch)) node.items[ch] = { score: 0, items: {} };
      node.items[ch].score++;
      node = node.items[ch];
    }
  }
  let ans: number[] = [];
  for (const word of words) {
    let node = trie, score = 0;
    for (const ch of word) {
      if (node.items.hasOwnProperty(ch)) {
        score += node.items[ch].score;
        node = node.items[ch];
      }
    }
    ans.push(score)
  }
  return ans;  
};