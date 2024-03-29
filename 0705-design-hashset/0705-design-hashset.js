class MyHashSet {
  constructor() {
    this.size = 1000;
    this.table = [];
    this.maxBucketSize = 10;
    this.allowExpand = true;
  }
  expandTable() {
    this.allowExpand = false;
    const table = this.table;
    this.table = [];
    this.size *= 2;
    for (const bucket of table) {
      if (bucket) for (const key of bucket) {
        this.add(key);
      }
    }
    this.allowExpand = true;
  }
  hash(val) {
    let n = 0;
    const str = String(val);
    for (let i = 0; i < str.length; ++i) {
        n = ((n << 5) - n + str.charCodeAt(i)) | 0;
    }
    return Math.abs(n);
  }
  getIndex(key) {
    return this.hash(key) % this.size;
  }
  add(key) {
    if (this.contains(key)) return;
    const index = this.getIndex(key);
    if (this.table[index] === undefined) this.table[index] = [];
    if (this.table[index].length === this.maxBucketSize && this.allowExpand) {
      this.expandTable();
      this.add(key);
    } else {
      this.table[index].push(key);
    }
  }
  remove(key) {
    const index = this.getIndex(key);
    if (this.table[index] !== undefined) {
      for (const i in this.table[index]) {
        if (this.table[index][i] === key) {
          this.table[index].splice(i, 1);
          if (!this.table[index].length) this.table[index] = undefined;
          return;
        }
      }
    }
  }
  contains(key) {
    const index = this.getIndex(key);
    if (this.table[index] !== undefined) {
      for (const i in this.table[index]) {
        if (this.table[index][i] === key) return true;
      }
    }
    return false;
  }
}