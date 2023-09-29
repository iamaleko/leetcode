class OrderedStream {
  #arr;
  #i;
  constructor(size) {
    this.#arr = new Array(size).fill(undefined);
    this.#i = 0;
  }
  insert(i, str) {
    this.#arr[i - 1] = str;
    i = this.#i;
    while (this.#arr[this.#i]) ++this.#i;
    return this.#arr.slice(i, this.#i);
  }
}