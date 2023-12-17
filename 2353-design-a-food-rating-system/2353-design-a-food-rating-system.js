class FoodRatings {
  constructor(foods, cuisines, ratings) {
    this.cm = new Map();
    this.fm = new Map();
    
    for (const i in foods) {
      const item = [foods[i], ratings[i], cuisines[i]];
      this.fm.set(foods[i], item);
      if (this.cm.has(cuisines[i])) {
        this.cm.get(cuisines[i]).push(item);
      } else {
        this.cm.set(cuisines[i], [item]);
      }
    }
    
    for (const [, arr] of this.cm) {
      arr.sort((a,b) => b[1] === a[1] ? (b < a ? 1 : -1) : b[1] - a[1]);
    }
  }
  
  changeRating(food, rating) {
    const item = this.fm.get(food);
    
    if (item[1] !== rating) {
      const arr = this.cm.get(item[2]);
      const i = arr.indexOf(item);
      
      if (item[1] < rating) { // search till start
        const l = this.search(0, i, arr, item[0], rating);
        arr.splice(i, 1)
        arr.splice(l, 0, item);
      } else { // serach till end
        const l = this.search(i, arr.length - 1, arr, item[0], rating);
        arr.splice(l, 0, item);
        arr.splice(i, 1)
      }
      item[1] = rating;
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
    const arr = this.cm.get(cuisine);
    return arr[0] ? arr[0][0] : null;
  }
}