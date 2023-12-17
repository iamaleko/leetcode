class Heap {
  constructor(data, comparator) {
    this.comparator = (a, b) => {
      return comparator(this.heap[a], this.heap[b]);
    };
    this.map = new Map();
    data.sort((a,b) => comparator(a, b));
    this.heap = data;
    for (const i in this.heap) {
        this.map.set(this.heap[i], i);
    }
  }
  update(el) {
    const i = this.map.get(el);
    this.repair(i);
  }
  repair(i) {
      const pi = this.parent(i);
      if (i && this.comparator(i, pi) < 0) {
        this.swap(i, pi);
        this.repair(pi);
      } else {
        const ri = this.right(i);
        const li = this.left(i);
        const si = ri in this.heap && li in this.heap && this.comparator(li, ri) >= 0 ? ri : li;
        if (si in this.heap && this.comparator(i, si) > 0) {
          this.swap(i, si);
          this.repair(si);
        }
      }
  }
  parent(i) {
    return i>>>1;
  }
  left(i) {
    return i * 2;
  }
  right(i) {
    return i * 2 + 1;
  }
  swap(a,b) {
    this.map.set(this.heap[a], b);
    this.map.set(this.heap[b], a);
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }
  peek() {
    return this.heap[0];
  }
}

class FoodRatings {
  // O(n log n)
  constructor(foods, cuisines, ratings) {
    this.cm = new Map();
    this.fm = new Map();
    
    for (const i in foods) {
      const item = [foods[i], ratings[i], cuisines[i]];
      this.fm.set(item[0], item);
      if (this.cm.has(item[2])) {
        this.cm.get(item[2]).push(item);
      } else {
        this.cm.set(item[2], [item]);
      }
    }
    
    const comparator = (a,b) => b[1] === a[1] ? (b === a ? 0 : b < a ? 1 : -1) : b[1] - a[1];
    for (const [key, val] of this.cm) {
      this.cm.set(key, new Heap(val, comparator));
    }
  }
  
  // O(log n)
  changeRating(food, rating) {
    const item = this.fm.get(food);
    item[1] = rating;
    this.cm.get(item[2]).update(item);
  }
  
  // O(1)
  highestRated(cuisine) {
    return this.cm.get(cuisine).peek()[0];
  }
}