/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  return this.length ? this.at(-1) : -1;  
};