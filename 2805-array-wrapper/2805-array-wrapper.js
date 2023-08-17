class ArrayWrapper {
  constructor(arr) {
    this.arr = arr;
  }
  valueOf() {
    return this.arr.reduce((a, v) => a += v, 0);
  }
  toString() {
    return `[${this.arr.join`,`}]`;
  }
}