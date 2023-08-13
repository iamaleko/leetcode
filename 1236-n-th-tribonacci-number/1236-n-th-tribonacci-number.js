const tribonacci = function m(n) {
    if (!m.map) m.map = {};
    if (m.map[n]) return m.map[n];
    return m.map[n] = n === 0 ? 0 : n > 2 ? m(n - 3) + m(n - 2) + m(n - 1) : 1;
}