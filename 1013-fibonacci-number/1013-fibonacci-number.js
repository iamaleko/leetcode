const fib = function m(n) {
    if (!m.map) m.map = {};
    if (n in m.map) return m.map[n];
    return m.map[n] = n === 1 ? 1 : n ? m(n-1) + m(n-2) : 0;
}