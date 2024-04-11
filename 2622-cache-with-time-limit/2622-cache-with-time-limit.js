class TimeLimitedCache {
  constructor() {
    this.map = new Map()
    this.ind = []
  }
  set(key, val, dur) {
    const now = Date.now(); 
    const ts = now + dur;
    let node = this.map.get(key);
    if (node) {
      const old_ts = node[2];
      node[1] = val;
      node[2] = ts;
      return old_ts >= now;
    } else {
      node = [key, val, ts];
      this.map.set(key, node);
      this.ind.push(node);
      return false;
    }
  }
  get(key) {
    const node = this.map.get(key);
    if (node && node[2] >= Date.now()) return node[1];
    return -1;
  }
  count() {
    const now = Date.now();
    const ind = []
    for (const node of this.ind) {
      if (node[2] < now) {
        this.map.delete(node[0]);
      } else {
        ind.push(node);
      }
    }
    this.ind = ind;
    return this.ind.length;
  }
}