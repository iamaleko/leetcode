type Booking = { start: number, end: number };
class MyCalendarTwo {
  private _singles: Booking[];
  private _doubles: Booking[];
  constructor() {
    this._singles = [];
    this._doubles = [];
  }
  private _search(n: number, arr: Booking[]): number {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
      const c = l + r >>> 1;
      if (arr[c].end <= n) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
    return l;
  }
  book(start: number, end: number): boolean {
    // console.log('----------', start, end)
    // const over: Booking[] = [];
    // const non: Booking[] = [];

    // check overbooking
    const i = this._search(start, this._doubles);
    if (i !== this._doubles.length && this._doubles[i].start < end) return false;

    // update singles and doubles
    const q: Booking[] = [{start: start, end: end}];
    while (q.length) {
      const booking = q.pop();
      // find booking in singles
      const j = this._search(booking.start, this._singles);
      if (j !== this._singles.length && this._singles[j].start < booking.end) {
        // insert overbook into doubles
        const overbook = {
          start: Math.max(booking.start, this._singles[j].start),
          end: Math.min(booking.end, this._singles[j].end),
        };
        const k = this._search(overbook.start, this._doubles);
        // if (k !== this._doubles.length && this._doubles[k].start < overbook.end) {
        //   console.log('double overbook found', this._doubles[k], overbook);
        //   return false;
        // }
        // over.push(overbook);
        this._doubles.splice(k, 0, overbook);
        // add non-overbooked segments to q and proceed
        if (booking.start < overbook.start && booking.end > overbook.end) { // split in two
          q.push({ start: booking.start, end: overbook.start }, { start: overbook.end, end: booking.end });
        } else if (booking.start < overbook.start) {
          q.push({ start: booking.start, end: overbook.start });
        } else if (booking.end > overbook.end) {
          q.push({ start: overbook.end, end: booking.end });
        }
      } else {
        // insert booking into singles
        this._singles.splice(j, 0, booking);
        // non.push(booking);
      }
    }

    // console.log('found over', over);
    // console.log('found non', non);
    // console.log('singles', this._singles)
    // console.log('doubles', this._doubles)

    return true;
  }
}