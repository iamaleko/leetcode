class Heap {
    constructor(data, comparator) {
        this.comparator = comparator;
        this.map = new Map();
        data.sort((a,b) => this.comparator(a, b));
        this.heap = data;
        for (const i in this.heap) {
            this.map.set(this.heap[i], i);
        }
    }
    update(el) {
      const i = this.map.get(el);
      // console.log('---------------')
      // console.log('from', i, el)
      this.repair(i);
      // console.log('to', this.map.get(el), this.heap)
    }
    repair(i) {
        // this.n = (this.n ?? 0) + 1;
        // if (this.n > 10) return;
        const pi = this.parent(i);
        if (i && this.comparator(this.heap[i], this.heap[pi]) < 0) {
          this.swap(i, pi);
          this.repair(pi);
          // console.log('up', pi)
        } else {
          const ri = this.right(i);
          const li = this.left(i);
          const sm = ri < this.heap.length && li < this.heap.length ? 
                     (this.comparator(this.heap[li], this.heap[ri]) < 0 ? li : ri) :
                     ri < this.heap.length ? ri : li;
          // console.log('down check', sm)
          if (sm < this.heap.length && this.comparator(this.heap[i], this.heap[sm]) > 0) {
            this.swap(i, sm);
            this.repair(sm);
            // console.log('down', sm)
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
  constructor(foods, cuisines, ratings) {
    this.cm = new Map();
    this.fm = new Map();
    const comparator = (a,b) => b[1] === a[1] ? (b < a ? 1 : -1) : b[1] - a[1];
    
    for (const i in foods) {
      const item = [foods[i], ratings[i], cuisines[i]];
      this.fm.set(item[0], item);
      if (this.cm.has(item[2])) {
        this.cm.get(item[2]).push(item);
      } else {
        this.cm.set(item[2], [item]);
      }
    }
    
    for (const [key, val] of this.cm) {
      this.cm.set(key, new Heap(val, comparator));
    }
  }
  
  changeRating(food, rating) {
    const item = this.fm.get(food);
    const heap = this.cm.get(item[2]);
    
    item[1] = rating;
    heap.update(item);
  }
  
  highestRated(cuisine) {
    return this.cm.get(cuisine).peek()[0];
  }
}