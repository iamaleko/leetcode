class ArrayWrapper {
  constructor(arr) {
    // this.arr = arr;
    this.a = arr.reduce((a, v) => a += v, 0);
    this.b = `[${arr.join`,`}]`;
  }
  valueOf() {
    return this.a
    // return this.arr.reduce((a, v) => a += v, 0);
  }
  toString() {
    return this.b
    // return `[${this.arr.join`,`}]`;
  }
}