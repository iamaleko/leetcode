class FoodRatings {
  constructor(foods, cuisines, ratings) {
    this.cm = new Map();
    this.fm = new Map();
    
    const arr = [];
    for (const i in foods) {
      arr.push([foods[i], ratings[i], cuisines[i]]);
    }
    arr.sort((a,b) => b[1] === a[1] ? (b < a ? 1 : -1) : b[1] - a[1]);
    
    for (const item of arr) {
      this.fm.set(item[0], item);
      if (this.cm.has(item[2])) {
        this.cm.get(item[2]).push(item);
      } else {
        this.cm.set(item[2], [item]);
      }
    }
  }
  
  changeRating(food, rating) {
    const item = this.fm.get(food);
    
    if (item[1] !== rating) {
      const arr = this.cm.get(item[2]);
      
      let i = this.search(0, arr.length - 1, arr, item[0], item[1]);
      arr.splice(i, 1)
      
      item[1] = rating;
      
      i = this.search(0, arr.length - 1, arr, item[0], item[1]);
      arr.splice(i, 0, item);
    }
  }
  
  search(l, r, arr, name, rating) {
    let c;
    while (l <= r) {
      c = l + r >> 1;
      if (arr[c][1] > rating || arr[c][1] === rating && name > arr[c][0]) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
    return l;
  }
  
  highestRated(cuisine) {
    return this.cm.get(cuisine)[0][0];
  }
}