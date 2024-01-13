const minSteps = (s, t, m = {}, n) => {
    let i = t.length;
    
    for (n of s) n in m ? ++m[n] : m[n] = 1;
    for (n of t) if (m[n]) --m[n], --i;
    
    return i;
};