class RandomizedSet {
  constructor() {
    this.index = [];
    this.map = {};
  }

  insert(int) {
    if (!(int in this.map)) {
      this.index.push(int);
      this.map[int] = this.index.length - 1;
      return true;
    }
    return false;
  }

  remove(int) {
    if (int in this.map) {
      const index = this.map[int];
      const item = this.index.pop();
      if (this.index.length !== index) {
        this.index[index] = item;
        this.map[item] = index; 
      }
      delete this.map[int];
      return true;
    }
    return false;
  }

  getRandom() {
    if (this.index.length) {
      return this.index[Math.floor(Math.random() * this.index.length)];
    }
    return null;
  }
}