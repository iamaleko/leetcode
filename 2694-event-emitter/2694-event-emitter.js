class EventEmitter {
  #map;
  #unsubscribe(ev, fn) {
    if (this.#map.hasOwnProperty(ev)) this.#map[ev].delete(fn);
  }
  
  constructor() {
    this.#map = {};
  }
  
  subscribe(ev, fn) {
    if (this.#map.hasOwnProperty(ev)) {
      this.#map[ev].add(fn);
    } else {
      this.#map[ev] = new Set([fn]);
    }
    return { unsubscribe: () => this.#unsubscribe(ev, fn) };
  }
  emit(ev, args = []) {
    const res = [];
    if (this.#map.hasOwnProperty(ev)) for (const fn of this.#map[ev]) res.push(fn(...args))
    return res;
  }
}