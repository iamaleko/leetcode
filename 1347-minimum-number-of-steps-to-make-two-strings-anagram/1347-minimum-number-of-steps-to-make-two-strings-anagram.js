const minSteps = (s, t) => {
    const m = {};
    let i = t.length, n;
    
    for (n of s) n in m ? ++m[n] : m[n] = 1;
    for (n of t) if (m[n]) --m[n], --i;
    
    return i;
};