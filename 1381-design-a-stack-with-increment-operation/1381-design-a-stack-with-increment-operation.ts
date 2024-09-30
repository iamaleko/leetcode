class CustomStack {
  private _stack: number[];
  private _maxSize: number;

  constructor(maxSize: number) {
    this._maxSize = maxSize;
    this._stack = [];    
  }

  push(x: number): void {
    if (this._stack.length < this._maxSize) this._stack.push(x);
  }

  pop(): number {
    return this._stack.length ? this._stack.pop() : -1;
  }

  increment(k: number, val: number): void {
    for (let i = 0, m = Math.min(this._stack.length, k); i < m; i++) this._stack[i] += val;
  }
}