const isHappy = (n) => {
    const m = (n) => {
        let s = 0, d;
        while (n) {
            d = n % 10;
            s += d * d;
            n = Math.floor(n / 10);
        }
        return s;
    }
    let f = n;
    while (true) {
        n = m(n)
        f = m(f)
        if (f === 1) return true;
        f = m(f)
        if (f === 1) return true;
        if (f === n) return false;
    }
};