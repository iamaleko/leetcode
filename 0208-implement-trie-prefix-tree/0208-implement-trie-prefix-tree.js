class Trie {
  constructor() {
    this.root = {};
    this.end = Symbol();
  }
  insert(s) {
    let n = this.root, i = 0;
    for (let i = 0; i < s.length; i++) {
      if (!n.hasOwnProperty(s[i])) n[s[i]] = {};
      n = n[s[i]];
    }
    n[this.end] = 1;
  }
  search(s) {
    let n = this.root;
    for (let i = 0; i < s.length; i++) {
      if (!n.hasOwnProperty(s[i])) return false;
      n = n[s[i]];
    }
    return n.hasOwnProperty(this.end);
  }
  startsWith(s) {
    let n = this.root;
    for (let i = 0; i < s.length; i++) {
      if (!n.hasOwnProperty(s[i])) return false;
      n = n[s[i]];
    }
    return true;
  }
}