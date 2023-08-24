class MyQueue {
  constructor() {
    this.in = [];
    this.out = [];
  }
  push(int) {
    this.in.push(int);
  }
  pop() {
    if (this.out.length) {
      return this.out.pop();
    }
    while (1 in this.in) this.out.push(this.in.pop());
    return this.in.pop();
  }
  peek() {
    return this.out.at(-1) ?? this.in.at(0);
  }
  empty() {
    return !this.out.length && !this.in.length;
  }
}