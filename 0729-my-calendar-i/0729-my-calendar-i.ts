type Booking = {
  start: number,
  end: number,
}
enum SearchType {
  Start = 'start',
  End = 'end',
}

class MyCalendar {
  bookings: Booking[];

  constructor() {
    this.bookings = [];
  }

  #search(n: number): number {
    let l = 0, r = this.bookings.length - 1;
    while (l <= r) {
      const c = l + r >>> 1;
      if (this.bookings[c].end <= n) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
    return l;
  }

  book(start: number, end: number): boolean {
    const i = this.#search(start);
    // console.log(start, end, this.bookings, i, i !== this.bookings.length && this.bookings[i].start < end);
    if (i !== this.bookings.length && this.bookings[i].start < end) return false;
    const booking: Booking = { start: start, end: end };
    this.bookings.splice(i, 0, booking);
    return true;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */