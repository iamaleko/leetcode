const convert = (s, n) => {
    if (n === 1 || s.length < n) return s;
    let r = Array(n--).fill(''), p = 0, a = 1, e;
    for (e of s) {
        r[p] += e;
        p += a;
        if (p === n || p === 0) a = -a;
    }
    return r.join('')
};