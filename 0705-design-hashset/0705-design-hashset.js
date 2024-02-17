class MyHashSet {
  constructor() {
    this.size = 1000;
    this.table = [];
  }
  expandTable() {

  }
  getIndex(key) {
    return key % this.size;
  }
  add(key) {
    if (this.contains(key)) return;
    const index = this.getIndex(key);
    if (this.table[index] === undefined) this.table[index] = [];
    // if (this.table[index].length === 10) {
    //   this.expandTable();
    //   this.add(key);
    // } else {
      this.table[index].push(key);
    // }
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