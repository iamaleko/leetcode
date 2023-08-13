const rotate = (n, k) => {
    k = k % n.length;
    if (k === 0 || n.length < 2) return n;
    let p = 0, l = 0, m = null, t = k;
    while (true) {
        if (n[p] === null) {
            n[p] = m;
            if (++p < t) {
                m = null;
                ++l;
            } else {
                break;
            }
        } else {
            [n[p], m] = [m, n[p]];
            p = (p + k) % n.length;
            if (p < t && p > l) t = p;
        }
    }
    return n;
};