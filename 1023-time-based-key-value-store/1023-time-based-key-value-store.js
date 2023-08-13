class TimeMap {
  #storage = {};

  set(key, value, timestamp) {
    if (this.#storage[key] === undefined) {
      this.#storage[key] = {
        index: [timestamp],
        data: { [timestamp]: value },
      };
    } else {
      this.#storage[key].index.push(timestamp);
      this.#storage[key].data[timestamp] = value;
    }
  }

  #findIndexPosition(index, timestamp) {
    let c, l = 0, r = index.length - 1;
    if (timestamp > index[r]) return r;
    if (timestamp < index[l]) return;
    while (l < r) {
      c = (l + r) / 2 | 0;
      if (index[c] < timestamp) { l = c + 1; } else { r = c - 1; }
    }
    return l - 1;
  }

  get(key, timestamp) {
    if (this.#storage[key] !== undefined) {
      if (this.#storage[key].data[timestamp] !== undefined) {
        return this.#storage[key].data[timestamp];
      }
      const pos = this.#findIndexPosition(this.#storage[key].index, timestamp);
      if (pos !== undefined) {
        return this.#storage[key].data[this.#storage[key].index[pos]];
      }
    }
    return '';
  }
}