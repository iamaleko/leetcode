const minSteps = (s, t) => {
    const m = {};
    let steps = t.length;
    
    for (n of s) n in m ? ++m[n] : m[n] = 1;
    for (n of t) if (m[n] > 0) --m[n] | --steps;
    
    return steps;
};