class TrieNode {
  terminator: boolean = false;
  children: Record<string, TrieNode> = {};
}

class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }
  addWord(word: string, p: number = 0, node: TrieNode = this.root): void {
    if (!node.children.hasOwnProperty(word[p])) node.children[word[p]] = new TrieNode();
    // if (!node.children.hasOwnProperty('.')) node.children['.'] = new TrieNode();
    if (p === word.length - 1) {
      node.children[word[p]].terminator = true;
      // node.children['.'].terminator = true;
    } else {
      this.addWord(word, p + 1, node.children[word[p]]);
      // this.addWord(word, p + 1, node.children['.']);
    }
  }
  search(word: string, p: number = 0, node: TrieNode = this.root): boolean {
    if (p === word.length) return node.terminator;
    if (word[p] === '.') {
      for (const ch in node.children) {
        if (this.search(word, p + 1, node.children[ch])) return true;
      }
    } else if (node.children.hasOwnProperty(word[p])) {
      return this.search(word, p + 1, node.children[word[p]]);
    }
    return false;
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */