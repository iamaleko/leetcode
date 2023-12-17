function FoodRatings(foods, cuisines, ratings) {
    let n = foods.length, cm = new Map(), fm = new Map(); // cm: cuisine map {cuisine: pq}, fm: food map {food: [cuisine, rating]}
    for (let i = 0; i < n; i++) {
        fm.set(foods[i], [cuisines[i], ratings[i]]);
        if (!cm.has(cuisines[i])) {
            let pq = new MaxPriorityQueue({
                compare: (x, y) => {
                    if (x[0] != y[0]) return y[0] - x[0]; // first priority: high rate comes first
                    return x[1].localeCompare(y[1]); // second priority: lexical smaller comes first
                }
            });
            cm.set(cuisines[i], pq);
        }
        cm.get(cuisines[i]).enqueue([ratings[i], foods[i]])
    }
    return { changeRating, highestRated }
    function changeRating(food, newRating) {
        let cur = fm.get(food), cuisine = cur[0];
        cur[1] = newRating;
        fm.set(food, cur);
        cm.get(cuisine).enqueue([newRating, food]);
    }
    function highestRated(cuisine) {
        let pq = cm.get(cuisine);
        while (fm.get(pq.front()[1])[1] != pq.front()[0]) pq.dequeue(); // lazy remove
        return pq.front()[1];
    }
}

// class FoodRatings {
//   constructor(foods, cuisines, ratings) {
//     this.cuisineIndex = new Map();
//     this.foodIndex = new Map();
    
//     for (const i in foods) {
//       const item = [foods[i], ratings[i], cuisines[i]];
//       this.foodIndex.set(foods[i], item);
//       if (this.cuisineIndex.has(cuisines[i])) {
//         this.cuisineIndex.get(cuisines[i]).push(item);
//       } else {
//         this.cuisineIndex.set(cuisines[i], [item]);
//       }
//     }
    
//     for (const [, cuisine] of this.cuisineIndex) {
//       cuisine.sort((a,b) => b[1] === a[1] ? (b < a ? 1 : -1) : b[1] - a[1]);
//     }
//   }
  
//   changeRating(food, rating) {
//     const item = this.foodIndex.get(food);
//     if (item[1] !== rating) {
//       const arr = this.cuisineIndex.get(item[2]);
//       const i = arr.indexOf(item);
      
//       if (item[1] < rating) { // search till start
//         const l = this.search(0, i, arr, item, rating);
//         arr.splice(i, 1)
//         arr.splice(l, 0, item);
//         // console.log(rating, item, arr, i, l, '<')
//       } else { // serach till end
//         const l = this.search(i, arr.length - 1, arr, item, rating);
//         arr.splice(l, 0, item);
//         arr.splice(i, 1)
//         // console.log(rating, item, arr, i, l, '>')  
//       }
//       item[1] = rating;
//     }
//   }
  
//   search(l, r, arr, item, rating) {
//     let c;
//     while (l <= r) {
//       c = l + r >> 1;
//       if (arr[c][1] > rating || arr[c][1] === rating && item[0] > arr[c][0]) {
//         l = c + 1;
//       } else {
//         r = c - 1;
//       }
//     }
//     return l;
//   }
  
//   highestRated(cuisine) {
//     const arr = this.cuisineIndex.get(cuisine);
//     return arr[0] ? arr[0][0] : null;
//   }
// }