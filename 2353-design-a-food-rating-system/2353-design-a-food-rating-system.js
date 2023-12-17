/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
    const indexOfFood = this.foods.findIndex((el) => el === food);
    this.ratings[indexOfFood] = newRating;
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    const length = this.foods.length;

    const newFoodRatings = {
        highestRatedFoods: [],
        highestRating: 0
    }
    for (let i = 0; i < length; i++) {
        if (this.cuisines[i] === cuisine) {
            if (this.ratings[i] > newFoodRatings.highestRating) {
                newFoodRatings.highestRatedFoods = [this.foods[i]]
                newFoodRatings.highestRating = this.ratings[i]
            } else if (this.ratings[i] === newFoodRatings.highestRating) {
                newFoodRatings.highestRatedFoods.push(this.foods[i])
            }
        }
    }
    return newFoodRatings.highestRatedFoods.sort()[0];
};

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
//       } else { // serach till end
//         const l = this.search(i, arr.length - 1, arr, item, rating);
//         arr.splice(l, 0, item);
//         arr.splice(i, 1)
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