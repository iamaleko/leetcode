const minSteps = (s, t) => {
    const a = {}, b = {};
    let steps = 0, n;
    
    for (n of s) n in a ? ++a[n] : a[n] = 1;
    for (n of t) if (n in a && b[n] !== a[n]) n in b ? ++b[n] : b[n] = 1;
    for (n in a) steps += n in b ? a[n] - b[n] : a[n];
    
    return steps;
};