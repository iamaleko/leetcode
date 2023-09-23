class MyStack {
  constructor() {
    this.queue = [];
  }
  push(num) {
    this.queue.push(num);
  }
  pop() {
    let i = this.queue.length;
    while (--i) this.queue.push(this.queue.shift())
    return this.queue.shift();
  }
  top() {
    let i = this.queue.length;
    while (--i) this.queue.push(this.queue.shift())
    const top = this.queue[0];
    this.queue.push(this.queue.shift());
    return top;
  }
  empty() {
    return this.queue.length === 0;
  }
}