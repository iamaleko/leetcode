class ParkingSystem {
  static big = 1;
  static medium = 2;
  static small = 3;

  #capacity = {};

  constructor(big, medium, small) {
    this.#capacity[this.constructor.big] = big;
    this.#capacity[this.constructor.medium] = medium;
    this.#capacity[this.constructor.small] = small;
  }

  addCar(type) {
    return --this.#capacity[type] >= 0;
  }
}