type Booking = { start: number, end: number };

class MyCalendar {
  private _bookings: Booking[];
  constructor() {
    this._bookings = [];
  }

  private _search(n: number): number {
    let l = 0, r = this._bookings.length - 1;
    while (l <= r) {
      const c = l + r >>> 1;
      if (this._bookings[c].end <= n) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
    return l;
  }

  book(start: number, end: number): boolean {
    const i = this._search(start);
    if (i !== this._bookings.length && this._bookings[i].start < end) return false;
    this._bookings.splice(i, 0, { start: start, end: end });
    return true;
  }
}