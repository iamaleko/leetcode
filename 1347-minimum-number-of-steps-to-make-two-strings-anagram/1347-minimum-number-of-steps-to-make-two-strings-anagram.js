const minSteps = (s, t) => {
    const a = new Map();
    const b = new Map();
    
    for (const n of s) a[n] = a[n] ? a[n] + 1 : 1;
    for (const n of t) if (n in a && b[n] !== a[n]) b[n] = b[n] ? b[n] + 1 : 1;
    
    let steps = 0;
    for (const n in a) steps += a[n] - (b[n] || 0);
    
    return steps;
};