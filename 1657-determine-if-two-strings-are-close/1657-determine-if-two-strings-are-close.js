const closeStrings = (a, b, l = 0) => {
    const am = new Map();
    const bm = new Map();
    for (const n of a) am.set(n, (am.get(n) || 0) + 1);
    for (const n of b) bm.set(n, (bm.get(n) || 0) + 1);
    a = [...am.keys()].sort().concat([...am.values()].sort((a, b) => a - b));
    b = [...bm.keys()].sort().concat([...bm.values()].sort((a, b) => a - b));
    if (a.length !== b.length) return false;
    for (const i in a) if (a[i] !== b[i]) return false;
    return true;
};

