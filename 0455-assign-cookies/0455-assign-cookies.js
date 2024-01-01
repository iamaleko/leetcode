const findContentChildren = (g, s) => {
    if (!g.length || !s.length) return 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let l = 0, r = 0;
    while (l in g && r in s) s[r++] < g[l] || ++l;
    return l;
};