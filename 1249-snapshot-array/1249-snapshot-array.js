class SnapshotArray {
  #storage = {};
  #snap_id = 0;

  snap() {
    return this.#snap_id++;
  }

  set(key, value) {
    if (this.#storage[key] === undefined) {
      this.#storage[key] = {
        index: [this.#snap_id],
        data: { [this.#snap_id]: value },
      };
    } else {
      if (this.#storage[key].data[this.#snap_id] === undefined) {
        this.#storage[key].index.push(this.#snap_id);
      }
      this.#storage[key].data[this.#snap_id] = value;
    }
  }

  #findIndexPosition(index, snap_id) {
    let c, l = 0, r = index.length - 1;
    if (snap_id > index[r]) return r;
    if (snap_id < index[l]) return;
    while (l < r) {
      c = (l + r) / 2 | 0;
      if (index[c] < snap_id) { l = c + 1; } else { r = c; }
    }
    return l - 1;
  }

  get(key, snap_id) {
    if (this.#storage[key] !== undefined) {
      if (this.#storage[key].data[snap_id] !== undefined) {
        return this.#storage[key].data[snap_id];
      }
      const pos = this.#findIndexPosition(this.#storage[key].index, snap_id);
      if (pos !== undefined) {
        return this.#storage[key].data[this.#storage[key].index[pos]];
      }
    }
    return 0;
  }
}