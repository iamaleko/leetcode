type Booking = [number, number];

class MyCalendar {
  #bookings: Booking[];

  constructor() {
    this.#bookings = [];
  }

  #search(n: number): number {
    let l = 0, r = this.#bookings.length - 1;
    while (l <= r) {
      const c = l + r >>> 1;
      if (this.#bookings[c][1] <= n) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
    return l;
  }

  book(start: number, end: number): boolean {
    const i = this.#search(start);
    if (i !== this.#bookings.length && this.#bookings[i][0] < end) return false;
    this.#bookings.splice(i, 0, [start, end]);
    return true;
  }
}