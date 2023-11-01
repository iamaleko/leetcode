/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  return {
    cnt: init,
    increment: function() { return ++this.cnt },
    decrement: function() { return --this.cnt },
    reset: function() { return this.cnt = init },
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */